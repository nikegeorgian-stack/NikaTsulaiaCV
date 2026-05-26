import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nika Tsulaia | IT Specialist & Digital Solutions Engineer",
  description: "IT-специалист и инженер по внедрению цифровых решений. 50+ гостиниц под ключ, 30+ организаций на обслуживании, 80+ офисов.",
  keywords: ["IT specialist", "engineer", "Tbilisi", "Georgia", "networks", "CCTV", "POS systems", "automation", "photo editing", "video editing", "laptop repair", "phone repair", "hardware"],
  authors: [{ name: "Nika Tsulaia" }],
  openGraph: {
    title: "Nika Tsulaia | IT Specialist",
    description: "IT-специалист и инженер по внедрению цифровых решений",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
