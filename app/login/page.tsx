import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import LoginForm from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Student Login",
};

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-600 p-6">

        <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">

          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-blue-600"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          <h1 className="text-3xl font-bold text-slate-900">
            Student Login
          </h1>

          <p className="mt-2 text-slate-500">
            Login to continue your examination.
          </p>

          <div className="mt-8">
            <LoginForm />
          </div>

          <div className="mt-6 text-center text-sm">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-blue-600"
            >
              Register
            </Link>
          </div>

        </div>

      </section>
    </main>
  );
}