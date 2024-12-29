import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="bg-white h-screen w-screen p-1 flex flex-col  items-center">

      <Navbar />
      <Hero/>
      
      
    </div>
  );
}
