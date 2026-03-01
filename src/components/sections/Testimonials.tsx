"use client";

import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data/testimonials";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play functionality
  useEffect(() => {
    if (shouldReduceMotion || isPaused) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      return;
    }

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, shouldReduceMotion]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 lg:py-28 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Trusted by property professionals across Texas"
            align="center"
          />
        </AnimatedSection>

        {/* Desktop: 3-column grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={testimonial.id}
              variant="fadeUp"
              delay={index * 0.1}
            >
              <TestimonialCard testimonial={testimonial} />
            </AnimatedSection>
          ))}
        </div>

        {/* Mobile: Carousel */}
        <div className="lg:hidden relative">
          <div
            className="overflow-hidden w-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            <motion.div
              className="flex transition-transform duration-300 ease-in-out"
              drag="x"
              dragConstraints={{
                left: -(testimonials.length - 1) * 100,
                right: 0
              }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                const threshold = 50;
                if (info.offset.x < -threshold && currentIndex < testimonials.length - 1) {
                  goToNext();
                } else if (info.offset.x > threshold && currentIndex > 0) {
                  goToPrevious();
                }
              }}
              animate={{
                x: shouldReduceMotion ? 0 : `-${currentIndex * 100}%`
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
              style={{ width: `${testimonials.length * 100}%` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-2"
                  style={{ width: `${100 / testimonials.length}%`, minWidth: `${100 / testimonials.length}%` }}
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows - Positioned below card */}
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={goToPrevious}
              disabled={currentIndex === 0}
              className="w-10 h-10 rounded-full bg-navy-800 hover:bg-navy-700 border border-navy-700 flex items-center justify-center text-gold hover:text-orange transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>
            <button
              onClick={goToNext}
              disabled={currentIndex === testimonials.length - 1}
              className="w-10 h-10 rounded-full bg-navy-800 hover:bg-navy-700 border border-navy-700 flex items-center justify-center text-gold hover:text-orange transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          {/* Indicator Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gold w-3 h-3"
                    : "bg-navy-700 w-2 h-2 hover:bg-navy-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
