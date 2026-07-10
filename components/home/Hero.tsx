"use client";

import Link from "next/link";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  BookOpen,
  Clock3,
  IndianRupee,
  ShieldCheck,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-900 to-blue-600 text-white">
      {/* Background Blur */}
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}
          <div>

            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
              <BadgeCheck className="h-4 w-4 text-green-400" />
              Anand Jivan Foundation Trust
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
              Computer
              <span className="block text-cyan-300">
                Certificate Examination
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
              Join India's trusted online computer certification exam.
              Pay only ₹199, attempt 50 MCQs, get instant result and
              download your digital certificate.
            </p>

            {/* Feature Pills */}
            <div className="mt-8 flex flex-wrap gap-3">

              <div className="rounded-full bg-white/10 px-4 py-2">
                ₹199 Exam Fee
              </div>

              <div className="rounded-full bg-white/10 px-4 py-2">
                50 Questions
              </div>

              <div className="rounded-full bg-white/10 px-4 py-2">
                60 Minutes
              </div>

              <div className="rounded-full bg-white/10 px-4 py-2">
                Instant Result
              </div>

            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/register"
                className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-6 py-4 font-semibold text-white transition hover:bg-green-600"
              >
                Apply Now
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/verify"
                className="rounded-xl border border-white/30 px-6 py-4 font-semibold transition hover:bg-white hover:text-slate-900"
              >
                Verify Certificate
              </Link>

            </div>

          </div>

          {/* Right */}
          <div className="relative">

            <div className="rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">

              <div className="rounded-2xl bg-white p-8 text-slate-900">

                <div className="text-center">
                  <Award className="mx-auto mb-4 h-14 w-14 text-blue-600" />

                  <h2 className="text-2xl font-bold">
                    Computer Certificate
                  </h2>

                  <p className="mt-2 text-slate-500">
                    Online Examination
                  </p>
                </div>

                <div className="mt-8 space-y-5">

                  <div className="flex items-center justify-between rounded-xl bg-slate-100 p-4">
                    <div className="flex items-center gap-3">
                      <IndianRupee className="text-green-600" />
                      <span>Exam Fee</span>
                    </div>

                    <strong>₹199</strong>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-slate-100 p-4">
                    <div className="flex items-center gap-3">
                      <BookOpen className="text-blue-600" />
                      <span>Questions</span>
                    </div>

                    <strong>50 MCQ</strong>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-slate-100 p-4">
                    <div className="flex items-center gap-3">
                      <Clock3 className="text-orange-600" />
                      <span>Duration</span>
                    </div>

                    <strong>60 Minutes</strong>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-slate-100 p-4">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="text-indigo-600" />
                      <span>Certificate</span>
                    </div>

                    <strong>Digital</strong>
                  </div>

                </div>

                <Link
                  href="/register"
                  className="mt-8 block rounded-xl bg-blue-600 py-4 text-center font-semibold text-white transition hover:bg-blue-700"
                >
                  Start Registration
                </Link>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}