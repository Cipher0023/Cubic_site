"use client";
import Card from "@/components/Card/Card";
import Carousel from "@/components/Carousel/Carousel";
import Footer from "@/components/Footer/Footer";
import HeroShot from "@/components/HeroShot/HeroShot";
import { merriweather } from "@/fonts/merriweather";
import Tab from "@/components/Tab/Tab";

export default function Home() {
  return (
    <div className="">
      <main className="justify-center items-center flex flex-col">
        <div className="justify-center items-center flex flex-col">
          <HeroShot />
          <div className="m-8">
            <Carousel />
          </div>
        </div>
        <h1 className="justify-center items-center flex flex-col bg-primary w-full p-4">
          <a
            className={`text-5xl text-base-100 font-regular ${merriweather.className}`}
          >
            Pratos populares
          </a>
          <div className="flex flex-wrap items-end-safe justify-center gap-4 m-4 mb-4">
            <Card />
            <Card />
            <Card />
          </div>
        </h1>
        <div className="flex flex-col bg-base-200 w-full">
          <Tab />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
