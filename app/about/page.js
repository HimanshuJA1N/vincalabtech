import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Users2,
  ShieldCheck,
  Globe2,
  Target,
  Handshake,
} from "lucide-react";

export const metadata = {
  title: "About Vincalabtech | Laboratory Equipment Dealership",
  description:
    "Learn about Vincalabtech, our mission and values as a specialist laboratory equipment dealership serving pharmaceutical and industrial QC labs in India.",
};

const values = [
  {
    title: "Scientific Integrity",
    description:
      "Recommendations driven by application fit and compliance, not just catalogue presence.",
    icon: ShieldCheck,
  },
  {
    title: "Partnership Mindset",
    description:
      "Working as an extension of your QC and engineering teams for long-term reliability.",
    icon: Handshake,
  },
  {
    title: "Operational Discipline",
    description:
      "Clear commitments on timelines, documentation and communication throughout each project.",
    icon: Target,
  },
  {
    title: "Global Perspective",
    description:
      "Bringing international OEMs and best practices into the realities of Indian lab operations.",
    icon: Globe2,
  },
];

const stats = [
 { label: "Laboratories supported", value: "200+" },
 { label: "Pharma & industry projects", value: "350+" },
 { label: "Brands represented", value: "50+" },
 { label: "Years of domain experience", value: "10+" },
];

export default function AboutPage() {
  return (
    <div className="bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 md:px-6 lg:px-4 lg:py-10">
          <Badge variant="muted" className="mb-3">
            About Vincalabtech
          </Badge>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Specialist laboratory equipment dealership for regulated environments
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
            Vincalabtech was founded to bridge the gap between global laboratory
            technologies and the specific needs of Indian pharmaceutical and
            industrial quality control laboratories. We combine domain
            understanding, multi-brand access and disciplined project execution
            to deliver dependable lab infrastructure.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-4 lg:py-14">
        <div className="grid gap-8 md:grid-cols-[1.2fr,1fr] md:items-start">
          <div className="space-y-5">
            <h2 className="flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-900">
              <Building2 className="h-5 w-5 text-blue-800" />
              Our Story
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              The founders of Vincalabtech spent years supporting laboratories
              across India and observed recurring challenges: fragmented
              sourcing across multiple vendors, limited application guidance
              from catalog-only dealers and misalignment between equipment
              specifications and validated methods. Vincalabtech was created to
              provide a single, accountable partner who owns outcomes and not
              just deliveries.
            </p>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              Today, we work with QC, QA and engineering teams across pharma,
              chemicals, food, packaging and allied industries to scope,
              source, install and support laboratory equipment and consumables
              that stand up to regulatory and operational scrutiny.
            </p>
          </div>

          <Card className="border-slate-200 bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sm font-semibold">
                <Users2 className="h-4 w-4 text-blue-800" />
                Team & capabilities
              </CardTitle>
              <CardDescription>
                A compact, specialized team with deep lab domain experience.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-600">
              <ul className="space-y-2">
                <li>
                  • Application specialists with experience in analytical
                  development, method validation and QC operations.
                </li>
                <li>
                  • Project and service coordinators who manage installations,
                  IQ/OQ and post-sales support.
                </li>
                <li>
                  • Strategic OEM partnerships enabling access to diverse
                  technologies under one roof.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-4 lg:py-14">
          <div className="grid gap-8 md:grid-cols-[1.1fr,1.1fr] md:items-start">
            <Card className="border-slate-200 bg-slate-50/80 shadow-none">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <Target className="h-4 w-4 text-blue-800" />
                  Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-slate-600 sm:text-base">
                To be the most dependable partner for laboratories in India by
                delivering scientifically sound, compliant and sustainable
                equipment solutions that stand up to everyday operational and
                regulatory demands.
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-slate-50/80 shadow-none">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <Handshake className="h-4 w-4 text-blue-800" />
                  How we work
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                <p>
                  We start with your methods, sample loads and compliance
                  framework, then work backwards to recommend fit-for-purpose
                  instruments, brands and configurations.
                </p>
                <p>
                  Our role continues beyond delivery through coordination of
                  installation, qualification, operator training and ongoing
                  after-sales support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-4 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[1.4fr,1fr] lg:items-start">
          <div>
            <h2 className="mb-4 text-lg font-semibold tracking-tight text-slate-900">
              Values that guide every engagement
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {values.map((value) => (
                <Card
                  key={value.title}
                  className="border-slate-200 bg-white shadow-none transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
                >
                  <CardContent className="space-y-2 py-5">
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-blue-900 text-white">
                      <value.icon className="h-4 w-4" />
                    </div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      {value.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-slate-600">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <Card className="border-slate-200 bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                Key figures
              </CardTitle>
              <CardDescription>
                A snapshot of our presence across laboratories.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl bg-slate-50 px-3 py-2"
                >
                  <div className="text-lg font-semibold text-blue-900">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-600">{stat.label}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

