import './globals.css'
import { Inter } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Abhinav O',
  description: 'Abhinav O - Web Developer Portfolio** |  Portfolio of Abhinav O, an accomplished web developer and tech enthusiast. Witness stunning web designs, innovative projects , and discover how Abhinav passion for technology translates into impactful solutions.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="fmt08mX7H4SGXS1NXZ4TF0JgF7M0awTax-1stcm58g4" />
      <body className={inter.className}>{children}
      <SpeedInsights/>
      <Analytics/>
      </body>
    </html>
  )
}
