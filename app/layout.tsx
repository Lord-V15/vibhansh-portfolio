import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "[VIBHANSH'S INFORMATION PARADOX]",
  description: "[WELCOME TO LORD'S PORTFOLIO]",
  icons: {
    icon: [
      { url: '/icon.jpg' },
      { url: '/icon.jpg', sizes: '32x32', type: 'image/jpeg' },
      { url: '/icon.jpg', sizes: '16x16', type: 'image/jpeg' },
    ],
    apple: [
      { url: '/icon.jpg' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
