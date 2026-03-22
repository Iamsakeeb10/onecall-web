import type { Metadata } from "next";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://onecallfield.com";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | ONECALL FIELD SERVICES LLC",
    default: "ONECALL FIELD SERVICES LLC | Texas Statewide Field Services"
  },
  description: "Professional property maintenance services across Texas. Serving property managers, investors, banks, and REO departments statewide.",
  keywords: [
    "property maintenance",
    "Texas property services",
    "property management",
    "REO maintenance",
    "property repairs",
    "Texas statewide",
    "property cleaning",
    "gutter cleaning",
    "drywall repair",
    "landscaping services"
  ],
  authors: [{ name: "ONECALL FIELD SERVICES LLC" }],
  creator: "ONECALL FIELD SERVICES LLC",
  publisher: "ONECALL FIELD SERVICES LLC",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "ONECALL FIELD SERVICES LLC",
    title: "ONECALL FIELD SERVICES LLC | Texas Statewide Field Services",
    description: "Professional field services across Texas. Serving property managers, investors, banks, and REO departments statewide.",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "ONECALL FIELD SERVICES LLC"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "ONECALL FIELD SERVICES LLC | Texas Statewide Field Services",
    description: "Professional field services across Texas. Serving property managers, investors, banks, and REO departments statewide.",
    images: [`${SITE_URL}/og-image.jpg`]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export function generatePageMetadata({
  title,
  description,
  path
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    ...defaultMetadata,
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      ...defaultMetadata.openGraph,
      url,
      title,
      description
    },
    twitter: {
      ...defaultMetadata.twitter,
      title,
      description
    }
  };
}
