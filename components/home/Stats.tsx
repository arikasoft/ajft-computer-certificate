"use client";

import {
  Users,
  FileQuestion,
  Clock3,
  Award,
} from "lucide-react";

const stats = [
  {
    title: "Students Enrolled",
    value: "10,000+",
    icon: Users,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    title: "Questions",
    value: "50 MCQ",
    icon: FileQuestion,
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    title: "Exam Duration",
    value: "60 Min",
    icon: Clock3,
    color: "text-orange-600",
    bg: "bg-orange-100",
  },
  {
    title: "Instant Result",
    value: "100%",
    icon: Award,
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
];

export default function Stats() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-3xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${item.bg}`}
                >
                  <Icon className={`h-8 w-8 ${item.color}`} />
                </div>

                <h2 className="text-3xl font-bold text-slate-900">
                  {item.value}
                </h2>

                <p className="mt-2 text-slate-500">
                  {item.title}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}