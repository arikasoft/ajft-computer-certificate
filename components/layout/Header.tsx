"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Laptop,
  ChevronRight,
  LogIn,
  UserPlus,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Certificate", href: "/certificate" },
  { label: "Verify", href: "/verify" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg"
            : "bg-white/80 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
              <Laptop size={24} />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900">
                AJFT
              </h2>

              <p className="text-xs text-slate-500">
                Computer Certificate
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-medium text-slate-700 transition hover:text-blue-600"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right */}

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/login"
              className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-semibold transition hover:border-blue-600 hover:text-blue-600"
            >
              <LogIn size={18} />
              Login
            </Link>

            <Link
              href="/register"
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              <UserPlus size={18} />
              Register
            </Link>

            <Link
              href="/register"
              className="flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-green-700"
            >
              Apply ₹199

              <ChevronRight size={18} />
            </Link>
          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setMobileOpen(true)}
            className="rounded-lg border p-2 lg:hidden"
          >
            <Menu />
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}

      <div
        className={`fixed inset-0 z-[60] bg-black/50 transition duration-300 ${
          mobileOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Drawer */}

      <aside
        className={`fixed right-0 top-0 z-[70] h-screen w-80 bg-white shadow-2xl transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center justify-between border-b px-6">
          <div>
            <h3 className="font-bold text-slate-900">
              AJFT Portal
            </h3>

            <p className="text-xs text-slate-500">
              Computer Certificate
            </p>
          </div>

          <button
            onClick={() => setMobileOpen(false)}
            className="rounded-lg border p-2"
          >
            <X />
          </button>
        </div>

        <nav className="flex flex-col p-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="space-y-3 p-6">
          <Link
            href="/login"
            className="block rounded-lg border py-3 text-center font-semibold"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="block rounded-lg bg-blue-600 py-3 text-center font-semibold text-white"
          >
            Register
          </Link>

          <Link
            href="/register"
            className="block rounded-lg bg-green-600 py-3 text-center font-bold text-white"
          >
            Apply Now ₹199
          </Link>
        </div>
      </aside>

      {/* Spacer */}
      <div className="h-20" />
    </>
  );
}