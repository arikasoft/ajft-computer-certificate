"use client";

import {
  UserPlus,
  CreditCard,
  FileCheck2,
  MonitorPlay,
  ClipboardCheck,
  Award,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Step 1",
    heading: "Register",
    description:
      "Create your student account using your name, mobile number and email address.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: CreditCard,
    title: "Step 2",
    heading: "Pay ₹199",
    description:
      "Complete the examination fee securely using the online payment gateway.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: FileCheck2,
    title: "Step 3",
    heading: "Verify Payment",
    description:
      "Your payment will be verified automatically and exam access will be enabled.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: MonitorPlay,
    title: "Step 4",
    heading: "Start Exam",
    description:
      "Attempt 50 multiple-choice questions within 60 minutes.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: ClipboardCheck,
    title: "Step 5",
    heading: "Instant Result",
    description:
      "Submit your answers and view your result immediately.",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    icon: Award,
    title: "Step 6",
    heading: "Download Certificate",
    description:
      "Successful candidates can instantly download a QR verified digital certificate.",
    color: "bg-cyan-100 text-cyan-600",
  },
];

export default function ExamProcess() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Examination Process
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Complete Your Certification in 6 Easy Steps
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Follow the simple online process from registration to
            certificate download.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl"
              >
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${step.color}`}
                >
                  <Icon className="h-8 w-8" />
                </div>

                <span className="text-sm font-semibold text-blue-600">
                  {step.title}
                </span>

                <h3 className="mt-2 text-2xl font-bold text-slate-900">
                  {step.heading}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {step.description}
                </p>

                {index !== steps.length - 1 && (
                  <ArrowRight className="absolute right-6 top-8 hidden h-6 w-6 text-slate-300 xl:block" />
                )}
              </div>
            );
          })}

        </div>

        <div className="mt-16 rounded-3xl bg-gradient-to-r from-green-600 to-emerald-600 p-10 text-center text-white shadow-xl">

          <h3 className="text-3xl font-bold">
            Ready to Start Your Exam?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-green-100">
            Register today, complete your payment, attempt the online
            examination and download your digital certificate instantly.
          </p>

          <a
            href="/register"
            className="mt-8 inline-flex rounded-xl bg-white px-8 py-4 text-lg font-bold text-green-700 transition hover:bg-slate-100"
          >
            Register Now
          </a>

        </div>

      </div>
    </section>
  );
}