import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  variable: "--font-space-mono",
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
  openGraph: {
    title: "[VIBHANSH'S INFORMATION PARADOX]",
    description: "[WELCOME TO LORD'S PORTFOLIO]",
    url: 'https://vibhansh.vercel.app',
    siteName: "[VIBHANSH'S INFORMATION PARADOX]",
    images: [
      {
        url: '/icon.jpg',
        width: 1200,
        height: 630,
        alt: 'Wormhole Portal - Vibhansh Gupta Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "[VIBHANSH'S INFORMATION PARADOX]",
    description: "[WELCOME TO LORD'S PORTFOLIO]",
    images: ['/icon.jpg'],
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
      className={`${spaceMono.variable} h-full antialiased`}
    >
      <body className={`${spaceMono.className} min-h-full flex flex-col`}>{children}</body>
    </html>
  );
}
