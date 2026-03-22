"use client";

import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data/testimonials";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export function Testimonials() {
  const shouldReduceMotion = useReducedMotion();

  // Embla carousel setup for mobile
  const autoplayOptions = Autoplay({
    delay: 5000,
    stopOnInteraction: true,
    stopOnMouseEnter: true,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
      duration: shouldReduceMotion ? 0 : 20,
    },
    shouldReduceMotion ? [] : [autoplayOptions],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect(); // Set initial index

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Subtle accent overlay */}
      <div className="absolute inset-0 opacity-3 pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle at 30% 60%, rgba(146, 117, 31, 0.08) 0%, transparent 50%)"
      }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection variant="fadeUp">
          <div className="text-center mb-2">
            <span className="font-display text-7xl md:text-8xl font-bold text-steel/12 leading-none select-none block -mt-4">
              "
            </span>
          </div>
          <SectionHeading
            title="Client Testimonials"
            subtitle="Feedback from satisfied professionals across Texas"
            align="center"
          />
        </AnimatedSection>

        {/* Mobile: Embla Carousel */}
        <div className="lg:hidden">
          {/* Embla viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_100%] min-w-0 pl-4 pr-4"
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows and indicator dots */}
          <div className="flex justify-between items-center mt-8 px-2">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 rounded-full bg-pearl-100 border border-pearl-200 flex items-center justify-center text-steel hover:border-steel hover:bg-pearl-50 transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>

            {/* Indicator dots */}
            <div className="flex items-center gap-2">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    index === selectedIndex
                      ? "bg-steel w-2.5 h-2.5"
                      : "bg-pearl-300 w-2 h-2 hover:bg-pearl-300/80"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={scrollNext}
              className="w-10 h-10 rounded-full bg-pearl-100 border border-pearl-200 flex items-center justify-center text-steel hover:border-steel hover:bg-pearl-50 transition-all duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Desktop: Masonry-style Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={testimonial.id}
              variant="fadeUp"
              delay={index * 0.1}
              className={index === 1 ? "lg:translate-y-6" : index === 2 ? "lg:-translate-y-6" : ""}
            >
              <TestimonialCard testimonial={testimonial} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
