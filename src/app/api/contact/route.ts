import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, company, subject, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Google Sheets API setup
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SHEETS_ID;

    if (!spreadsheetId) {
      throw new Error('Google Sheets ID not configured');
    }

    // Prepare data for Google Sheets
    const timestamp = new Date().toISOString();
    const values = [
      [
        firstName,
        lastName,
        email,
        phone || '',
        company || '',
        subject,
        message,
        timestamp
      ]
    ];

    // First, check if headers exist, if not, add them
    try {
      const headerCheck = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: 'Sheet1!A1:H1',
      });

      // If no headers exist, add them
      if (!headerCheck.data.values || headerCheck.data.values.length === 0) {
        const headers = [['First Name', 'Last Name', 'Email', 'Phone', 'Company', 'Subject', 'Message', 'Timestamp']];
        await sheets.spreadsheets.values.update({
          spreadsheetId,
          range: 'Sheet1!A1:H1',
          valueInputOption: 'RAW',
          requestBody: {
            values: headers,
          },
        });
      }
    } catch (headerError: unknown) {
      const error = headerError as { message?: string; code?: number; status?: number };
      console.error('Error checking/adding headers:', headerError);
      console.error('Error details:', {
        message: error.message,
        code: error.code,
        status: error.status
      });

      // If it's a permission error, return specific message
      if (error.code === 403) {
        return NextResponse.json(
          { error: 'Google Sheet access denied. Please share the sheet with the service account.' },
          { status: 403 }
        );
      }

      // Continue anyway, headers might already exist
    }

    // Append data to Google Sheets
    try {
      const response = await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: 'Sheet1!A:H', // Assuming columns A-H for the data
        valueInputOption: 'RAW',
        insertDataOption: 'INSERT_ROWS',
        requestBody: {
          values,
        },
      });
    } catch (appendError: unknown) {
      const error = appendError as { message?: string; code?: number; status?: number };
      console.error('Error appending data to Google Sheets:', appendError);
      console.error('Append error details:', {
        message: error.message,
        code: error.code,
        status: error.status
      });

      // Handle specific error cases
      if (error.code === 403) {
        return NextResponse.json(
          { error: 'Access denied to Google Sheet. Please share the sheet with: wickautomation@wickwebsitesubdata.iam.gserviceaccount.com' },
          { status: 403 }
        );
      }

      if (error.code === 404) {
        return NextResponse.json(
          { error: 'Google Sheet not found. Please check the sheet ID and permissions.' },
          { status: 404 }
        );
      }

      // For other errors, provide a generic message but log the details
      return NextResponse.json(
        { error: 'Failed to save data to Google Sheets. Please try again or contact support.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.'
    });

  } catch (error: unknown) {
    const err = error as { message?: string };
    console.error('Contact form error:', error);

    // More specific error handling
    if (err.message?.includes('Google Sheets')) {
      return NextResponse.json(
        { error: 'Failed to save data. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}

// Test endpoint to verify Google Sheets access
export async function GET() {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SHEETS_ID;

    // Try to get spreadsheet info
    const spreadsheet = await sheets.spreadsheets.get({
      spreadsheetId,
    });

    return NextResponse.json({
      success: true,
      message: 'Google Sheets access successful!',
      sheetTitle: spreadsheet.data.properties?.title,
      sheets: spreadsheet.data.sheets?.map(sheet => sheet.properties?.title)
    });

  } catch (error: unknown) {
    const err = error as { message?: string; code?: number };
    console.error('Google Sheets test failed:', error);
    return NextResponse.json({
      success: false,
      error: err.message,
      code: err.code,
      details: 'Check sharing permissions and try again'
    }, { status: 500 });
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}