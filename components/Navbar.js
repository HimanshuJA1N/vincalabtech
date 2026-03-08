"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import QuoteForm from "@/components/QuoteForm";
import { Menu, X, FlaskConical, ArrowRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/brands", label: "Brands" },
  { href: "/#industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6 lg:px-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-blue-900 transition hover:opacity-90"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-blue-900 text-white shadow-sm">
            <FlaskConical className="h-4 w-4" />
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-base font-semibold tracking-tight">
              VincaLabtech
            </span>
            <span className="text-xs text-slate-500">
              Laboratory Equipment Dealership
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-5 text-sm font-medium text-slate-700">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href.replace("/#", ""));
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative pb-1 transition hover:text-blue-900 ${
                      isActive ? "text-blue-900" : ""
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-center rounded-full bg-blue-800 transition-transform ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
          <QuoteForm
            trigger={
              <Button size="sm" className="gap-1.5">
                Request Quote
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            }
          />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <QuoteForm
            trigger={
              <Button size="sm" variant="outline" className="gap-1.5">
                Quote
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            }
          />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white/95 px-4 pb-4 pt-2 shadow-sm md:hidden">
          <ul className="flex flex-col gap-1 text-sm font-medium text-slate-700">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href.replace("/#", ""));
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center justify-between rounded-lg px-2 py-2 transition hover:bg-slate-50 ${
                      isActive ? "text-blue-900" : ""
                    }`}
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}

