"use client";

import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useUserStore } from '@/stores/userStore';

export const LoginSuccessHandler = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const refreshUser = useUserStore((state) => state.refreshUser);
  
  useEffect(() => {
    const loginSuccess = searchParams.get('login');
    
    if (loginSuccess === 'success') {
      
      refreshUser();
      
      // Clean up the URL by removing the login parameter
      const url = new URL(window.location.href);
      url.searchParams.delete('login');
      router.replace(url.pathname + url.search, { scroll: false });
    }
  }, [searchParams, refreshUser, router]);

  return null;
};

export default LoginSuccessHandler;