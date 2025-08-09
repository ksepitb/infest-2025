import { cookies } from "next/headers";
import { decrypt } from "@/app/lib/session";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const cookie = (await cookies()).get('session')?.value;
    const session = await decrypt(cookie);
    
    if (!session?.userId) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    // You'll need to fetch user data from your database here
    // For now, using the test user data
    const userData = {
      id: session.userId,
      namaTim: "dhobyghaut" // Replace with actual database lookup
    };

    return NextResponse.json(userData);
  } catch (error) {
    return NextResponse.json({ error: 'Session invalid' }, { status: 401 });
  }
}