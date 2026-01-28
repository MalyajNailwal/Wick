import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      employeeName,
      location,
      checkInTime,
      checkInCoordinates,
      checkInPhoto,
      checkOutTime,
      checkOutCoordinates,
      checkOutPhoto
    } = body;

    // Validate required fields
    if (!employeeName || !location || !checkInTime || !checkOutTime) {
      return NextResponse.json(
        { error: 'Missing required fields' },
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

    // Check if "Attendance" sheet exists, if not create it
    try {
      const spreadsheet = await sheets.spreadsheets.get({
        spreadsheetId,
      });

      const attendanceSheet = spreadsheet.data.sheets?.find(
        sheet => sheet.properties?.title === 'Attendance'
      );

      if (!attendanceSheet) {
        // Create Attendance sheet
        await sheets.spreadsheets.batchUpdate({
          spreadsheetId,
          requestBody: {
            requests: [
              {
                addSheet: {
                  properties: {
                    title: 'Attendance',
                  },
                },
              },
            ],
          },
        });

        // Add headers
        const headers = [[
          'Employee Name',
          'Location',
          'Check-In Time',
          'Check-In Coordinates',
          'Check-In Photo',
          'Check-Out Time',
          'Check-Out Coordinates',
          'Check-Out Photo',
          'Date'
        ]];

        await sheets.spreadsheets.values.update({
          spreadsheetId,
          range: 'Attendance!A1:I1',
          valueInputOption: 'RAW',
          requestBody: {
            values: headers,
          },
        });
      }
    } catch (error) {
      console.error('Error checking/creating Attendance sheet:', error);
    }

    // Format photos as IMAGE formulas if they exist
    const checkInPhotoFormula = checkInPhoto 
      ? `=IMAGE("${checkInPhoto}")` 
      : '';
    const checkOutPhotoFormula = checkOutPhoto 
      ? `=IMAGE("${checkOutPhoto}")` 
      : '';

    // Format dates
    const checkInDate = new Date(checkInTime);
    const checkOutDate = new Date(checkOutTime);
    const dateStr = checkInDate.toLocaleDateString('en-IN');

    // Prepare data for Google Sheets
    const values = [
      [
        employeeName,
        location,
        checkInDate.toLocaleString('en-IN'),
        checkInCoordinates || '',
        checkInPhotoFormula,
        checkOutDate.toLocaleString('en-IN'),
        checkOutCoordinates || '',
        checkOutPhotoFormula,
        dateStr
      ]
    ];

    // Append data to Attendance sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Attendance!A:I',
      valueInputOption: 'USER_ENTERED', // Important: USER_ENTERED to process formulas
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values,
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Attendance recorded successfully!'
    });

  } catch (error: unknown) {
    const err = error as { message?: string; code?: number };
    console.error('Attendance API error:', error);

    if (err.code === 403) {
      return NextResponse.json(
        { error: 'Access denied to Google Sheet. Please check permissions.' },
        { status: 403 }
      );
    }

    if (err.code === 404) {
      return NextResponse.json(
        { error: 'Google Sheet not found.' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to record attendance. Please try again.' },
      { status: 500 }
    );
  }
}

// Test endpoint
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

    const spreadsheet = await sheets.spreadsheets.get({
      spreadsheetId,
    });

    return NextResponse.json({
      success: true,
      message: 'Attendance API is working!',
      sheets: spreadsheet.data.sheets?.map(sheet => sheet.properties?.title)
    });

  } catch (error: unknown) {
    const err = error as { message?: string };
    console.error('Test failed:', error);
    return NextResponse.json({
      success: false,
      error: err.message
    }, { status: 500 });
  }
}
