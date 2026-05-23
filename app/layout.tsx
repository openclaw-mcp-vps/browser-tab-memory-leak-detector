import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tab Memory Leak Detector – Find Memory-Leaking Browser Tabs Automatically',
  description: 'Chrome extension that monitors tab memory usage and alerts when tabs are consuming excessive RAM. Perfect for developers, power users, and remote workers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="599a4103-23a8-43f9-9018-ab21cd0676e6"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
