import type { Metadata } from 'next'
import SideNav from '@/app/ui/SideNav'
import { inter } from '@/app/ui/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Fantasy Haven',
    default: 'Fantasy Haven',
  },
  description: 'Play and Win real money',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#f0f8ff]`}>
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64">
            <SideNav />
          </div>
          <div className="bg-white flex-grow p-4 pt-0 mt-0 md:mt-4 md:overflow-y-auto">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
