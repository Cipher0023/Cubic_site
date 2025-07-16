import Categories from "@/components/custom/categories/Categories";
import Card from "@/components/daisyUI/Card/Card";
import Card_small from "@/components/daisyUI/Card/Card_small/Card_small";
import Carousel from "@/components/daisyUI/Carousel/Carousel";
import Footer from "@/components/daisyUI/Footer/Footer";
import HeroShot from "@/components/daisyUI/HeroShot/HeroShot";
import { merriweather } from "@/fonts/merriweather";

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
          <div className="flex flex-wrap items-end-safe justify-center gap-4 mt-4 mb-4">
            <Card />
            <Card />
            <Card />
          </div>
        </h1>
        <Categories />
        <div className="flex flex-wrap items-end-safe justify-center gap-2">
          {" "}
          <Card_small />
          <Card_small />
          <Card_small />
          <Card_small />
          <Card_small />
          <Card_small />
          <Card_small />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
