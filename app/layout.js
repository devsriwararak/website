import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import SpeedDial from "./components/SpeedDial";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default :  "DEV SRIWARARAK รับเขียนโปรแกรม รับทำเว็บไซต์ SEO ขอนแก่น",
    template :  "%s - DEV SRIWARARAK รับเขียนโปรแกรม รับทำเว็บไซต์ SEO ขอนแก่น"
  },
  description:
    "รับเขียนโปรแกรม รับทำเว็บไซต์ seo ติดหน้าค้นหา Google ขอนแก่น สำหรับธุรกิจที่กำลังเติบโต เว็บขายของครบวงจร โดยโปรแกรมเมอร์มืออาชีพมากมาย",
  keywords:
    "รับเขียนโปรแกรม , รับทำเว็บไซต์ , รับเขียนโปรแกรม ขอนแก่น , รับทำเว็บไซต์ ขอนแก่น , รับทำเว็บไซต์ SEO ",
    openGraph: {
      images:
        "https://devsriwararak.com/wp-content/uploads/2024/01/%E0%B8%9C%E0%B8%A5%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B8%A1%E0%B8%A8%E0%B8%B2%E0%B8%A5%E0%B9%80%E0%B8%88%E0%B9%89%E0%B8%B2%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99.webp",
    },

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://devsriwararak.com/wp-content/uploads/2023/09/cropped-%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B8%A1-%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99-13.webp"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body className={inter.className}>
        <Header />
        <div className=" w-full    ">
          <SpeedDial />
          {children}
        </div>

        <Footer/>
      </body>
    </html>
  );
}
