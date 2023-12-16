import { Inter } from 'next/font/google'
import './globals.css'
import NavigationBar from '@/components/NavigationBar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CementEase',
  description: 'Welcome to CementEase, the fastest way to get any amount of cement delivered to your door.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationBar />
        <main className='w-full'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
