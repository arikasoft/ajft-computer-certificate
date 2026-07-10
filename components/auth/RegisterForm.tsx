"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { supabase } from "@/lib/supabase/client";

export default function RegisterForm() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);
    setError("");
    setMessage("");

    const form = new FormData(e.currentTarget);

    const fullName = String(form.get("fullName"));
    const mobile = String(form.get("mobile"));
    const email = String(form.get("email"));
    const state = String(form.get("state"));
    const district = String(form.get("district"));
    const password = String(form.get("password"));
    const confirmPassword = String(
      form.get("confirmPassword")
    );

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,

      options: {
        data: {
          full_name: fullName,
          mobile,
          state,
          district,
        },
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    setMessage(
      "Registration successful. Please verify your email."
    );

    setLoading(false);

    setTimeout(() => {
      router.push("/login");
    }, 2500);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      {error && (
        <div className="rounded-xl bg-red-100 p-3 text-red-600">
          {error}
        </div>
      )}

      {message && (
        <div className="rounded-xl bg-green-100 p-3 text-green-700">
          {message}
        </div>
      )}

      <div>
        <label className="mb-2 block font-medium">
          Full Name
        </label>

        <input
          name="fullName"
          required
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Mobile Number
        </label>

        <input
          name="mobile"
          required
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Email
        </label>

        <input
          type="email"
          name="email"
          required
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium">
            State
          </label>

          <input
            name="state"
            required
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            District
          </label>

          <input
            name="district"
            required
            className="w-full rounded-xl border p-3"
          />
        </div>
      </div>

      <div className="relative">
        <label className="mb-2 block font-medium">
          Password
        </label>

        <input
          type={showPassword ? "text" : "password"}
          name="password"
          required
          className="w-full rounded-xl border p-3 pr-12"
        />

        <button
          type="button"
          onClick={() =>
            setShowPassword(!showPassword)
          }
          className="absolute right-4 top-11"
        >
          {showPassword ? (
            <EyeOff size={20} />
          ) : (
            <Eye size={20} />
          )}
        </button>
      </div>

      <div className="relative">
        <label className="mb-2 block font-medium">
          Confirm Password
        </label>

        <input
          type={
            showConfirmPassword ? "text" : "password"
          }
          name="confirmPassword"
          required
          className="w-full rounded-xl border p-3 pr-12"
        />

        <button
          type="button"
          onClick={() =>
            setShowConfirmPassword(
              !showConfirmPassword
            )
          }
          className="absolute right-4 top-11"
        >
          {showConfirmPassword ? (
            <EyeOff size={20} />
          ) : (
            <Eye size={20} />
          )}
        </button>
      </div>

      <label className="flex items-center gap-2">
        <input type="checkbox" required />

        <span>
          I agree to the Terms & Conditions
        </span>
      </label>

      <button
        disabled={loading}
        className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white"
      >
        {loading
          ? "Creating Account..."
          : "Create Account"}
      </button>
    </form>
  );
}