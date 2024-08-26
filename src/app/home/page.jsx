import SideMenu from "@/components/sideMenu";
import AppBar from "@/components/appbar";
import Middle from "@/components/middle";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white dark:bg-darkGray">
      {/* <SideMenu /> */}
      <AppBar />
      <Middle />
      <Footer />
    </main>
  );
}
