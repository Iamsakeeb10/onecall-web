import { ClientType } from "@/types";

export const clients: ClientType[] = [
  {
    id: "property-management",
    title: "Property Management Companies",
    description: "We support residential and commercial property managers by ensuring properties remain well-maintained, code-compliant, market-ready, and tenant-safe. From routine maintenance to emergency repairs, we help reduce vacancy time and protect asset value.",
    icon: "Building2",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    benefits: [
      "Reliable vendor partnerships",
      "Scalable maintenance programs",
      "Fast vacancy turnaround"
    ]
  },
  {
    id: "financial-institutions",
    title: "Financial Institutions & Asset Managers",
    description: "We work with banks, mortgage servicers, REO departments, investment groups, and asset management firms. Our team delivers inspections, repairs, and property preservation services that safeguard assets and maintain compliance standards.",
    icon: "Landmark",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
    benefits: [
      "REO property specialists",
      "Documented before/after reporting",
      "Compliant work practices"
    ]
  },
  {
    id: "real-estate-professionals",
    title: "Real Estate Professionals",
    description: "We assist real estate agents, brokers, REO specialists, and investors by preparing properties for listing, resale, or lease with fast turnaround and professional presentation.",
    icon: "KeyRound",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80",
    benefits: [
      "Pre-listing preparation",
      "Quick turnaround times",
      "Professional results"
    ]
  },
  {
    id: "investors-portfolio-owners",
    title: "Investors & Portfolio Owners",
    description: "We provide scalable property maintenance solutions for single-family rentals, multi-unit properties, large rental portfolios, and fix-and-flip investors. Our goal is to simplify maintenance while protecting long-term profitability.",
    icon: "TrendingUp",
    image: "https://images.unsplash.com/photo-1460472178825-e5240623afd5?auto=format&fit=crop&w=900&q=80",
    benefits: [
      "Portfolio-scale servicing",
      "Consistent quality across properties",
      "Single point of contact"
    ]
  }
];
