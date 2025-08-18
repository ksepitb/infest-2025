"use client";

import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Ornament1 from "@/public/ornament1.svg";
import { ArrowRight, Loader2, AlertCircle } from "lucide-react";
import { login } from "@/app/login/actions";
import { useFormStatus } from "react-dom";
import { useSearchParams } from "next/navigation";
import { useActionState } from "react";

const LoginForm = () => {
  const searchParams = useSearchParams();
  const urlError = searchParams.get('error'); // Get error from URL
  const message = searchParams.get('message');
  const loginSuccess = searchParams.get('login');
  
  // Use useActionState to handle form state and errors
  const [state, loginAction] = useActionState(login, {});

  useEffect(() => {
    Aos.init({
      duration: 1000, 
      once: true,
    });
  }, []);

  // Determine which error to show (action state errors take priority)
  const displayError = state?.errors?.general || urlError;

  return (
    <div className="relative h-screen w-full isolate overflow-hidden">
      <div className="relative h-screen w-full isolate overflow-hidden">
        <div className="absolute inset-0 z-[-30] h-full w-full bg-gradient-to-b from-[#3B007D] to-[#280068]"></div>
        <Image
          src={Ornament1}
          alt="Icon"
          className="opacity-40 lg:opacity-100 absolute z-[-20] w-1/2 lg:w-1/3 h-auto top-1/3 left-0 -translate-y-1/2 -translate-x-[30%] "
          data-aos="fade-right"
        />
        <div className="absolute inset-0 z-[-10] h-full w-full bg-[radial-gradient(ellipse_at_center,rgba(59,0,125,0)_40%,#050505_100%)]"></div>
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center text-center text-white p-4">
          <h1
            className="z-20 bg-gradient-to-b from-white via-[#C899FF] to-white text-transparent bg-clip-text font-bold text-5xl fit-content mb-5 p-3"
            data-aos="zoom-in"
          >
            Login
          </h1>
          <div className="w-full max-w-2xl mx-auto bg-[#240046]/80 backdrop-blur-lg p-8 rounded-2xl border border-white/20 shadow-2xl text-center animate-fade-in" data-aos="fade-up">
            
            {/* Show success message from URL */}
            {loginSuccess === 'success' && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                <div className="flex items-center justify-center gap-2 text-green-300">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Login successful! Redirecting...</span>
                </div>
              </div>
            )}

            {displayError && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                <div className="flex items-center gap-2 text-red-300">
                  <AlertCircle className="w-4 h-4" />
                  <span>{displayError}</span>
                </div>
              </div>
            )}

            {message && (
              <div className="mb-6 p-4 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                <p className="text-blue-300 text-sm">{message}</p>
              </div>
            )}

            <form action={loginAction} className="flex flex-col gap-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white/90 mb-2 text-left"
                >
                  Email <span className="text-red-400">*</span>
                </label> 
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                  className={`w-full bg-white/10 border rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:outline-none ${
                    state?.errors?.email ? 'border-red-500' : 'border-white/20'
                  }`}
                />
                {state?.errors?.email && (
                  <p className="mt-1 text-sm text-red-400 text-left">
                    {state.errors.email[0]}
                  </p>
                )}
              </div>
              
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-white/90 mb-2 text-left"
                >
                  Password <span className="text-red-400">*</span>
                </label> 
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                  className={`w-full bg-white/10 border rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:outline-none ${
                    state?.errors?.password ? 'border-red-500' : 'border-white/20'
                  }`}
                />
                {state?.errors?.password && (
                  <p className="mt-1 text-sm text-red-400 text-left">
                    {state.errors.password[0]}
                  </p>
                )}
              </div>
              
              <SubmitButton />
            </form>
          </div>
        </div>
      </div> 
    </div>
  );
};

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="flex mx-auto items-center gap-2 rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
    >
      {pending ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          Logging in...
        </>
      ) : (
        <>
          Login
          <ArrowRight size={16} />
        </>
      )}
    </button>
  );
};

export default LoginForm;