"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Laptop,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa6";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Computer Certificate", href: "/certificate" },
  { name: "Verify Certificate", href: "/verify" },
  { name: "Contact", href: "/contact" },
];

const studentLinks = [
  { name: "Student Login", href: "/login" },
  { name: "Register", href: "/register" },
  { name: "Exam Instructions", href: "/instructions" },
  { name: "Download Certificate", href: "/certificate" },
  { name: "Result", href: "/result" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms" },
  { name: "Refund Policy", href: "/refund-policy" },
  { name: "Disclaimer", href: "/disclaimer" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* About */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl bg-blue-600 p-3">
                <Laptop className="h-6 w-6" />
              </div>

              <div>
                <h2 className="text-xl font-bold">AJFT</h2>
                <p className="text-sm text-slate-400">
                  Computer Certificate Portal
                </p>
              </div>
            </div>

            <p className="leading-7 text-slate-400">
              Anand Jivan Foundation Trust provides professional online
              computer certification examinations with instant result,
              digital certificate and QR verification.
            </p>

            <div className="mt-6 flex gap-3">

              <a
                href="#"
                className="rounded-lg bg-slate-800 p-3 transition hover:bg-blue-600"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                className="rounded-lg bg-slate-800 p-3 transition hover:bg-pink-600"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="rounded-lg bg-slate-800 p-3 transition hover:bg-red-600"
              >
                <FaYoutube size={18} />
              </a>

              <a
                href="#"
                className="rounded-lg bg-slate-800 p-3 transition hover:bg-blue-500"
              >
                <FaLinkedinIn size={18} />
              </a>

            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="mb-6 text-lg font-semibold">
              Quick Links
            </h3>

            <div className="space-y-4">
              {quickLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition"
                >
                  <ArrowRight size={15} />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Student */}

          <div>
            <h3 className="mb-6 text-lg font-semibold">
              Student Services
            </h3>

            <div className="space-y-4">
              {studentLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition"
                >
                  <ArrowRight size={15} />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}

          <div>
            <h3 className="mb-6 text-lg font-semibold">
              Contact Us
            </h3>

            <div className="space-y-5">

              <div className="flex items-start gap-3">
                <MapPin className="mt-1 text-blue-400" />

                <div>
                  <p className="text-slate-300">
                    Anand Jivan Foundation Trust
                  </p>

                  <p className="text-sm text-slate-500">
                    Bihar, India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-green-400" />

                <span className="text-slate-400">
                  +91 XXXXX XXXXX
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-red-400" />

                <span className="text-slate-400">
                  info@ajft.org
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">

          <p className="text-center text-sm text-slate-500">
            © {new Date().getFullYear()} Anand Jivan Foundation Trust.
            All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-5 text-sm">
            {legalLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-500 hover:text-white transition"
              >
                {item.name}
              </Link>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}