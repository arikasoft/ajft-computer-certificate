"use client";

import {
  Laptop,
  FileBadge2,
  Zap,
  ShieldCheck,
  Smartphone,
  QrCode,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Laptop,
    title: "100% Online Examination",
    description:
      "Take your computer certificate examination from anywhere using desktop, laptop or mobile.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: FileBadge2,
    title: "Digital Certificate",
    description:
      "Download your certificate instantly after successfully qualifying the examination.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Zap,
    title: "Instant Result",
    description:
      "Get your score immediately after submitting the examination.",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: ShieldCheck,
    title: "Secure Examination",
    description:
      "Modern secure examination system with automatic answer saving and result processing.",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    description:
      "Fully responsive platform that works smoothly on all screen sizes.",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: QrCode,
    title: "QR Verification",
    description:
      "Every certificate includes a unique QR Code for online verification.",
    color: "bg-purple-100 text-purple-600",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Why Choose AJFT
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Everything You Need for Online Certification
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Anand Jivan Foundation Trust offers a secure, fast and
            reliable online computer certificate examination platform.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl"
              >

                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${feature.color}`}
                >
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="leading-7 text-slate-600">
                  {feature.description}
                </p>

                <div className="mt-8">

                  <Link
                    href="/register"
                    className="inline-flex items-center gap-2 font-semibold text-blue-600 transition group-hover:gap-3"
                  >
                    Apply Now

                    <ArrowRight className="h-5 w-5" />

                  </Link>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}