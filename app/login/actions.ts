'use server'

import { z } from "zod";
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export type LoginState = {
  errors?: {
    email?: string[];
    password?: string[];
    general?: string;
  };
  success?: boolean;
};

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email format" }).trim(),
  password: z.string().min(1, { message: "Password is required" }).trim(),
});

export async function login(prevState: LoginState | undefined, formData: FormData): Promise<LoginState> {
  const res = loginSchema.safeParse(Object.fromEntries(formData));

  if (!res.success) {
    return {
      errors: res.error.flatten().fieldErrors,
    };
  }

  const { email, password } = res.data;

  try {
    const supabase = await createClient();
    
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error('Server login error:', error);
      
      // Return specific error messages based on error code
      let errorMessage = 'Login failed. Please try again.';
      
      if (error.message.includes('Invalid login credentials')) {
        errorMessage = 'Invalid email or password. Please check your credentials.';
      } else if (error.message.includes('Email not confirmed')) {
        errorMessage = 'Please check your email and confirm your account before logging in.';
      } else if (error.message.includes('Too many requests')) {
        errorMessage = 'Too many login attempts. Please try again later.';
      }
      
      return {
        errors: {
          general: errorMessage,
        },
      };
    }
    
    // Redirect on success
    revalidatePath('/', 'layout');
    redirect('/?login=success');

  } catch (err: any) {
    // Handle NEXT_REDIRECT specifically (this is expected behavior)
    if (err.message === "NEXT_REDIRECT") {
      throw err; // Re-throw redirect errors
    }
    
    console.error('Unexpected login error:', err);
    return {
      errors: {
        general: 'An unexpected error occurred. Please try again.',
      },
    };
  }
}