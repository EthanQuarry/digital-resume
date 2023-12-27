import type { Metadata } from 'next'
import './globals.css'
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
      <Header />
      <main className="flex flex-col bg-muted min-h-[92vh] items-center justify-between">
        {children}
      </main>
      <Footer />
    </>
  )
}
