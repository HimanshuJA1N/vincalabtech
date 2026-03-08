"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FlaskConical,
  Microscope,
  Scale,
  Thermometer,
  Pipette,
  ShieldCheck,
} from "lucide-react";

const categories = [
  "All",
  "Analytical Instruments",
  "Lab Consumables",
  "Testing Equipment",
  "Calibration Equipment",
  "Lab Glassware",
  "Lab Setup Solutions",
];

const products = [
  {
    name: "Analytical Balance 220g",
    category: "Analytical Instruments",
    price: "₹68,000",
    description:
      "High-resolution analytical balance with draft shield suitable for validated methods.",
    icon: Scale,
  },
  {
    name: "Benchtop pH / Conductivity Meter",
    category: "Analytical Instruments",
    price: "₹42,500",
    description:
      "Dual-parameter meter for routine QC measurements with GLP-compliant logging.",
    icon: Microscope,
  },
  {
    name: "Membrane Filters (0.45µm)",
    category: "Lab Consumables",
    price: "On request",
    description:
      "Sterile membrane filters for sample preparation and pharmaceutical filtration tests.",
    icon: FlaskConical,
  },
  {
    name: "Glass Volumetric Flasks Set",
    category: "Lab Glassware",
    price: "₹6,800",
    description:
      "Class A borosilicate volumetric flasks with individual certificates.",
    icon: Pipette,
  },
  {
    name: "Digital Incubator (Rugged)",
    category: "Testing Equipment",
    price: "On request",
    description:
      "Stable temperature control for microbiology, stability and incubation tests.",
    icon: Thermometer,
  },
  {
    name: "Hot Air Oven (Industrial QC)",
    category: "Testing Equipment",
    price: "₹1,10,000",
    description:
      "Forced air oven for drying, conditioning and materials testing workflows.",
    icon: Thermometer,
  },
  {
    name: "Weight Calibration Set (Class F1)",
    category: "Calibration Equipment",
    price: "On request",
    description:
      "Traceable calibration weights for routine balance verification under cGMP.",
    icon: ShieldCheck,
  },
  {
    name: "Turnkey QC Lab Furniture",
    category: "Lab Setup Solutions",
    price: "Project based",
    description:
      "Modular laboratory furniture, fume hoods and utilities designed to layout.",
    icon: Microscope,
  },
  {
    name: "Micropipette Tips, Low Retention",
    category: "Lab Consumables",
    price: "₹2,400",
    description:
      "Filtered tips ensuring precision pipetting in sensitive analytical work.",
    icon: Pipette,
  },
  {
    name: "Digital Thermo-Hygrometer",
    category: "Calibration Equipment",
    price: "₹4,200",
    description:
      "Calibrated thermo-hygrometer for monitoring controlled lab environments.",
    icon: Thermometer,
  },
];

export default function ProductsClient() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") return products;
    return products.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 md:px-6 lg:px-4 lg:py-10">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Products
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Representative portfolio of laboratory instruments, consumables and
            turnkey solutions offered by Vincalabtech. For brand-specific
            options, please share your detailed requirement.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14 pt-6 md:px-6 lg:px-4">
        <div className="flex flex-wrap items-center gap-2 pb-6">
          {categories.map((category) => (
            <Button
              key={category}
              size="sm"
              variant={selectedCategory === category ? "default" : "outline"}
              className="text-xs"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <Card
              key={product.name}
              className="flex h-full flex-col border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-24 items-center justify-center rounded-t-2xl bg-slate-100 text-xs font-medium uppercase tracking-wide text-slate-500">
                {product.name} Image
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between gap-2">
                  <CardTitle className="text-sm font-semibold text-slate-900">
                    {product.name}
                  </CardTitle>
                  <Badge variant="muted" className="text-[10px]">
                    {product.category}
                  </Badge>
                </div>
                <CardDescription className="mt-1 text-xs leading-relaxed text-slate-600">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-end gap-2 py-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-blue-900">
                    {product.price === "On request" ||
                    product.price === "Project based"
                      ? product.price
                      : product.price}
                  </span>
                  <product.icon className="h-5 w-5 text-blue-800" />
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between gap-2 border-t border-slate-100 bg-slate-50/80">
                {product.price === "On request" ||
                product.price === "Project based" ? (
                  <Button size="sm" className="w-full text-xs">
                    Request Quote
                  </Button>
                ) : (
                  <>
                    <Button size="sm" variant="outline" className="w-full text-xs">
                      Add to Cart
                    </Button>
                    <Button size="sm" className="w-full text-xs">
                      Request Quote
                    </Button>
                  </>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
