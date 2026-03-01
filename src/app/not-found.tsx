import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "404 - Page Not Found | MEGAFIXX Home Services LLC",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-navy-950">
      <div className="text-center px-4">
        <h1 className="font-display text-9xl font-bold text-gold mb-4">
          404
        </h1>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
          Page Not Found
        </h2>
        <p className="font-body text-muted text-lg mb-8 max-w-md mx-auto">
          The property you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="md" asChild>
            <Link href="/">Go Home</Link>
          </Button>
          <Button variant="secondary" size="md" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
