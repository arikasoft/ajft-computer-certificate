"use client";

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  IndianRupee,
  Laptop,
} from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-20">

      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900" />

      <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="rounded-[32px] border border-white/20 bg-white/10 p-10 backdrop-blur-lg lg:p-16">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            {/* Left */}

            <div>

              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white">

                <BadgeCheck className="h-4 w-4" />

                Registration Open

              </span>

              <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white lg:text-5xl">
                Start Your
                <span className="block text-cyan-300">
                  Computer Certification
                </span>
                Today
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
                Register now, complete your online examination and
                receive your QR Verified Digital Certificate from
                Anand Jivan Foundation Trust.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                <div className="rounded-full bg-white/15 px-5 py-3 text-white">
                  ₹199 Fee
                </div>

                <div className="rounded-full bg-white/15 px-5 py-3 text-white">
                  50 Questions
                </div>

                <div className="rounded-full bg-white/15 px-5 py-3 text-white">
                  60 Minutes
                </div>

                <div className="rounded-full bg-white/15 px-5 py-3 text-white">
                  Instant Result
                </div>

              </div>

            </div>

            {/* Right */}

            <div className="rounded-3xl bg-white p-8 shadow-2xl">

              <div className="mb-8 flex items-center gap-4">

                <div className="rounded-2xl bg-blue-100 p-4">

                  <Laptop className="h-8 w-8 text-blue-700" />

                </div>

                <div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    Computer Certificate
                  </h3>

                  <p className="text-slate-500">
                    Online Examination Portal
                  </p>

                </div>

              </div>

              <div className="space-y-5">

                <div className="flex items-center justify-between rounded-xl bg-slate-100 p-4">

                  <span className="font-medium text-slate-700">
                    Registration Fee
                  </span>

                  <div className="flex items-center font-bold text-green-600">

                    <IndianRupee className="mr-1 h-5 w-5" />

                    199

                  </div>

                </div>

                <div className="flex items-center justify-between rounded-xl bg-slate-100 p-4">
                  <span className="font-medium text-slate-700">
                    Questions
                  </span>

                  <strong>50 MCQ</strong>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-slate-100 p-4">
                  <span className="font-medium text-slate-700">
                    Duration
                  </span>

                  <strong>60 Minutes</strong>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-slate-100 p-4">
                  <span className="font-medium text-slate-700">
                    Result
                  </span>

                  <strong>Instant</strong>
                </div>

              </div>

              <div className="mt-8 grid gap-4">

                <Link
                  href="/register"
                  className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700"
                >
                  Apply Now

                  <ArrowRight className="h-5 w-5" />
                </Link>

                <Link
                  href="/login"
                  className="rounded-xl border border-slate-300 py-4 text-center font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  Student Login
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}