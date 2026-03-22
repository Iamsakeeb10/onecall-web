import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data/testimonials";

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp">
          <SectionHeading
            title="Client Testimonials"
            subtitle="Feedback from satisfied professionals across Texas"
            align="center"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div>
    </section>
  );
}
