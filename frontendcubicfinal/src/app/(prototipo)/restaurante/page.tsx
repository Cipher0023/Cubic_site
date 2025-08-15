"use client";
import Card from "@/components/restaurante/Card/Card";
import Carousel from "@/components/restaurante/Carousel/Carousel";
import Footer from "@/components/restaurante/Footer/Footer";
import HeroShot from "@/components/restaurante/HeroShot/HeroShot";
import { merriweather } from "@/fonts/merriweather";
import Tab from "@/components/restaurante/Tab/Tab";

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <HeroShot />
          <div className="m-8">
            <Carousel />
          </div>
        </div>
        <h1 className="flex flex-col justify-center items-center bg-primary p-4 w-full">
          <a
            className={`text-5xl text-base-100 font-regular ${merriweather.className}`}
          >
            Pratos populares
          </a>
          <div className="flex flex-wrap justify-center items-end-safe gap-4 m-4 mb-4">
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
