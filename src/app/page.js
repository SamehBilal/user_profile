"use client"
import { useEffect } from "react";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter()

  useEffect(()=>{
    router.push('/login')
  }, [])
  
  return (
    <main className="px-10 py-12 w-full min-h-screen bg-white dark:bg-darkGray">
    </main>
  );
}
