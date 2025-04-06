import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import LoaderWrapper from '@/components/LoaderWrapper'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300`}>
        <LoaderWrapper>
          <Navigation />
          {children}
        </LoaderWrapper>
      </body>
    </html>
  )
} 