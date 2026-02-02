import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      ownerAge,
      dailyBillCount,
      upiVsCashPercent,
      wholesalerApp,
      q1, q2, q3, q4, q5, q6, q7, q8,
      q9, q10, q11, q12, q13, q14, q15, q16
    } = body;

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

    // Check if "Mavas Survey" sheet exists, if not create it
    try {
      const spreadsheet = await sheets.spreadsheets.get({
        spreadsheetId,
      });

      const mavasSurveySheet = spreadsheet.data.sheets?.find(
        sheet => sheet.properties?.title === 'Mavas Survey'
      );

      if (!mavasSurveySheet) {
        // Create Mavas Survey sheet
        await sheets.spreadsheets.batchUpdate({
          spreadsheetId,
          requestBody: {
            requests: [
              {
                addSheet: {
                  properties: {
                    title: 'Mavas Survey',
                  },
                },
              },
            ],
          },
        });

        // Add headers
        const headers = [[
          'Timestamp',
          'Owner Age',
          'Daily Bill Count',
          'UPI vs Cash %',
          'Wholesaler App',
          'Q1: Sales hisaab kaise',
          'Q2: Entry time kitna',
          'Q3: Rush me entry mushkil',
          'Q4: Bluetooth earbuds',
          'Q5: Voice update helpful',
          'Q6: Stockout frequency',
          'Q7: Restock decision',
          'Q8: Dead stock',
          'Q9: Wholesaler comparison',
          'Q10: Mandi rate benefit',
          'Q11: AI agent for negotiation',
          'Q12: Cash shortage issue',
          'Q13: Budget priority decision',
          'Q14: Profit separation',
          'Q15: Festival stocking',
          'Q16: Price alert premium'
        ]];

        await sheets.spreadsheets.values.update({
          spreadsheetId,
          range: 'Mavas Survey!A1:U1',
          valueInputOption: 'RAW',
          requestBody: {
            values: headers,
          },
        });
      }
    } catch (error) {
      console.error('Error checking/creating Mavas Survey sheet:', error);
    }

    // Get current IST timestamp
    const timestamp = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });

    // Prepare data for Google Sheets
    const values = [
      [
        timestamp,
        ownerAge || '',
        dailyBillCount || '',
        upiVsCashPercent || '',
        wholesalerApp || '',
        q1 || '',
        q2 || '',
        q3 || '',
        q4 || '',
        q5 || '',
        q6 || '',
        q7 || '',
        q8 || '',
        q9 || '',
        q10 || '',
        q11 || '',
        q12 || '',
        q13 || '',
        q14 || '',
        q15 || '',
        q16 || ''
      ]
    ];

    // Append data to Mavas Survey sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Mavas Survey!A:U',
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values,
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Survey submitted successfully!'
    });

  } catch (error: unknown) {
    const err = error as { message?: string; code?: number };
    console.error('Mavas Survey API error:', error);

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
      { error: 'Failed to submit survey. Please try again.' },
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
      message: 'Mavas Survey API is working!',
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
