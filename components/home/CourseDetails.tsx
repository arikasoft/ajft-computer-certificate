"use client";

import {
  IndianRupee,
  FileQuestion,
  Clock3,
  Trophy,
  Languages,
  BadgeCheck,
} from "lucide-react";

const details = [
  {
    icon: IndianRupee,
    title: "Exam Fee",
    value: "₹199 Only",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: FileQuestion,
    title: "Questions",
    value: "50 MCQ",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Clock3,
    title: "Duration",
    value: "60 Minutes",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: Trophy,
    title: "Passing Marks",
    value: "60%",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: Languages,
    title: "Language",
    value: "Hindi & English",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: BadgeCheck,
    title: "Certificate",
    value: "Digital + QR Verified",
    color: "bg-cyan-100 text-cyan-600",
  },
];

export default function CourseDetails() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Course Details
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Computer Certificate Examination
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Join the AJFT Computer Certificate Examination and receive a
            digitally verifiable certificate after successfully passing
            the examination.
          </p>

        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {details.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-3xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${item.color}`}
                >
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-lg font-semibold text-blue-600">
                  {item.value}
                </p>
              </div>
            );
          })}

        </div>

        {/* Bottom Info */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-700 p-10 text-center text-white shadow-xl">

          <h3 className="text-3xl font-bold">
            Start Your Certification Journey Today
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Register now, pay only ₹199, attempt the online examination,
            receive your instant result, and download your QR verified
            digital certificate.
          </p>

          <a
            href="/register"
            className="mt-8 inline-flex rounded-xl bg-white px-8 py-4 text-lg font-bold text-blue-700 transition hover:bg-slate-100"
          >
            Apply Now
          </a>

        </div>

      </div>
    </section>
  );
}