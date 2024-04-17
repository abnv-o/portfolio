import './globals.css'
import { Inter } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Abhinav O',
  description: 'Portfolio of Abhinav O',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <SpeedInsights/>
      <Analytics/>
      </body>
    </html>
  )
}
