"use client";
import { useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useUserStore } from '@/stores/userStore';

export const useInitializeUserStore = () => {
  const { 
    fetchUserData, 
    setUser, 
    setUserProfile, 
    setError, 
    setLoading,
    isInitialized,
    user
  } = useUserStore();

  useEffect(() => {
    const supabase = createClient();

    if (!isInitialized) {
      fetchUserData();
    }

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN' && session) {
        // Refresh user data when user signs in
        if (!user) {
            await fetchUserData();
        }
      } else if (event === 'SIGNED_OUT' || !session) {
        // Clear user data when user signs out or session is null
        setUser(null);
        setUserProfile(null);
        setError(null);
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, [fetchUserData, setUser, setUserProfile, setError, setLoading, isInitialized]);
};