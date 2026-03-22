import VendorApplicationForm from "@/components/forms/VendorApplicationForm";
import VendorCTABanner from "@/components/sections/VendorCTABanner";
import VendorFAQ from "@/components/sections/VendorFAQ";
import VendorHero from "@/components/sections/VendorHero";
import VendorOnboarding from "@/components/sections/VendorOnboarding";
import VendorRequirements from "@/components/sections/VendorRequirements";
import VendorServices from "@/components/sections/VendorServices";
import VendorWhyPartner from "@/components/sections/VendorWhyPartner";
import { generatePageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

const vendorPageAnchors = [
  { href: "#vendor-benefits", label: "Why Partner" },
  { href: "#vendor-process", label: "Process" },
  { href: "#vendor-criteria", label: "Criteria" },
  { href: "#vendor-services", label: "Services" },
  { href: "#vendor-application", label: "Apply" },
  { href: "#vendor-faq", label: "FAQ" },
];

export const metadata: Metadata = generatePageMetadata({
  title: "Vendor Partners",
  description:
    "Join the ONECALL FIELD SERVICES LLC Network. Apply to become a vendor partner and receive consistent work orders across Texas residential portfolios and managed assets.",
  path: "/vendors",
});

export default function VendorsPage() {
  return (
    <>
      <VendorHero />

      <section className="bg-pearl-50 border-y border-pearl-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {vendorPageAnchors.map((anchor) => (
              <a
                key={anchor.href}
                href={anchor.href}
                className="font-accent text-sm text-navy px-3 py-1.5 rounded-full border border-pearl-300 bg-white hover:border-steel/40 hover:text-steel transition-colors"
              >
                {anchor.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div id="vendor-benefits">
        <VendorWhyPartner />
      </div>
      <div
        className="h-px bg-gradient-to-r from-transparent via-steel/30 to-transparent"
        aria-hidden="true"
      />
      <div id="vendor-process">
        <VendorOnboarding />
      </div>
      <div
        className="h-px bg-gradient-to-r from-transparent via-pearl-300 to-transparent"
        aria-hidden="true"
      />
      <div id="vendor-criteria">
        <VendorRequirements />
      </div>
      <div id="vendor-services">
        <VendorServices />
      </div>

      {/* Application form section — anchor targeted by hero CTA */}
      <section id="vendor-application" className="py-24 lg:py-32 bg-pearl-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <aside className="lg:col-span-4">
              <div className="bg-white border border-pearl-200 rounded-2xl shadow-card p-6 lg:p-7 lg:sticky lg:top-28">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-3">
                  Ready to Apply?
                </h2>
                <p className="font-body text-text-muted mb-6">
                  Submit your details once, and our team reviews qualified
                  applications within 2–3 business days.
                </p>

                <div className="space-y-4">
                  <div className="rounded-xl bg-pearl-50 border border-pearl-200 p-4">
                    <p className="font-accent text-sm text-steel mb-1">
                      What to prepare
                    </p>
                    <p className="font-body text-sm text-text-body">
                      Company details, coverage areas, offered services, and
                      compliance documents.
                    </p>
                  </div>
                  <div className="rounded-xl bg-pearl-50 border border-pearl-200 p-4">
                    <p className="font-accent text-sm text-steel mb-1">
                      Review timeline
                    </p>
                    <p className="font-body text-sm text-text-body">
                      Most complete applications receive a response in under 10
                      business days.
                    </p>
                  </div>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-8">
              <div className="bg-white border border-pearl-200 rounded-2xl shadow-card p-4 sm:p-6 lg:p-8">
                <VendorApplicationForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="h-px bg-gradient-to-r from-transparent via-pearl-300 to-transparent"
        aria-hidden="true"
      />
      <div id="vendor-faq">
        <VendorFAQ />
      </div>
      <VendorCTABanner />
    </>
  );
}
