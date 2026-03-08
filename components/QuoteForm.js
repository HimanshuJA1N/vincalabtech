"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { X, Mail, Building2, User, Phone, ClipboardList } from "lucide-react";

/**
 * Reusable quote / enquiry form presented in a modal.
 * Usage:
 * <QuoteForm trigger={<Button>Request Quote</Button>} />
 */
export default function QuoteForm({ trigger, className }) {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    // In a real app, submit to API here.
    setTimeout(() => {
      setSubmitting(false);
      setOpen(false);
    }, 800);
  };

  const Trigger = () => {
    if (!trigger) {
      return (
        <Button onClick={() => setOpen(true)} size="lg">
          Request Quote
        </Button>
      );
    }

    return (
      <span
        onClick={() => setOpen(true)}
        className="inline-flex"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setOpen(true)}
      >
        {trigger}
      </span>
    );
  };

  return (
    <>
      <Trigger />
      {open && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-900/50 px-4 backdrop-blur-sm">
          <div
            className="absolute inset-0"
            onClick={() => !submitting && setOpen(false)}
          />
          <Card
            className={cn(
              "relative z-50 w-full max-w-xl shadow-xl animate-in fade-in zoom-in-95 duration-150",
              className
            )}
          >
            <button
              type="button"
              onClick={() => !submitting && setOpen(false)}
              className="absolute right-4 top-4 rounded-full border border-slate-200 bg-white p-1 text-slate-500 shadow-sm transition-colors hover:text-slate-900"
              aria-label="Close quote form"
            >
              <X className="h-4 w-4" />
            </button>
            <CardHeader className="pr-12">
              <CardTitle className="flex items-center gap-2 text-lg">
                <ClipboardList className="h-5 w-5 text-blue-800" />
                Request a Quote
              </CardTitle>
              <CardDescription>
                Share your laboratory requirements and our team will respond
                with a tailored quotation within 1 business day.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-slate-600">
                      <User className="h-3.5 w-3.5 text-blue-800" />
                      Contact Name
                    </label>
                    <input
                      required
                      name="name"
                      placeholder="Dr. A. Sharma"
                      className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm outline-none ring-blue-500 transition focus:ring-2"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-slate-600">
                      <Building2 className="h-3.5 w-3.5 text-blue-800" />
                      Company / Lab
                    </label>
                    <input
                      required
                      name="company"
                      placeholder="Pharma QC Lab, Mumbai"
                      className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm outline-none ring-blue-500 transition focus:ring-2"
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-slate-600">
                      <Mail className="h-3.5 w-3.5 text-blue-800" />
                      Work Email
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="name@company.com"
                      className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm outline-none ring-blue-500 transition focus:ring-2"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-slate-600">
                      <Phone className="h-3.5 w-3.5 text-blue-800" />
                      Phone
                    </label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      placeholder="+91 98xxxxxx10"
                      className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm outline-none ring-blue-500 transition focus:ring-2"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-slate-600">
                    <ClipboardList className="h-3.5 w-3.5 text-blue-800" />
                    Requirement Details
                  </label>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="List the instruments, consumables or lab setup requirements, approximate quantities and timelines."
                    className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-blue-500 transition focus:ring-2"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-slate-500">
                  By submitting, you agree to be contacted by Vincalabtech for
                  this enquiry. No promotional emails.
                </p>
                <Button
                  type="submit"
                  size="lg"
                  disabled={submitting}
                  className="w-full sm:w-auto"
                >
                  {submitting ? "Submitting..." : "Submit Request"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      )}
    </>
  );
}

