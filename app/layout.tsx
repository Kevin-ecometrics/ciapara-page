import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Enrique Ciapara — Pintor',
  description:
    'Estudio de pintura y grabado en Tijuana, Baja California. Arte contemporáneo desde 2001.',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${geistSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
