import './globals.css'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ModalProivder } from '@/providers/modal-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Admin Dashboard',
  description: 'Admin Dashboard',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang='es'>
        <body className={inter.className}>
          <ModalProivder />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
