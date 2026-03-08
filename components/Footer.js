import Link from "next/link";
import { Mail, MapPin, Phone, Copyright } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 md:flex-row md:justify-between md:px-6 lg:px-4">
        <div className="max-w-sm space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-blue-900">
            VincaLabtech
          </h2>
          <p className="text-sm leading-relaxed text-slate-600">
            Vincalabtech is a specialized laboratory equipment dealership
            serving pharmaceutical and industrial quality control laboratories
            across India with reliable instruments, consumables and turnkey lab
            solutions.
          </p>
        </div>

        <div className="flex flex-1 flex-col gap-8 text-sm md:flex-row md:justify-end">
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Quick Links
            </h3>
            <ul className="space-y-1.5 text-slate-600">
              <li>
                <Link
                  href="/products"
                  className="transition hover:text-blue-900"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/brands"
                  className="transition hover:text-blue-900"
                >
                  Brands
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="transition hover:text-blue-900"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-blue-900"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Contact
            </h3>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-800" />
                <a
                  href="mailto:info@vincalabtech.com"
                  className="transition hover:text-blue-900"
                >
                  info@vincalabtech.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-800" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-800" />
                <span>Phone available on request</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 bg-slate-50/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-xs text-slate-500 md:px-6 lg:px-4">
          <span className="inline-flex items-center gap-1">
            <Copyright className="h-3.5 w-3.5" />
            {new Date().getFullYear()} Vincalabtech. All rights reserved.
          </span>
          <span>For professional laboratory use only.</span>
        </div>
      </div>
    </footer>
  );
}

