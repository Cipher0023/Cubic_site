import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

type Props = object;

export default function ServicesHero({}: Props) {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/"
        className="inline-flex items-center text-green-400 hover:text-green-300 mb-8 transition-colors duration-200"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Home
      </Link>

      <div className="max-w-4xl">
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
          Digital Solutions That{" "}
          <span className="text-green-400">Drive Results</span>
        </h1>
        <p className="text-xl text-gray-300 leading-relaxed mb-8">
          We dont just build websites – we create digital experiences that
          transform businesses. Every solution is strategically designed to
          achieve your specific goals and deliver measurable results.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link
            href="#contact"
            className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-4 text-lg font-medium transition-colors duration-200 inline-flex items-center gap-2"
          >
            Get Free Consultation
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href="#services"
            className="border border-green-600 text-green-400 hover:bg-green-600 hover:text-white rounded-full px-8 py-4 text-lg font-medium transition-colors duration-200 inline-flex items-center gap-2 bg-transparent"
          >
            View Services
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        <div className="flex flex-wrap gap-6 text-sm">
          <div className="flex items-center text-gray-300">
            <Check className="h-5 w-5 text-green-400 mr-2" />
            Free consultation & quote
          </div>
          <div className="flex items-center text-gray-300">
            <Check className="h-5 w-5 text-green-400 mr-2" />
            100% satisfaction guarantee
          </div>
          <div className="flex items-center text-gray-300">
            <Check className="h-5 w-5 text-green-400 mr-2" />3 months free
            support
          </div>
        </div>
      </div>
    </div>
  );
}
