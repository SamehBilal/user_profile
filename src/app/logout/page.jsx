import AppBar from "@/components/appbar";
import LogoutPage from "@/components/logout";
export default function Home() {
  return (
    <main className="px-10 py-12 w-full min-h-screen bg-white dark:bg-darkGray">
      {/* <AppBar /> */}
      <LogoutPage />
    </main>
  );
}