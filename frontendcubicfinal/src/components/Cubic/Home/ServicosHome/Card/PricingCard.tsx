"use client";
import React from "react";

type Props = {
  icon: React.ReactNode;
  title: string;
  description: string;
  itemName: string[];
};

export default function PricingCard({
  icon,
  title,
  description,
  itemName,
}: Props) {
  return (
    <div className="group relative w-80 md:w-96">
      <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-20 group-hover:opacity-30 rounded-2xl transition-opacity duration-300 blur"></div>
      <div className="relative bg-gradient-to-br from-base-300 to-base-100 shadow-lg hover:shadow-xl p-10 border border-base-300 rounded-2xl w-full h-full transition-shadow card">
        <div className="flex flex-col justify-between p-6 card-body">
          <div className="mb-4 text-accent">{icon}</div>
          <div className="flex flex-col justify-between items-baseline mb-4">
            <h2 className="font-bold text-2xl">{title}</h2>
            <span className="text-base-content text-lg">{description}</span>
          </div>
          <ul className="flex flex-col gap-2 mb-6 text-sm">
            {itemName.map((item, idx) => (
              <li key={idx} className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block me-2 w-4 h-4 text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <button className="w-full text-xl btn btn-primary">Assinar</button>
        </div>
      </div>
    </div>
  );
}
