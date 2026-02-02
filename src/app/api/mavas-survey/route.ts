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
      q1, q1_comment,
      q2, q2_comment,
      q3, q3_comment,
      q4, q4_comment,
      q5, q5_comment,
      q6, q6_comment,
      q7, q7_comment,
      q8, q8_comment,
      q9, q9_comment,
      q10, q10_comment,
      q11, q11_comment,
      q12, q12_comment,
      q13, q13_comment,
      q14, q14_comment,
      q15, q15_comment,
      q16, q16_comment,
      comments
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
          'Q1 Comment',
          'Q2: Entry time kitna',
          'Q2 Comment',
          'Q3: Rush me entry mushkil',
          'Q3 Comment',
          'Q4: Bluetooth earbuds',
          'Q4 Comment',
          'Q5: Voice update helpful',
          'Q5 Comment',
          'Q6: Stockout frequency',
          'Q6 Comment',
          'Q7: Restock decision',
          'Q7 Comment',
          'Q8: Dead stock',
          'Q8 Comment',
          'Q9: Wholesaler comparison',
          'Q9 Comment',
          'Q10: Mandi rate benefit',
          'Q10 Comment',
          'Q11: AI agent for negotiation',
          'Q11 Comment',
          'Q12: Cash shortage issue',
          'Q12 Comment',
          'Q13: Budget priority decision',
          'Q13 Comment',
          'Q14: Profit separation',
          'Q14 Comment',
          'Q15: Festival stocking',
          'Q15 Comment',
          'Q16: Price alert premium',
          'Q16 Comment',
          'General Comments'
        ]];

        await sheets.spreadsheets.values.update({
          spreadsheetId,
          range: 'Mavas Survey!A1:AK1',
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
        q1_comment || '',
        q2 || '',
        q2_comment || '',
        q3 || '',
        q3_comment || '',
        q4 || '',
        q4_comment || '',
        q5 || '',
        q5_comment || '',
        q6 || '',
        q6_comment || '',
        q7 || '',
        q7_comment || '',
        q8 || '',
        q8_comment || '',
        q9 || '',
        q9_comment || '',
        q10 || '',
        q10_comment || '',
        q11 || '',
        q11_comment || '',
        q12 || '',
        q12_comment || '',
        q13 || '',
        q13_comment || '',
        q14 || '',
        q14_comment || '',
        q15 || '',
        q15_comment || '',
        q16 || '',
        q16_comment || '',
        comments || ''
      ]
    ];

    // Append data to Mavas Survey sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Mavas Survey!A:AK',
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
