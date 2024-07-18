
import AppBar from "@/components/appbar";
import SearchPage from "@/components/search_page";

export default function Psge() {
  return (
    <main className="px-10 py-12 w-full min-h-screen bg-white dark:bg-darkGray">
      <AppBar />
      <SearchPage />
    </main>
  );
}
