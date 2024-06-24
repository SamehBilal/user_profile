import Image from "next/image";
import SideMenu from "@/components/sideMenu";
import AppBar from "@/components/appbar";
import Middle from "@/components/middle";

export default function Home() {
  return (
    <main className="px-10 py-12 w-full min-h-screen bg-white">
      <SideMenu />
      <AppBar />
      <Middle />
    </main>
  );
}
