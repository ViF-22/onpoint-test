"use client";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <main className="w-[1024px] h-[768px] relative  overflow-hidden font-roboto">
      <Carousel infinite />
      <Footer />
    </main>
  );
}
