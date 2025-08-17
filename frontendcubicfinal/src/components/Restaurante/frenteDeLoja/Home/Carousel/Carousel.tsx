"use client";

import { useState } from "react";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  id: number;
  title: string;
  content: string;
  bgColor: string;
}

interface CarouselProps {
  slides: Slide[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export function Carousel({
  slides,
  autoPlay = false,
  autoPlayInterval = 5000,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return prevIndex === slides.length - 1 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === 0 ? slides.length - 1 : prevIndex - 1;
      }
    });
  };

  const goToSlide = (index: number) => {
    const newDirection = index > currentIndex ? 1 : -1;
    setDirection(newDirection);
    setCurrentIndex(index);
  };

  const handleDragEnd = (e: unknown, { offset, velocity }: PanInfo) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      paginate(1);
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1);
    }
  };

  // Auto play functionality
  useState(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        paginate(1);
      }, autoPlayInterval);
      return () => clearInterval(interval);
    }
  });

  return (
    <div className="relative mx-auto w-full max-w-4xl">
      {/* Main carousel container */}
      <div className="relative shadow-2xl rounded-xl h-100 overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={handleDragEnd}
            className={`absolute inset-0 ${slides[currentIndex].bgColor} cursor-grab active:cursor-grabbing`}
          >
            <div className="flex justify-center items-center p-8 h-full">
              <div className="text-white text-center">
                <motion.h2
                  className="mb-4 font-bold text-3xl md:text-5xl"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {slides[currentIndex].title}
                </motion.h2>
                <motion.p
                  className="opacity-90 text-lg md:text-xl"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {slides[currentIndex].content}
                </motion.p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <button
          className="top-1/2 left-4 z-10 absolute bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/30 text-white -translate-y-1/2"
          onClick={() => paginate(-1)}
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <button
          className="top-1/2 right-4 z-10 absolute bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/30 text-white -translate-y-1/2"
          onClick={() => paginate(1)}
          aria-label="Próximo slide"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center space-x-2 mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-primary scale-125"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="mt-4 text-muted-foreground text-center">
        <span className="text-sm">
          {currentIndex + 1} de {slides.length}
        </span>
      </div>
    </div>
  );
}

export default Carousel;
