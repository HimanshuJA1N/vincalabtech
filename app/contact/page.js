import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, User, Building2, MessageCircle } from "lucide-react";

export const metadata = {
  title: "Contact Vincalabtech | Laboratory Equipment Enquiries",
  description:
    "Contact Vincalabtech for laboratory equipment, consumables and lab setup enquiries. Based in Mumbai, serving pharmaceutical and industrial QC labs across India.",
};

export default function ContactPage() {
  return (
    <div className="bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 md:px-6 lg:px-4 lg:py-10">
          <Badge variant="muted" className="mb-3">
            Contact
          </Badge>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Share your laboratory requirements
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
            Tell us about your upcoming projects, new lab setup or routine procurement
            needs. Our team will respond with clarifications and a tailored proposal.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-4 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[1.4fr,1fr] lg:items-start">
          <Card className="border-slate-200 bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <MessageCircle className="h-4 w-4 text-blue-800" />
                Contact form
              </CardTitle>
              <CardDescription>
                Provide as much detail as possible for a precise response.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-slate-600">
                      <User className="h-3.5 w-3.5 text-blue-800" />
                      Name
                    </label>
                    <input
                      name="name"
                      required
                      placeholder="Your full name"
                      className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm outline-none ring-blue-500 transition focus:ring-2"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-slate-600">
                      <Building2 className="h-3.5 w-3.5 text-blue-800" />
                      Company / Lab
                    </label>
                    <input
                      name="company"
                      required
                      placeholder="Organisation name"
                      className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm outline-none ring-blue-500 transition focus:ring-2"
                    />
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-slate-600">
                      <Mail className="h-3.5 w-3.5 text-blue-800" />
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
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
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91"
                      className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm outline-none ring-blue-500 transition focus:ring-2"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium uppercase tracking-wide text-slate-600">
                    Requirement details
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Describe your instruments, consumables or lab setup requirements, including approximate timelines and project stage."
                    className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-blue-500 transition focus:ring-2"
                  />
                </div>
                <Button type="submit" size="lg" className="mt-2">
                  Submit enquiry
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Card className="border-slate-200 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <MapPin className="h-4 w-4 text-blue-800" />
                  Contact details
                </CardTitle>
                <CardDescription>
                  We typically respond within one business day.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-600">
                <div className="flex items-start gap-2">
                  <Mail className="mt-0.5 h-4 w-4 text-blue-800" />
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Email
                    </div>
                    <a
                      href="mailto:info@vincalabtech.com"
                      className="text-sm text-slate-700 transition hover:text-blue-900"
                    >
                      info@vincalabtech.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 text-blue-800" />
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Address
                    </div>
                    <p className="text-sm text-slate-700">
                      Mumbai, Maharashtra, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="mt-0.5 h-4 w-4 text-blue-800" />
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Business hours
                    </div>
                    <p className="text-sm text-slate-700">
                      Monday to Friday, 9:30am – 6:30pm IST
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

