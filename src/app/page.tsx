import Navbar from "@/components/shared/Navbar";
import HomePage from "./(home)/page";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <main className="min-h-screen max-w-full bg-black flex flex-col text-white px-2">
      <div className="max-w-7xl w-full mx-auto flex-grow flex flex-col gap-y-5">
        <Navbar />
        <HomePage />
        <Footer />
      </div>
    </main>
  );
}
