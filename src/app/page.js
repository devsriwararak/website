import Image from "next/image";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      
      <Banner/>
      <main className="flex p-10 ">
        <HomePage />
      </main>
      <Footer/>
    </div>
  );
}
