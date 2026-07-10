import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://ajftrust.in"),

  title: {
    default: "AJFT Computer Certificate Portal",
    template: "%s | AJFT Computer Certificate Portal",
  },

  description:
    "Official Computer Certificate Examination Portal by Anand Jivan Foundation Trust. Register online, pay ₹199, attempt 50 MCQs, get instant results and download your digital certificate.",

  keywords: [
    "AJFT",
    "Anand Jivan Foundation Trust",
    "Computer Certificate",
    "Online Exam",
    "Computer Course",
    "Digital Certificate",
    "Computer Exam",
    "Certificate Verification",
  ],

  authors: [
    {
      name: "Anand Jivan Foundation Trust",
    },
  ],

  creator: "Anand Jivan Foundation Trust",

  publisher: "Anand Jivan Foundation Trust",

  applicationName: "AJFT Computer Certificate Portal",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "AJFT Computer Certificate Portal",
    description:
      "Official Computer Certificate Examination Portal by Anand Jivan Foundation Trust.",
    siteName: "AJFT Computer Certificate Portal",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AJFT Computer Certificate Portal",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AJFT Computer Certificate Portal",
    description:
      "Official Computer Certificate Examination Portal",
    images: ["/images/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">

        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <Footer />

      </body>
    </html>
  );
}