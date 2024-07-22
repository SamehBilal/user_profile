
import AppBar from "@/components/appbar";
import SearchPage from "@/components/search_page";
import Image from "next/image";
import SearchBg from '@/public/images/backgrounds/search-bg.jpg'

export default function Psge() {
  return (
    <main className="py-12 w-full min-h-screen relative">
      <Image src={SearchBg} alt="background" className="absolute w-full h-full object-cover left-0 top-0 saturate-150 dark:saturate-0 blur-3xl" />
      <AppBar shadow='transparent' />
      <SearchPage />
    </main>
  );
}
