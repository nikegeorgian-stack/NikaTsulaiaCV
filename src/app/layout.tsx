import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nika Tsulaia | IT Specialist & Digital Solutions Engineer",
  description: "IT specialist and digital solutions engineer in Tbilisi. Business dashboards, web tools, product listings, visual content, networks, CCTV and POS systems.",
  keywords: ["IT specialist", "dashboard developer", "Excel", "Google Sheets", "product listings", "photo editing", "video editing", "Tbilisi", "Georgia", "networks", "CCTV", "POS systems", "automation"],
  authors: [{ name: "Nika Tsulaia" }],
  openGraph: {
    title: "Nika Tsulaia | IT Specialist",
    description: "Business dashboards, web tools, product listings, visual content and IT infrastructure.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
