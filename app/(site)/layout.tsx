import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Resume | Michael Kamilos',
  description: 'Software Engineer and Full-stack Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Header />
        <main className="flex flex-col bg-muted min-h-[92vh] items-center justify-between">
          {children}
        </main>
        <Footer />
      </ThemeProvider>

      <Analytics />
      <SpeedInsights />
    </>
  )
}
