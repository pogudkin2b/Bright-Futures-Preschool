import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bright Futures Preschool - Montessori-based International Preschool in Vake, Tbilisi",
  description: "Bright Futures Preschool - A warm, academic, play-based Montessori preschool in Vake, Tbilisi for children aged 18 months to 6 years. Founded in 2015.",
  keywords: "Montessori, preschool, Tbilisi, Vake, kindergarten, children, education, international, Georgia, AMI Montessori",
  openGraph: {
    title: "Bright Futures Preschool - Montessori International Preschool",
    description: "A warm, academic, play-based preschool for children aged 18 months to 6 years in Vake, Tbilisi",
    type: "website",
    locale: "en_US",
    alternateLocale: ["ru_RU", "ka_GE"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
