
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Tempo — Private chat. No trace.",
    template: "%s | Tempo",
  },
  description:
    "Tempo is a private messaging experience designed for temporary conversations, greater control, and peace of mind.",
  applicationName: "Tempo",
  metadataBase: new URL("https://tempo.nexora.com.ng"),

  // Favicon and app icons
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },

  openGraph: {
    title: "Tempo — Private chat. No trace.",
    description: "Your conversations belong to you.",
    siteName: "Tempo",
    type: "website",
    url: "https://tempo.nexora.com.ng",
  },

  twitter: {
    card: "summary_large_image",
    title: "Tempo — Private chat. No trace.",
    description: "Your conversations belong to you.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
