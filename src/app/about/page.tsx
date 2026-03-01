import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | MEGAFIXX Home Services LLC",
  description: "Learn about MEGAFIXX Home Services LLC and our commitment to professional property maintenance across Texas.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
          About MEGAFIXX
        </h1>
        <p className="font-body text-muted text-lg">
          Coming soon...
        </p>
      </div>
    </div>
  );
}
