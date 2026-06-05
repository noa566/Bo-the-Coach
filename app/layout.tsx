import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Bo Coaching — Coaching mental et formation à Genève",
    template: "%s | Bo Coaching",
  },
  description:
    "Boris Lazzarotto, coach professionnel et formateur à Genève. Coaching personnel, coaching d'équipe et formations pour révéler votre potentiel.",
  keywords: [
    "coaching",
    "coach mental",
    "coaching Genève",
    "coaching d'équipe",
    "formation",
    "Boris Lazzarotto",
    "développement personnel",
  ],
  authors: [{ name: "Boris Lazzarotto" }],
  openGraph: {
    title: "Bo Coaching — Coaching mental et formation à Genève",
    description:
      "Coaching personnel et d'équipe, formations pour révéler votre potentiel.",
    locale: "fr_CH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
