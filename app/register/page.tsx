import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  ShieldCheck,
  Clock3,
  FileQuestion,
} from "lucide-react";

import RegisterForm from "@/components/auth/RegisterForm";

export const metadata: Metadata = {
  title: "Student Registration",
  description:
    "Register for AJFT Computer Certificate Examination.",
};

const features = [
  {
    icon: BadgeCheck,
    title: "Digital Certificate",
    description: "QR Verified Certificate",
  },
  {
    icon: FileQuestion,
    title: "50 Questions",
    description: "Multiple Choice Questions",
  },
  {
    icon: Clock3,
    title: "60 Minutes",
    description: "Online Examination",
  },
  {
    icon: ShieldCheck,
    title: "Secure Exam",
    description: "Safe & Reliable Platform",
  },
];

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-600" />

        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-14">

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-white backdrop-blur hover:bg-white/20"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          <div className="mt-12 grid gap-12 lg:grid-cols-2">

            {/* Left */}

            <div className="text-white">

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
                Registration Open
              </span>

              <h1 className="mt-6 text-5xl font-extrabold leading-tight">
                Computer Certificate Examination
              </h1>

              <p className="mt-6 max-w-xl text-lg text-blue-100 leading-8">
                Register today for the AJFT Computer Certificate
                Examination and receive a QR Verified Digital Certificate
                after successfully passing the examination.
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-2">

                {features.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur"
                    >
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white/20">
                        <Icon className="h-7 w-7" />
                      </div>

                      <h3 className="text-lg font-bold">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-blue-100">
                        {item.description}
                      </p>
                    </div>
                  );
                })}

              </div>

            </div>

            {/* Right */}

            <div className="rounded-3xl bg-white p-8 shadow-2xl">

              <div className="mb-8 text-center">

                <h2 className="text-3xl font-bold text-slate-900">
                  Student Registration
                </h2>

                <p className="mt-2 text-slate-500">
                  Fill in your details to create your account.
                </p>

              </div>

              <RegisterForm />

              <div className="mt-8 border-t pt-6 text-center text-sm text-slate-500">

                Already have an account?{" "}

                <Link
                  href="/login"
                  className="font-semibold text-blue-600 hover:underline"
                >
                  Login Here
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>
    </main>
  );
}