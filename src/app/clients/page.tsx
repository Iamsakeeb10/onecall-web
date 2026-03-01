import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Clients | MEGAFIXX Home Services LLC",
  description: "Trusted by property managers, investors, financial institutions, and real estate professionals across Texas.",
};

export default function ClientsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
          Our Clients
        </h1>
        <p className="font-body text-muted text-lg">
          Coming soon...
        </p>
      </div>
    </div>
  );
}
