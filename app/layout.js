import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import SpeedDial from './components/SpeedDial'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DEV SRIWARARAK รับเขียนโปรแกรม รับทำเว็บไซต์ SEO ขอนแก่น',
  description: 'รับเขียนโปรแกรม รับทำเว็บไซต์ seo ติดหน้าค้นหา Google ขอนแก่น สำหรับธุรกิจที่กำลังเติบโต เว็บขายของครบวงจร โดยโปรแกรมเมอร์มืออาชีพมากมาย',
  keywords : "รับเขียนโปรแกรม , รับทำเว็บไซต์ , รับเขียนโปรแกรม ขอนแก่น , รับทำเว็บไซต์ ขอนแก่น , รับทำเว็บไซต์ SEO ",

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
      <div className='bg-gray-100 w-full   '>
        <SpeedDial/>
      {children}
      </div>
        </body>
    </html>
  )
}
