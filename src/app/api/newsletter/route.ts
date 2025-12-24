import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Here you can add logic to save to database or send to email service
    // For now, we'll just log it
    console.log('Newsletter subscription:', email);
    
    // You can integrate with services like:
    // - Mailchimp
    // - SendGrid
    // - ConvertKit
    // - Your own database
    
    // Example: Save to a simple log file or database
    // await saveToDatabase(email);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully subscribed to newsletter' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    );
  }
}
