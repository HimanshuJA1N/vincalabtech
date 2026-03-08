import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Factory, Microscope, FlaskConical, Scale, ShieldCheck, Globe2 } from "lucide-react";

export const metadata = {
  title: "Laboratory Brands | Vincalabtech OEM Partnerships",
  description:
    "Overview of key laboratory equipment and consumables brands represented by Vincalabtech for pharmaceutical and industrial QC laboratories in India.",
};

const brands = [
  {
    name: "Sartorius",
    focus: "Balances, filtration, bioprocess",
    description:
      "High-performance weighing, filtration and bioprocess solutions widely adopted in regulated pharmaceutical environments.",
    icon: Scale,
  },
  {
    name: "Mettler Toledo",
    focus: "Analytical instruments, balances",
    description:
      "Precision analytical balances and instruments for method development, QC and R&D laboratories.",
    icon: Microscope,
  },
  {
    name: "Thermo Fisher",
    focus: "Analytical systems, consumables",
    description:
      "Comprehensive portfolio of analytical systems, chromatography consumables and lab plastics.",
    icon: FlaskConical,
  },
  {
    name: "Shimadzu",
    focus: "Chromatography, spectroscopy",
    description:
      "Robust chromatography and spectroscopy platforms for routine and advanced analytical workflows.",
    icon: Factory,
  },
  {
    name: "Merck",
    focus: "Chemicals, standards, filtration",
    description:
      "Reference-grade chemicals, standards and filtration products supporting regulated QC methods.",
    icon: ShieldCheck,
  },
  {
    name: "Borosil",
    focus: "Lab glassware",
    description:
      "Borosilicate glassware for volumetric, storage and high-temperature laboratory applications.",
    icon: FlaskConical,
  },
  {
    name: "Tarsons",
    focus: "Plasticware, consumables",
    description:
      "Laboratory plasticware and consumables ensuring reproducible handling of samples and reagents.",
    icon: FlaskConical,
  },
  {
    name: "Hanna Instruments",
    focus: "Electrochemistry, meters",
    description:
      "Electrochemical testing systems for pH, conductivity and related measurements in QC environments.",
    icon: Microscope,
  },
];

export default function BrandsPage() {
  return (
    <div className="bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 md:px-6 lg:px-4 lg:py-10">
          <Badge variant="muted" className="mb-3">
            Brands
          </Badge>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Global brands represented by Vincalabtech
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
            We work with leading OEMs and principals to provide technically sound,
            serviceable and compliant solutions that align to your laboratory&apos;s
            methods and regulatory framework.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-4 lg:py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {brands.map((brand) => (
            <Card
              key={brand.name}
              className="border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
            >
              <div className="flex h-20 items-center justify-center rounded-t-2xl bg-slate-100 text-sm font-medium text-slate-800">
                {brand.name} Logo
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between gap-2">
                  <CardTitle className="text-sm font-semibold text-slate-900">
                    {brand.name}
                  </CardTitle>
                  <brand.icon className="h-5 w-5 text-blue-800" />
                </div>
                <CardDescription className="mt-1 text-xs text-slate-600">
                  {brand.focus}
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-4 text-xs leading-relaxed text-slate-600">
                {brand.description}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-10 border-slate-200 bg-slate-50/80">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-sm font-semibold text-slate-900">
              <Globe2 className="h-4 w-4 text-blue-800" />
              Multi-brand, application-driven approach
            </CardTitle>
            <CardDescription>
              Brand-agnostic recommendations anchored in your method and compliance needs.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm leading-relaxed text-slate-600">
            While these are some of the key principals we work with, our role is to recommend
            the right combination of brands and models for each application. We remain
            flexible and can evaluate alternatives where required by corporate, regulatory
            or technical considerations.
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

