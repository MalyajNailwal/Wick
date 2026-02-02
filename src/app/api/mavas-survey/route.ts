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
          'Owner ki Age',
          'Daily Bill Count',
          'UPI vs Cash %',
          'Wholesaler App',
          '1. Aap sales ka hisaab kaise rakhte ho? (Register me, calculator pe, ya koi app use karte ho?)',
          'Q1 Comment',
          '2. Agar app use karte ho, toh pura din entry karne me kitna time nikal jata hai?',
          'Q2 Comment',
          '3. Dukan pe jab bheed (rush) hoti hai, tab phone me entry karna boring ya mushkil lagta hai kya?',
          'Q3 Comment',
          '4. Aap din bhar Bluetooth neckband ya earbuds pehente ho?',
          'Q4 Comment',
          '5. Agar aap bas bol do "5 kg chawal bik gaya" aur app apne aap stock update kar de, toh kya aapka kaam aasan hoga?',
          'Q5 Comment',
          '6. Aisa kitni baar hota hai ki maal khatam ho gaya aur aapko tab pata chala jab customer ne maanga?',
          'Q6 Comment',
          '7. Aapko kaise pata chalta hai ki naya maal (restock) kitna mangwana hai? (Bas andaze se ya purani sales dekh kar?)',
          'Q7 Comment',
          '8. Kya dukan me aisa maal bhi hai jo mahino se pada hai aur koi kharid nahi raha?',
          'Q8 Comment',
          '9. Naya stock mangwane ke liye kitne wholesalers se rate compare karte ho?',
          'Q9 Comment',
          '10. Jab market me kisi cheez ka rate gir jata hai, toh aapka wholesaler aapko sasta rate deta hai?',
          'Q10 Comment',
          '11. Agar koi automatic system aapki taraf se 5 wholesalers se rate compare karke sabse sasta rate nikal de, toh aap use karoge?',
          'Q11 Comment',
          '12. Kabhi aisa hua hai ki maal mangwana hai par us din cash kam hai, toh order cancel karna pada?',
          'Q12 Comment',
          '13. Jab budget tight hota hai, toh aap kaise decide karte ho ki pehle kya mangwayein aur kya chhod dein?',
          'Q13 Comment',
          '14. Kya aap apna "Munafa" (Profit) aur "Stock ka paisa" alag-alag rakhte ho?',
          'Q14 Comment',
          '15. Lohri, Diwali ya colony ki shadiyon ke time aap extra maal pehle se bharte ho?',
          'Q15 Comment',
          '16. Agar aapko 24 ghante pehle pata chal jaye ki kal Tel (Oil) ya Chini (Sugar) ke rate badhne wale hain, toh kya aap us "Early bird info" ke liye thoda pay karoge?',
          'Q16 Comment',
          'Aapke Comments / Suggestions'
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
