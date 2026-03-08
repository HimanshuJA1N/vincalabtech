import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import QuoteForm from "@/components/QuoteForm";
import {
  FlaskConical,
  Microscope,
  Scale,
  Thermometer,
  Pipette,
  ShieldCheck,
  Factory,
  Building2,
  Headset,
  Rocket,
  Truck,
  Wrench,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title:
    "Reliable Laboratory Equipment Solutions | Vincalabtech Laboratory Dealership",
  description:
    "Vincalabtech supplies high-quality analytical instruments, consumables and lab solutions for pharmaceutical and industrial QC laboratories across India.",
};

const stats = [
  { label: "Years of Experience", value: "10+" },
  { label: "Products Portfolio", value: "500+" },
  { label: "Laboratory Clients", value: "200+" },
  { label: "Global Brands", value: "50+" },
];

const productCategories = [
  {
    name: "Analytical Instruments",
    description: "Balances, titrators, pH meters, spectrophotometers and more.",
    icon: Microscope,
  },
  {
    name: "Lab Consumables",
    description: "Filters, tips, vials, reagents and daily-use lab essentials.",
    icon: FlaskConical,
  },
  {
    name: "Testing Equipment",
    description: "Physical testing systems for tablets, packaging and materials.",
    icon: Factory,
  },
  {
    name: "Calibration Equipment",
    description: "Certified standards and devices for routine calibration.",
    icon: Scale,
  },
  {
    name: "Lab Glassware",
    description: "Borosilicate glassware for analytical and prep workflows.",
    icon: Pipette,
  },
  {
    name: "Lab Setup Solutions",
    description:
      "Turnkey design, furniture and utilities for new and expanding labs.",
    icon: Building2,
  },
];

const featuredProducts = [
  {
    name: "pH Meter Portable",
    price: "₹4,500",
    description:
      "Rugged handheld pH meter ideal for on-site sampling and routine QC checks.",
  },
  {
    name: "Digital Weighing Balance",
    price: "₹8,200",
    description:
      "High-precision balance for analytical weighing with fast stabilization.",
  },
  {
    name: "Lab Thermometer Digital",
    price: "₹1,200",
    description:
      "Accurate digital thermometer suitable for incubators and cold rooms.",
  },
  {
    name: "Pipette Set (8-piece)",
    price: "₹3,800",
    description:
      "Ergonomic adjustable pipettes covering micro to millilitre volumes.",
  },
  {
    name: "Safety Goggles Pack",
    price: "₹950",
    description:
      "Chemical splash protection eyewear compliant with lab safety standards.",
  },
];

const brands = [
  "Sartorius",
  "Mettler Toledo",
  "Thermo Fisher",
  "Shimadzu",
  "Merck",
  "Borosil",
  "Tarsons",
  "Hanna Instruments",
];

const whyChoose = [
  {
    title: "Customer Service",
    description:
      "Dedicated account managers who understand regulatory and QC expectations.",
    icon: Headset,
  },
  {
    title: "Installation Support",
    description:
      "On-site installation, IQ/OQ documentation and operator familiarization.",
    icon: Wrench,
  },
  {
    title: "Fast Procurement",
    description:
      "Agile sourcing with clear lead-times and proactive order tracking.",
    icon: Rocket,
  },
  {
    title: "Reliable Supply",
    description:
      "Multi-brand partnerships to de-risk supply and ensure continuity.",
    icon: Truck,
  },
];

export default function Home() {
  return (
    <div className="bg-slate-50">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-10 text-white md:flex-row md:items-center md:gap-12 md:px-6 lg:px-4 lg:pb-20 lg:pt-14">
          <div className="flex-1 space-y-7">
            <Badge className="bg-blue-100/10 text-blue-100 backdrop-blur">
              Trusted partner for regulated labs in India
            </Badge>
            <div className="space-y-4">
              <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                Reliable Laboratory Equipment Solutions for Modern Laboratories
              </h1>
              <p className="max-w-xl text-sm leading-relaxed text-slate-100/90 sm:text-base">
                Vincalabtech supplies high-quality instruments, consumables and
                turnkey lab solutions for pharmaceutical and industrial QC
                laboratories across India, backed by responsive technical
                support.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button
                size="lg"
                className="gap-2 bg-white text-blue-900 hover:bg-slate-100"
                asChild
              >
                <Link href="/products">
                  Browse Products
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <QuoteForm
                trigger={
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-200 bg-blue-900/10 text-white hover:bg-blue-900/20"
                  >
                    Request Quote
                  </Button>
                }
              />
            </div>
            <div className="grid gap-4 pt-4 sm:grid-cols-2 md:max-w-lg">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-baseline justify-between rounded-2xl bg-blue-900/40 px-4 py-3 backdrop-blur-sm"
                >
                  <div className="text-2xl font-semibold">{stat.value}</div>
                  <div className="max-w-[10rem] text-right text-xs text-slate-100/80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <Card className="border-blue-200/40 bg-white/95 shadow-xl">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <ShieldCheck className="h-4 w-4 text-blue-800" />
                  Fully compliant lab procurement
                </CardTitle>
                <CardDescription>
                  Designed for cGMP, GLP and regulated environments.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-3 text-xs text-slate-700 sm:grid-cols-2">
                  <div className="space-y-1 rounded-xl bg-slate-50 px-3 py-2">
                    <div className="flex items-center gap-2">
                      <FlaskConical className="h-4 w-4 text-blue-800" />
                      <span className="font-medium">
                        Pharma QC Laboratories
                      </span>
                    </div>
                    <p className="text-[11px] leading-snug text-slate-600">
                      Instruments, reference standards and validation support
                      aligned with audit expectations.
                    </p>
                  </div>
                  <div className="space-y-1 rounded-xl bg-slate-50 px-3 py-2">
                    <div className="flex items-center gap-2">
                      <Factory className="h-4 w-4 text-blue-800" />
                      <span className="font-medium">Industrial QC Labs</span>
                    </div>
                    <p className="text-[11px] leading-snug text-slate-600">
                      Robust equipment for continuous manufacturing and
                      materials testing.
                    </p>
                  </div>
                </div>
                <div className="grid gap-3 text-xs text-slate-700 sm:grid-cols-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>Compliant documentation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>OEM backed service</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>Pan-India deliveries</span>
                  </div>
                </div>
                <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 px-3 py-2 text-[11px] leading-snug text-slate-600">
                  All visuals are placeholders representing laboratory
                  instrumentation and environments.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-4 lg:py-16">
        <div className="grid gap-8 md:grid-cols-[1.2fr,1fr] md:items-center">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
              Specialist partner for pharmaceutical and industrial laboratories
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              Vincalabtech works closely with QC, QA and engineering teams to
              ensure that every instrument and consumable supplied fits your
              method, regulatory and throughput requirements. From equipment
              selection and validation to long-term lifecycle support, we act as
              a single, accountable partner.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <Card
                key={stat.label}
                className="border-slate-200 bg-white/60 text-center shadow-none transition hover:-translate-y-1 hover:bg-white hover:shadow-md"
              >
                <CardContent className="space-y-1 py-5">
                  <div className="text-xl font-semibold text-blue-900">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-4 lg:py-16">
          <div className="flex flex-col gap-3 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                Product Categories
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                A curated portfolio matching routine QC, R&amp;D and validation
                lab requirements.
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="self-start sm:self-auto"
              asChild
            >
              <Link href="/products">
                View full catalogue
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {productCategories.map((cat) => (
              <Card
                key={cat.name}
                className="group border-slate-200 bg-slate-50/80 shadow-none transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-md"
              >
                <CardContent className="flex gap-4 py-5">
                  <div className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-900 text-white shadow-sm">
                    <cat.icon className="h-4 w-4" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold text-slate-900">
                      {cat.name}
                    </h3>
                    <p className="text-xs leading-relaxed text-slate-600">
                      {cat.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-4 lg:py-16">
        <div className="flex flex-col gap-3 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
              Featured Products
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Ready-to-quote essentials commonly deployed across QC laboratories.
            </p>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-5">
          {featuredProducts.map((product) => (
            <Card
              key={product.name}
              className="flex h-full flex-col border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-24 items-center justify-center rounded-t-2xl bg-slate-100 text-xs font-medium uppercase tracking-wide text-slate-500">
                {product.name} Image
              </div>
              <CardContent className="flex flex-1 flex-col gap-3 py-4">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">
                    {product.description}
                  </p>
                </div>
                <div className="mt-auto flex items-center justify-between gap-2 pt-1">
                  <span className="text-sm font-semibold text-blue-900">
                    {product.price}
                  </span>
                </div>
                <Button size="sm" className="mt-1 w-full text-xs">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Brands */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-4 lg:py-16">
          <div className="flex flex-col gap-3 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                Global Brands We Represent
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Selected OEM partners known for reliability, serviceability and
                compliance.
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="self-start sm:self-auto"
              asChild
            >
              <Link href="/brands">
                Explore brands
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-4">
            {brands.map((brand) => (
              <Card
                key={brand}
                className="border-slate-200 bg-white/80 shadow-none transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
              >
                <CardContent className="flex h-20 items-center justify-center text-sm font-medium text-slate-800">
                  {brand}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section
        id="industries"
        className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-4 lg:py-16"
      >
        <div className="flex flex-col gap-3 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
              Industries We Serve
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Focused expertise for regulated and high-throughput laboratory
              environments.
            </p>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <Card className="border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <CardContent className="space-y-3 py-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-900">
                <FlaskConical className="h-4 w-4" />
                Pharmaceutical QC &amp; QA
              </div>
              <p className="text-sm leading-relaxed text-slate-600">
                Support for QC, QA and stability labs operating under cGMP with
                instruments, reference materials and documentation aligned to
                audit expectations from global agencies.
              </p>
            </CardContent>
          </Card>
          <Card className="border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <CardContent className="space-y-3 py-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-900">
                <Factory className="h-4 w-4" />
                Industrial &amp; Process QC
              </div>
              <p className="text-sm leading-relaxed text-slate-600">
                Solutions for industrial QC labs in chemicals, specialty
                materials, food and beverage, packaging and engineering sectors
                where uptime and robustness are critical.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-4 lg:py-16">
          <div className="flex flex-col gap-3 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                Why Laboratories Choose Vincalabtech
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Built around the realities of validated, audited and
                high-throughput labs.
              </p>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {whyChoose.map((item) => (
              <Card
                key={item.title}
                className="border-slate-200 bg-slate-50/80 shadow-none transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-md"
              >
                <CardContent className="space-y-2 py-5">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-blue-900 text-white">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-10 text-white md:flex-row md:items-center md:px-6 lg:px-4 lg:py-12">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
              Ready to Equip Your Laboratory?
            </h2>
            <p className="max-w-xl text-sm text-slate-100">
              Share your upcoming projects or procurement plans and we&apos;ll
              prepare a tailored, brand-agnostic proposal optimized for your
              methods and budgets.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <QuoteForm
              trigger={
                <Button
                  size="lg"
                  className="gap-2 bg-white text-blue-900 hover:bg-slate-100"
                >
                  Request Quote
                  <ArrowRight className="h-4 w-4" />
                </Button>
              }
            />
            <Button
              size="lg"
              variant="outline"
              className="border-blue-200 bg-blue-900/10 text-white hover:bg-blue-900/20"
              asChild
            >
              <Link href="/contact">Discuss requirements</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
