import Link from "next/link";
import {
  User,
  CreditCard,
  FileQuestion,
  Award,
  Download,
  LogOut,
  ArrowRight,
} from "lucide-react";

export default function DashboardPage() {
  const student = {
    name: "Student Name",
    email: "student@example.com",
    status: "Registered",
    payment: "Pending",
  };

  return (
    <main className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-700 p-8 text-white md:flex-row md:items-center md:justify-between">

          <div>
            <h1 className="text-4xl font-bold">
              Welcome, {student.name}
            </h1>

            <p className="mt-2 text-blue-100">
              {student.email}
            </p>
          </div>

          <Link
            href="/"
            className="rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-slate-100"
          >
            Home
          </Link>

        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-3xl bg-white p-6 shadow">
            <User className="mb-4 h-10 w-10 text-blue-600" />

            <h3 className="text-xl font-bold">
              Profile
            </h3>

            <p className="mt-2 text-slate-600">
              {student.status}
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow">
            <CreditCard className="mb-4 h-10 w-10 text-green-600" />

            <h3 className="text-xl font-bold">
              Payment
            </h3>

            <p className="mt-2 text-orange-600 font-semibold">
              {student.payment}
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow">
            <FileQuestion className="mb-4 h-10 w-10 text-purple-600" />

            <h3 className="text-xl font-bold">
              Examination
            </h3>

            <p className="mt-2 text-slate-600">
              50 Questions
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow">
            <Award className="mb-4 h-10 w-10 text-yellow-500" />

            <h3 className="text-xl font-bold">
              Certificate
            </h3>

            <p className="mt-2 text-slate-600">
              Not Available
            </p>
          </div>

        </div>

        {/* Actions */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">

          {/* Start Exam */}
          <div className="rounded-3xl bg-white p-8 shadow">

            <h2 className="text-2xl font-bold">
              Online Examination
            </h2>

            <p className="mt-3 text-slate-600">
              Complete the payment to unlock your examination.
            </p>

            <Link
              href="/payment"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Pay ₹199

              <ArrowRight className="h-5 w-5" />
            </Link>

          </div>

          {/* Certificate */}
          <div className="rounded-3xl bg-white p-8 shadow">

            <h2 className="text-2xl font-bold">
              Digital Certificate
            </h2>

            <p className="mt-3 text-slate-600">
              Your certificate will be available after successfully passing the examination.
            </p>

            <button
              disabled
              className="mt-6 inline-flex cursor-not-allowed items-center gap-2 rounded-xl bg-slate-300 px-6 py-3 font-semibold text-slate-600"
            >
              <Download className="h-5 w-5" />

              Download Certificate
            </button>

          </div>

        </div>

        {/* Logout */}
        <div className="mt-10">

          <button className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700">

            <LogOut className="h-5 w-5" />

            Logout

          </button>

        </div>

      </div>
    </main>
  );
}