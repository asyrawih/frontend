import './globals.css'
import type { Metadata } from 'next'
import { Providers } from './providers'
import Nav from '@/components/navbar'

export const metadata: Metadata = {
  title: 'BacaKomik',
  description: 'Read Comics as Free Like What You Feel',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en" className='dark'>
      <body>
        <Providers>
          <Nav />
          <main className='container mx-auto p-3'>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
