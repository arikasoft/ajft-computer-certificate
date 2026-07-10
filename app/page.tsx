import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Features from "@/components/home/Features";
import CourseDetails from "@/components/home/CourseDetails";
import ExamProcess from "@/components/home/ExamProcess";
import CertificatePreview from "@/components/home/CertificatePreview";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <CourseDetails />
      <ExamProcess />
      <CertificatePreview />
      <FAQ />
      <CTA />
    </>
  );
}