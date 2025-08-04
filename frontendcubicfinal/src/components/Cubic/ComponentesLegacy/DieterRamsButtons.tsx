"use client"

import { useState } from "react"
import { Check, ChevronRight, Plus, X } from "lucide-react"

export default function DieterRamsButtons() {
  const [toggleState, setToggleState] = useState(false)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-100 p-8">
      <div className="w-full max-w-3xl space-y-12">
        <h1 className="text-3xl font-light tracking-tight text-neutral-900">Dieter Rams-Inspired Buttons</h1>

        <div className="space-y-8">
          {/* Primary Buttons */}
          <section className="space-y-4">
            <h2 className="text-sm font-medium uppercase tracking-wide text-neutral-500">Primary Buttons</h2>
            <div className="flex flex-wrap gap-4">
              <button className="group relative flex h-10 items-center justify-center overflow-hidden rounded-none bg-neutral-900 px-6 text-sm font-normal text-white transition-all duration-200 active:translate-y-px active:bg-neutral-800">
                <span className="relative z-10">Primary Action</span>
                <span className="absolute inset-0 z-0 h-full w-full translate-y-full bg-neutral-800 transition-transform duration-200 ease-out group-hover:translate-y-0 group-active:translate-y-0"></span>
              </button>

              <button className="group relative flex h-10 items-center justify-center overflow-hidden rounded-none bg-red-600 px-6 text-sm font-normal text-white transition-all duration-200 active:translate-y-px active:bg-red-700">
                <span className="relative z-10">Delete</span>
                <span className="absolute inset-0 z-0 h-full w-full translate-y-full bg-red-700 transition-transform duration-200 ease-out group-hover:translate-y-0 group-active:translate-y-0"></span>
              </button>
            </div>
          </section>

          {/* Secondary Buttons */}
          <section className="space-y-4">
            <h2 className="text-sm font-medium uppercase tracking-wide text-neutral-500">Secondary Buttons</h2>
            <div className="flex flex-wrap gap-4">
              <button className="group relative flex h-10 items-center justify-center overflow-hidden rounded-none border border-neutral-300 bg-white px-6 text-sm font-normal text-neutral-900 transition-all duration-200 active:translate-y-px active:bg-neutral-100">
                <span className="relative z-10">Secondary Action</span>
                <span className="absolute inset-0 z-0 h-full w-full translate-y-full bg-neutral-100 transition-transform duration-200 ease-out group-hover:translate-y-0 group-active:translate-y-0"></span>
              </button>

              <button className="group relative flex h-10 items-center justify-center gap-2 overflow-hidden rounded-none border border-neutral-300 bg-white px-6 text-sm font-normal text-neutral-900 transition-all duration-200 active:translate-y-px active:bg-neutral-100">
                <span className="relative z-10">Continue</span>
                <ChevronRight className="relative z-10 h-4 w-4" />
                <span className="absolute inset-0 z-0 h-full w-full translate-y-full bg-neutral-100 transition-transform duration-200 ease-out group-hover:translate-y-0 group-active:translate-y-0"></span>
              </button>
            </div>
          </section>

          {/* Icon Buttons */}
          <section className="space-y-4">
            <h2 className="text-sm font-medium uppercase tracking-wide text-neutral-500">Icon Buttons</h2>
            <div className="flex flex-wrap gap-4">
              <button className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-none border border-neutral-300 bg-white text-neutral-900 transition-all duration-200 active:translate-y-px active:bg-neutral-100">
                <Plus className="relative z-10 h-4 w-4" />
                <span className="absolute inset-0 z-0 h-full w-full translate-y-full bg-neutral-100 transition-transform duration-200 ease-out group-hover:translate-y-0 group-active:translate-y-0"></span>
              </button>

              <button className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-none bg-neutral-900 text-white transition-all duration-200 active:translate-y-px active:bg-neutral-800">
                <X className="relative z-10 h-4 w-4" />
                <span className="absolute inset-0 z-0 h-full w-full translate-y-full bg-neutral-800 transition-transform duration-200 ease-out group-hover:translate-y-0 group-active:translate-y-0"></span>
              </button>
            </div>
          </section>

          {/* Toggle Button */}
          <section className="space-y-4">
            <h2 className="text-sm font-medium uppercase tracking-wide text-neutral-500">Toggle Button</h2>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setToggleState(!toggleState)}
                className={`group relative flex h-10 w-16 items-center justify-center overflow-hidden rounded-none transition-all duration-200 active:translate-y-px ${
                  toggleState ? "bg-neutral-900 text-white" : "border border-neutral-300 bg-white text-neutral-900"
                }`}
              >
                {toggleState ? (
                  <Check className="relative z-10 h-4 w-4" />
                ) : (
                  <span className="relative z-10 h-4 w-4 border border-neutral-900"></span>
                )}
                <span
                  className={`absolute inset-0 z-0 h-full w-full translate-y-full transition-transform duration-200 ease-out group-hover:translate-y-0 group-active:translate-y-0 ${
                    toggleState ? "bg-neutral-800" : "bg-neutral-100"
                  }`}
                ></span>
              </button>
            </div>
          </section>

          {/* Text Buttons */}
          <section className="space-y-4">
            <h2 className="text-sm font-medium uppercase tracking-wide text-neutral-500">Text Buttons</h2>
            <div className="flex flex-wrap gap-4">
              <button className="group relative flex h-10 items-center justify-center overflow-hidden px-4 text-sm font-normal text-neutral-900 transition-all duration-200 active:translate-y-px">
                <span className="relative z-10 border-b border-neutral-900 pb-0.5 transition-all duration-200 group-hover:border-neutral-500 group-active:border-neutral-500">
                  Text Action
                </span>
              </button>

              <button className="group relative flex h-10 items-center justify-center overflow-hidden px-4 text-sm font-normal text-red-600 transition-all duration-200 active:translate-y-px">
                <span className="relative z-10 border-b border-red-600 pb-0.5 transition-all duration-200 group-hover:border-red-400 group-active:border-red-400">
                  Cancel
                </span>
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
