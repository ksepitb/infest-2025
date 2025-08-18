import { NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import prisma from '@/utils/prisma/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { submissionLink, userId, slot } = body;

    // If userId is provided (from UploadThing callback), use it
    // Otherwise, get user from auth
    let currentUserId = userId;

    if (!currentUserId) {
      const cookieStore = await cookies();
      const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
          cookies: {
            getAll() {
              return cookieStore.getAll();
            },
            setAll(cookiesToSet) {
              cookiesToSet.forEach(({ name, value, options }) => {
                cookieStore.set(name, value, options);
              });
            },
          },
        }
      );
      
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError || !user) {
        return NextResponse.json(
          { error: 'Authentication failed' },
          { status: 401 }
        );
      }

      currentUserId = user.id;
    }

    if (!slot || slot !== 1 && slot !== 2) {
      return NextResponse.json(
        { error: 'Invalid slot. Must be 1 or 2' },
        { status: 400 }
      )
    }

    const fieldName = slot === 1 ? 'submissionLink1' : 'submissionLink2'
    // Update user's submissionLink in database

    const updatedData: any = {
      [fieldName]: submissionLink,
    }

    const updatedUser = await prisma.user.update({
      where: { id: currentUserId },
      data: updatedData, 
      select: {
        id: true,
        submissionLink1: true,
        submissionLink2: true,
      },
    });

    return NextResponse.json(
      { 
        success: true,
        user: updatedUser
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error updating submission link:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}