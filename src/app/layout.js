import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import SpeedDial from "./components/SpeedDial";
import Footer from "./components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  manifest: "/manifest.json",
  title: {
    default: "DEV SRIWARARAK รับเขียนโปรแกรม รับทำเว็บไซต์ SEO ขอนแก่น",
    template: "%s - DEV SRIWARARAK รับเขียนโปรแกรม รับทำเว็บไซต์ SEO ขอนแก่น",
  },
  description:
    "รับเขียนโปรแกรม รับทำเว็บไซต์ seo ติดหน้าค้นหา Google ขอนแก่น สำหรับธุรกิจที่กำลังเติบโตดูแลแบบครบวงจร โดยโปรแกรมเมอร์มืออาชีพมากมาย",
  keywords:
    "รับเขียนโปรแกรม , รับทำเว็บไซต์ , รับเขียนโปรแกรม ขอนแก่น , รับทำเว็บไซต์ ขอนแก่น , รับทำเว็บไซต์ SEO ",
  openGraph: {
    images:
      "https://devsriwararak.com/wp-content/uploads/2024/08/รับทำเว็บไซต์-ขอนแก่น-1.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "โปรแกรม จะช่วยเพิ่มประสิทธิภาพในการทำงาน มากขึ้น จริงหรือไม่ ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "โปรแกรม ที่ช่วยเพิ่มประสิทธิภาพในการทำงาน โปรแกรมช่วยให้ทุกอย่างทำงานแบบอัตโนมัติ และเพิ่มประสิทธิภาพในการทำงานของธุรกิจ ไม่ว่าจะเป็นการจัดการข้อมูลลูกค้า การบริหารจัดการคลังสินค้า หรือกระบวนการธุรกิจอื่น ๆ อยากมืออาชีพ 100%",
      },
    },
    {
      "@type": "Question",
      name: "ช่วยวิเคราะห์ข้อมูลให้ถูกต้อง และแม่นยำ ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ช่วยคุณวิเคราะห์ข้อมูลต่างๆ ตามที่ตั้งโปรแกรมไว้ ทำให้รู้จุดอ่อน จุดแข็ง และส่วนที่ต้องปรับปรุง เพื่อช่วยในการตัดสินใจทางธุรกิจ เช่น การทำนายแนวโน้มตลาด การวิเคราะห์ผลประกอบการ เป็นต้น",
      },
    },
    {
      "@type": "Question",
      name: "พัฒนาผลิตภัณฑ์และบริการให้ดีขึ้น",
      acceptedAnswer: {
        "@type": "Answer",
        text: "โปรแกรมช่วยในกระบวนการวิจัยและพัฒนาผลิตภัณฑ์ ทำให้ธุรกิจสามารถสร้างผลิตภัณฑ์และบริการใหม่ ๆ ที่ถูกต้องและแม่นยำในการควบคุม และการผลิต มีคุณภาพ และตอบสนองต่อความต้องการของลูกค้ามากขึ้น",
      },
    },
    {
      "@type": "Question",
      name: "เพิ่มความปลอดภัย ทุกอย่างตรวจสอบได้xxxxx",
      acceptedAnswer: {
        "@type": "Answer",
        text: "โปรแกรมช่วยในการจัดการความเสี่ยงและความปลอดภัยของธุรกิจ ไม่ว่าจะเป็นการจัดการข้อมูลลูกค้าที่อยู่ในระบบ หรือตรวจสอบกระแสข้อมูลภายในองค์กรของตัวเอง ได้อย่างปลอดภัย",
      },
    },
  ],
  headline: "รับเขียนโปรแกรม รับทำเว็บไซต์ SEO ติดอันดับค้นหา Google ขอนแก่น",
  description:
    "dev sriwararak รับเขียนโปรแกรมเว็บแอพพลิเคชั่น ใช้งานออนไลน์ได้ทุกที่ และรับทำเว็บไซต์ SEO ติดอันดับค้นหา Google ที่ขอนแก่น",
  author: {
    "@type": "Person",
    name: "dev sriwararak",
    url: "https://web.devsriwararak.com",
  },
  image:
    "https://devsriwararak.com/wp-content/uploads/2024/01/%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B8%A1%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99-%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%97%E0%B8%B3%E0%B9%80%E0%B8%A7%E0%B9%87%E0%B8%9A%E0%B9%84%E0%B8%8B%E0%B8%95%E0%B9%8C-%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99-1.webp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9FEGTX90P2"
        />
        <Script strategy="lazyOnload">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9FEGTX90P2');
        `}
        </Script>

        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <Header />
        <div className=" w-full mt-24 md:mt-36    ">
          <SpeedDial />
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
