"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CardData } from "@/types";
import Link from "next/link";
import Aos from "aos";
import Image from "next/image";

interface EventCarouselProps {
  cards: CardData[];
  buttons: boolean;
}

const EventCarousel: React.FC<EventCarouselProps> = ({ cards, buttons }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Refs for tracking drag/swipe state
  const carouselRef = useRef<HTMLDivElement>(null);
  const startX = useRef<number>(0);
  const isDragging = useRef<boolean>(false);
  const dragThreshold = 50; // Minimum pixels to drag to trigger a slide change

  if (!cards || cards.length === 0) {
    return null;
  }

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  }, [cards.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  }, [cards.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // --- Mouse and Touch Handlers ---

  // Helper to get clientX from either MouseEvent or TouchEvent
  const getClientX = (e: MouseEvent | TouchEvent): number => {
    if (e instanceof MouseEvent) {
      return e.clientX;
    } else if (e instanceof TouchEvent) {
      return e.touches[0].clientX;
    }
    return 0;
  };

  const handleMouseDown = useCallback((e: MouseEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    // Attach window-level listeners for dragging and ending
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  }, []);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    isDragging.current = true;
    startX.current = e.touches[0].clientX;
    // Attach window-level listeners for dragging and ending
    window.addEventListener("touchmove", handleTouchMove, { passive: false }); // passive: false to allow preventDefault
    window.addEventListener("touchend", handleTouchEnd);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging.current) return;
    e.preventDefault(); // Prevent text selection/default dragging
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging.current) return;
    e.preventDefault(); // Prevent scrolling on touch devices
  }, []);

  const handleMouseUp = useCallback((e: MouseEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;

    const endX = e.clientX;
    const diffX = startX.current - endX;

    if (Math.abs(diffX) > dragThreshold) {
      if (diffX > 0) {
        handleNext(); // Swiped left
      } else {
        handlePrev(); // Swiped right
      }
    }

    // Clean up mouse listeners
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  }, [handleNext, handlePrev]);

  const handleTouchEnd = useCallback((e: TouchEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;

    // Use changedTouches for touchend, as touches array might be empty
    const endX = e.changedTouches[0].clientX;
    const diffX = startX.current - endX;

    if (Math.abs(diffX) > dragThreshold) {
      if (diffX > 0) {
        handleNext(); // Swiped left
      } else {
        handlePrev(); // Swiped right
      }
    }

    // Clean up touch listeners
    window.removeEventListener("touchmove", handleTouchMove);
    window.removeEventListener("touchend", handleTouchEnd);
  }, [handleNext, handlePrev]);

  // Effect for attaching initial event listeners to the carousel element
  useEffect(() => {
    const carouselElement = carouselRef.current;
    if (carouselElement) {
      carouselElement.addEventListener("mousedown", handleMouseDown);
      carouselElement.addEventListener("touchstart", handleTouchStart, { passive: false }); // passive: false for touch start too
    }

    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener("mousedown", handleMouseDown);
        carouselElement.removeEventListener("touchstart", handleTouchStart);
      }
      // Ensure all window-level listeners are cleaned up on unmount
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleMouseDown, handleMouseMove, handleMouseUp, handleTouchStart, handleTouchMove, handleTouchEnd]);

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div
      className="relative w-full flex flex-col items-center justify-center py-16 bg-[#240046] px-4 overflow-hidden rounded-xl select-none"
      data-aos="zoom-out"
    >
      <div className="absolute left-0 top-0 h-full w-12 sm:w-24 bg-gradient-to-r from-[#240046] via-[#240046]/40 to-transparent z-30 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-12 sm:w-24 bg-gradient-to-l from-[#240046] via-[#240046]/40 to-transparent z-30 pointer-events-none" />
      <div
        ref={carouselRef} 
        className="relative w-[90%] lg:w-[70%] h-[250px] md:h-[350px] [perspective:1200px] cursor-grab active:cursor-grabbing"
      >
        {cards.map((card, index) => {
          const totalItems = cards.length;
          const offset = index - currentIndex;

          let normalizedOffset = offset;
          if (offset > totalItems / 2) {
            normalizedOffset = offset - totalItems;
          } else if (offset < -totalItems / 2) {
            normalizedOffset = offset + totalItems;
          }

          const transformStyle = {
            transform: `
              translateX(${(normalizedOffset * 100) / 2}%)
              scale(${1 - Math.abs(normalizedOffset) * 0.25})
              rotateY(${normalizedOffset * -45}deg)
            `,
            zIndex: totalItems - Math.abs(normalizedOffset),
            opacity: Math.abs(normalizedOffset) > 1.5 ? 0 : 1,
          };

          return (
            <div
              key={card.id}
              className="absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out"
              style={{
                transformStyle: "preserve-3d",
                ...transformStyle,
              }}
              // Make sure these divs don't interfere with the dragging
              onDragStart={(e) => e.preventDefault()}
            >
              <div className="relative w-full h-full max-w-[450px] md:max-w-[550px] mx-auto rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  width={1000}
                  height={1000}
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 h-full text-white">
                  <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-6 md:px-8">
                    <h3 className="text-3xl md:text-5xl font-bold mb-2 bg-gradient-to-b from-white via-[#DABBFF] to-white text-transparent bg-clip-text">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-white font-semibold md:font-bold line-clamp-4 text-shadow-lg">
                      {card.description}
                    </p>
                  </div>

                    {buttons && <Link
                    href={card.link}
                    // Prevent navigation during a drag, but allow click when not dragging
                    onClick={(e) => isDragging.current && e.preventDefault()}
                    className="absolute bottom-6 right-6 md:bottom-8 md:right-8 w-fit bg-gradient-to-r from-zinc-300 to-violet-300 rounded-full shadow-[0px_4px_22.100000381469727px_0px_rgba(255,255,255,0.50)] text-[#2F016D] font-[600] px-4 md:px-6 py-2 sm:py-3 transition-all duration-300 hover:scale-105 text-xs sm:text-sm md:text-base"
                  >
                    See More
                  </Link>}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="relative flex items-center justify-center mt-12 w-full max-w-xs">
        <button
          onClick={handlePrev}
          className="text-white/70 hover:text-white transition-colors p-2"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="flex items-center justify-center gap-3 mx-4">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-white scale-125" : "bg-white/40"
              }`}
            />
          ))}
        </div>
        <button
          onClick={handleNext}
          className="text-white/70 hover:text-white transition-colors p-2"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default EventCarousel;