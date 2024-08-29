import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tawananyasha Mukoriwo  | Software Engineer",
  generator: 'Tawananyasha.com',
  applicationName: 'Tawananyasha.com',
  keywords: ['Tawananyasha Mukoriwo', 'Tawananyasha', 'Software Engineer', 'Tawana State'],
  authors: [{ name: 'Tawananyasha Mukoriwo',url: 'https://tawananyasha.com' }],
  creator: 'Tawananyasha Mukoriwo',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/img/logo-icon-dark.png',
    shortcut: '/img/logo-icon-dark.png',
    apple: '/img/logo-icon-dark.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/img/logo-icon-dark.png',
    },
  },
  openGraph: {
    images: '/og.png',
    title: "Tawananyasha Mukoriwo  | Software Engineer",
    description: "Welcome to my corner of the internet! I’m Tawananyasha Mukoriwo, a young and passionate programmer with roots in physics and a love for solving real-world problems through code. I’m currently studying Software Engineering at HIT, focusing now on Machine Learning and hardware programming.",
    url: 'https://tawananyasha.com',
    siteName: 'Tawananyasha Mukoriwo',
  },
  description: "Welcome to my corner of the internet! I’m Tawananyasha Mukoriwo, a young and passionate programmer with roots in physics and a love for solving real-world problems through code. I’m currently studying Software Engineering at HIT, focusing now on Machine Learning and hardware programming.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
