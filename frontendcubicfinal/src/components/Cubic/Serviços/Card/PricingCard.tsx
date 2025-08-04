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
    <div className="card w-80 md:w-96 bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
      <div className="card-body flex flex-col justify-between p-6">
        <div className="mb-4 text-primary">{icon}</div>
        <div className="flex flex-col justify-between items-baseline mb-4">
          <h2 className="text-2xl font-bold">{title}</h2>
          <span className="text-lg text-bease-content">{description}</span>
        </div>
        <ul className="flex flex-col gap-2 text-sm mb-6">
          {itemName.map((item, idx) => (
            <li key={idx} className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 me-2 inline-block text-success"
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
        <button className="btn btn-primary w-full">Assinar</button>
      </div>
    </div>
  );
}
