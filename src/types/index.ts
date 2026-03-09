export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // lucide-react icon name
  image: string; // Unsplash URL
  slug: string;
  features: string[];
}

export interface ClientType {
  id: string;
  title: string;
  description: string;
  icon: string; // lucide-react icon name
  image: string; // Unsplash URL
  benefits: string[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number; // 1–5
  clientType: "property-manager" | "investor" | "real-estate" | "financial";
  avatar: string; // Pexels URL
}

export interface ContactFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  propertyType: string;
  serviceNeeded: string;
  location: string;
  message: string;
  agreeToTerms: boolean;
  formSource?: "quote" | "contact" | "client-onboarding";
}

export interface ClientOnboardingFormData {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  companyType: string;
  companyWebsite: string;
  services: string[];
  portfolioSize: string;
  propertyLocations: string;
  additionalNotes: string;
  agreeToTerms: boolean;
}

export interface ClientOnboardingFormErrors {
  companyName?: string;
  contactPerson?: string;
  email?: string;
  phone?: string;
  companyType?: string;
  services?: string;
  portfolioSize?: string;
  propertyLocations?: string;
  additionalNotes?: string;
  agreeToTerms?: string;
}
