import React from 'react'
import LoginForm from '../../components/LoginForm'
import Ornament1 from "@/public/ornament1.svg";
import Ornament2 from "@/public/ornament2.svg";
import Image from 'next/image'

export default function Page() {
  return (
    <main className="relative h-screen w-full isolate overflow-hidden">
        <LoginForm />
    </main>
  )
}
