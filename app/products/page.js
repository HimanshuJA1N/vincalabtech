import ProductsClient from "./ProductsClient";

export const metadata = {
  title: "Laboratory Products Catalogue | Vincalabtech",
  description:
    "Browse Vincalabtech's portfolio of analytical instruments, consumables and laboratory essentials for pharmaceutical and industrial QC labs.",
};

export default function ProductsPage() {
  return <ProductsClient />;
}
