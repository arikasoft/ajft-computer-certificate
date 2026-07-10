"use client";

import Link from "next/link";
import {
  Award,
  BadgeCheck,
  CalendarDays,
  QrCode,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export default function CertificatePreview() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Digital Certificate
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            QR Verified Computer Certificate
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            After successfully passing the examination, candidates can
            instantly download a digitally verifiable certificate.
          </p>

        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left */}

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">

            <div className="rounded-2xl border-4 border-blue-600 bg-gradient-to-br from-white to-slate-100 p-10">

              <div className="text-center">

                <Award className="mx-auto h-16 w-16 text-yellow-500" />

                <h2 className="mt-5 text-3xl font-bold text-slate-900">
                  Certificate of Achievement
                </h2>

                <p className="mt-2 text-slate-600">
                  Anand Jivan Foundation Trust
                </p>

              </div>

              <div className="mt-10 space-y-4 text-center">

                <p className="text-slate-500">
                  This is to certify that
                </p>

                <h3 className="text-3xl font-bold text-blue-700">
                  Student Name
                </h3>

                <p className="text-slate-600">
                  has successfully completed the
                </p>

                <h4 className="text-2xl font-semibold">
                  Computer Certificate Examination
                </h4>

              </div>

              <div className="mt-12 flex items-center justify-between border-t pt-8">

                <div>

                  <CalendarDays className="mb-2 h-6 w-6 text-blue-600" />

                  <p className="text-xs text-slate-500">
                    Issue Date
                  </p>

                  <p className="font-semibold">
                    DD/MM/YYYY
                  </p>

                </div>

                <div className="text-center">

                  <QrCode className="mx-auto h-20 w-20 text-slate-700" />

                  <p className="mt-2 text-xs text-slate-500">
                    QR Verification
                  </p>

                </div>

                <div className="text-right">

                  <BadgeCheck className="ml-auto mb-2 h-6 w-6 text-green-600" />

                  <p className="text-xs text-slate-500">
                    Authorized Sign
                  </p>

                  <p className="font-semibold">
                    AJFT
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Right */}

          <div>

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Certificate Features
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900">
              Secure & Easy Verification
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Every successful candidate receives a QR-enabled digital
              certificate that can be verified online anytime.
            </p>

            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow">

                <ShieldCheck className="h-10 w-10 text-green-600" />

                <div>

                  <h4 className="font-bold">
                    Secure Certificate
                  </h4>

                  <p className="text-slate-600">
                    Digitally generated certificate.
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow">

                <QrCode className="h-10 w-10 text-blue-600" />

                <div>

                  <h4 className="font-bold">
                    QR Code Verification
                  </h4>

                  <p className="text-slate-600">
                    Verify certificate online instantly.
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow">

                <BadgeCheck className="h-10 w-10 text-purple-600" />

                <div>

                  <h4 className="font-bold">
                    Lifetime Valid
                  </h4>

                  <p className="text-slate-600">
                    Permanent online verification support.
                  </p>

                </div>

              </div>

            </div>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/register"
                className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                Apply Now
              </Link>

              <Link
                href="/verify"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-8 py-4 font-semibold transition hover:bg-slate-100"
              >
                Verify Certificate
                <ArrowRight className="h-5 w-5" />
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}