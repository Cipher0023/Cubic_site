import React from "react";

export default function Newsletter() {
  return (
    <div>
      {" "}
      <div className="bg-gradient-to-r from-primary to-accent p-8 lg:p-12 rounded-3xl text-center text-accent-content">
        <h2 className="mb-4 font-bold text-3xl">Stay Updated</h2>
        <p className="opacity-90 mx-auto mb-8 max-w-2xl text-lg">
          Get the latest insights, tutorials, and industry news delivered
          straight to your inbox. No spam, just valuable content from our team.
        </p>

        <div className="flex sm:flex-row flex-col gap-4 mx-auto max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 border focus:border-white border-base-300 rounded-lg focus:outline-none bg-accent-content text-accent-content placeholder-white/70"
          />
          <button className="bg-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-medium text-primary-content transition-colors duration-200">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
