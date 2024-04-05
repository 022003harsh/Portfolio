import './globals.css'
import { Inter } from 'next/font/google'
import { Roboto } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'Harsh portfolio',
  description: 'Portfolio of a WebDeveloper',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <link href="https://fonts.googleapis.com/css2?family=Edu+SA+Beginner:wght@400..700&family=Lobster&display=swap" rel="stylesheet"></link>
    </html>
  )
}