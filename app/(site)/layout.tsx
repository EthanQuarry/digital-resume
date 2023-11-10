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
      <head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet"></link>
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
        <script type="text/javascript">window.onload = function() {{ Calendly.initBadgeWidget({ url: 'https://calendly.com/mikam-dev', text: 'Schedule a call', color: '#10b981', textColor: '#fafafa', branding: true }) }}</script>
      </head>
      <Header />
      {children}
      <Footer />
    </>
  )
}
