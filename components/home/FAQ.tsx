"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is the examination fee?",
    answer:
      "The Computer Certificate Examination fee is ₹199 only.",
  },
  {
    question: "How many questions will be asked?",
    answer:
      "The examination contains 50 Multiple Choice Questions (MCQs).",
  },
  {
    question: "What is the exam duration?",
    answer:
      "You will get 60 minutes to complete the examination.",
  },
  {
    question: "What are the passing marks?",
    answer:
      "You must score at least 60% marks to qualify for the certificate.",
  },
  {
    question: "When will I get my result?",
    answer:
      "The result is generated instantly after submitting the examination.",
  },
  {
    question: "How can I download my certificate?",
    answer:
      "If you pass the examination, you can download your digital certificate immediately from your dashboard.",
  },
  {
    question: "Is the certificate verifiable?",
    answer:
      "Yes. Every certificate contains a unique QR Code and Certificate Number for online verification.",
  },
  {
    question: "Can I take the exam on mobile?",
    answer:
      "Yes. The entire examination portal is fully responsive and works on desktop, tablet and mobile devices.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-6">

        <div className="mb-14 text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Frequently Asked Questions
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Have Questions?
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Everything you need to know about the AJFT Computer Certificate Examination.
          </p>

        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >

                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-slate-200 px-6 pb-6 pt-5">

                    <p className="leading-7 text-slate-600">
                      {faq.answer}
                    </p>

                  </div>
                )}

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}