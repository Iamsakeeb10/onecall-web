"use client";

import { Button } from "@/components/ui/Button";
import { CheckCircle2, ChevronDown, Loader2, Send } from "lucide-react";
import React, { useState } from "react";

const INQUIRY_OPTIONS: { value: string; label: string; disabled?: boolean }[] = [
  { value: "", label: "Select an option...", disabled: true },
  { value: "maintenance", label: "Property Maintenance Service" },
  { value: "client", label: "Client Partnership" },
  { value: "vendor", label: "Vendor Application" },
  { value: "inquiry", label: "General Inquiry" },
  { value: "support", label: "Support" },
];

type InquiryValue = string;

interface FormState {
  name: string;
  email: string;
  phone: string;
  inquiryType: InquiryValue;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  inquiryType?: string;
  message?: string;
}

const inputBase =
  "bg-surface-50 border border-surface-200 rounded-lg px-4 py-3 font-body text-charcoal placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-orange/30 focus:border-orange transition-colors duration-200 w-full";
const inputError = "border-error focus:ring-error/30";
const labelBase = "block font-accent text-sm font-semibold text-charcoal mb-1.5";

function getServiceNeededLabel(value: InquiryValue): string {
  const option = INQUIRY_OPTIONS.find((o) => o.value === value);
  return option && option.label ? option.label : "";
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    setSubmitError(null);
  };

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email address.";
    if (!form.inquiryType) e.inquiryType = "Please select an inquiry type.";
    if (!form.message.trim()) e.message = "Message is required.";
    else if (form.message.trim().length < 10)
      e.message = "Message must be at least 10 characters.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    if (!validate()) return;

    setIsLoading(true);
    try {
      const payload = {
        fullName: form.name.trim(),
        companyName: "",
        email: form.email.trim(),
        phone: form.phone.trim() || "",
        propertyType: "",
        serviceNeeded: getServiceNeededLabel(form.inquiryType),
        location: "",
        message: form.message.trim(),
        agreeToTerms: true,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setSuccess(true);
      } else {
        setSubmitError(data?.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setSubmitError("Failed to send. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (success) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 rounded-full bg-orange-muted flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="text-orange" size={32} />
        </div>
        <h3 className="font-display text-2xl font-bold text-charcoal mb-2">Message Sent!</h3>
        <p className="font-body text-text-muted max-w-sm mx-auto">
          Thank you for reaching out. Our team will respond within 1 business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div>
        <label htmlFor="contact-name" className={labelBase}>
          Name<span className="text-orange ml-0.5" aria-hidden="true">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your full name"
          className={`${inputBase} ${errors.name ? inputError : ""}`}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
        />
        {errors.name && (
          <p id="contact-name-error" className="mt-1.5 text-sm text-error font-body" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-email" className={labelBase}>
          Email<span className="text-orange ml-0.5" aria-hidden="true">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className={`${inputBase} ${errors.email ? inputError : ""}`}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
        />
        {errors.email && (
          <p id="contact-email-error" className="mt-1.5 text-sm text-error font-body" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-phone" className={labelBase}>
          Phone <span className="text-text-muted font-normal">(Optional)</span>
        </label>
        <input
          id="contact-phone"
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="(000) 000-0000"
          className={inputBase}
        />
      </div>

      <div>
        <label htmlFor="contact-inquiryType" className={labelBase}>
          What can we help you with?<span className="text-orange ml-0.5" aria-hidden="true">*</span>
        </label>
        <div className="relative">
          <select
            id="contact-inquiryType"
            name="inquiryType"
            value={form.inquiryType}
            onChange={handleChange}
            className={`${inputBase} appearance-none pr-10 ${errors.inquiryType ? inputError : ""}`}
            aria-invalid={!!errors.inquiryType}
            aria-describedby={errors.inquiryType ? "contact-inquiryType-error" : undefined}
          >
            {INQUIRY_OPTIONS.map((opt) => (
              <option key={opt.value || "empty"} value={opt.value} disabled={opt.disabled === true}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown
            className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted"
            size={20}
            aria-hidden
          />
        </div>
        {errors.inquiryType && (
          <p id="contact-inquiryType-error" className="mt-1.5 text-sm text-error font-body" role="alert">
            {errors.inquiryType}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-message" className={labelBase}>
          Message<span className="text-orange ml-0.5" aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Please tell us how we can assist you."
          className={`${inputBase} resize-y min-h-[120px] ${errors.message ? inputError : ""}`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
        />
        {errors.message && (
          <p id="contact-message-error" className="mt-1.5 text-sm text-error font-body" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {submitError && (
        <p className="text-sm text-error font-body" role="alert" aria-live="polite">
          {submitError}
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={isLoading}
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
        ) : (
          <Send className="w-4 h-4" aria-hidden="true" />
        )}
        Send Message
      </Button>
    </form>
  );
}
