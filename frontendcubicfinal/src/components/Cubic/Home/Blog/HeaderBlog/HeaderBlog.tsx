import React from "react";
import { TrendingUp, MessageCircle, Heart } from "lucide-react";

export default function HeaderBlog() {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 container">
      <div className="max-w-4xl">
        <h1 className="mb-6 font-bold text-white text-5xl sm:text-6xl">
          Cubic <span className="text-accent">Blog</span>
        </h1>
        <p className="mb-8 text-gray-300 text-xl leading-relaxed">
          Insights, tutorials, and thoughts from our team on web development,
          design, and digital business growth.
        </p>

        <div className="flex flex-wrap gap-4">
          <div className="flex items-center bg-base-100 px-4 py-2 border border-base-300 rounded-full">
            <TrendingUp className="mr-2 w-4 h-4 text-accent" />
            <span className="text-gray-300 text-sm">26 articles published</span>
          </div>
          <div className="flex items-center bg-base-100 px-4 py-2 border border-base-300 rounded-full">
            <MessageCircle className="mr-2 w-4 h-4 text-accent" />
            <span className="text-gray-300 text-sm">2.7k readers</span>
          </div>
          <div className="flex items-center bg-base-100 px-4 py-2 border border-base-300 rounded-full">
            <Heart className="mr-2 w-4 h-4 text-accent" />
            <span className="text-gray-300 text-sm">850 likes</span>
          </div>
        </div>
      </div>
    </div>
  );
}
