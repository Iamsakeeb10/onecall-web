import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | MEGAFIXX Home Services LLC",
  description: "Get in touch with MEGAFIXX for professional property maintenance services. Serving all of Texas statewide.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
          Contact MEGAFIXX
        </h1>
        <p className="font-body text-muted text-lg">
          Coming soon...
        </p>
      </div>
    </div>
  );
}
