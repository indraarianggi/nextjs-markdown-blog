import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Footer, Header } from "@/components";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Next.js Markdown Blog",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto max-w-2xl px-6">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
