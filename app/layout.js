import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DEV SRIWARARAK รับเขียนโปรแกรมขอนแก่น',
  description: 'รับเขียนโปรแกรมขอนแก่น รับทำเว็บไซต์ seo ขอนแก่น รับออกแบบกราฟฟิก เว็บขายของครบวงจร',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
      <div className='bg-gray-100 w-full   '>
      {children}
      </div>
        </body>
    </html>
  )
}
