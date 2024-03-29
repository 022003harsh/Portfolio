import Navbar from "@/components/shared/Navbar";
import HomePage from "./(home)/page";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <main className="min-h-screen max-w-full bg-black flex flex-col text-white px-2 relative">
      <div className="w-[100vw] h-[100vh] fixed z-0 top-0 left-0" 
    //   style={{
    //   background:
    //     'rgb(116,21,21); background: linear-gradient(199deg, rgba(116,21,21,1) 0%, rgba(148,100,115,0) 50%, rgba(0,104,125,1) 100%)'
    // }}
      style={{
      background:
        'rgb(116,41,81); background: linear-gradient(199deg, rgba(16,1,55,1) 0%, rgba(18,10,115,0) 50%, rgba(0,14,125,1) 100%)'
    }}
    ></div>
      <div className="max-w-7xl w-full mx-auto flex-grow flex flex-col gap-y-5 z-10">
        <Navbar />
        <HomePage />
        <Footer />
      </div>
    </main>
  );
}
