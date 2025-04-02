import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import SpeedDial from "./components/SpeedDial";
import Footer from "./components/Footer";
import Script from "next/script";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Thai Business Mate รับเขียนโปรแกรม รับทำเว็บไซต์ SEO ขอนแก่น",
  description:
    "รับเขียนโปรแกรม ทำเว็บไซต์ SEO ขอนแก่น ดูแลการตลาดให้กับเว็บไซต์บริษัท ค้นหาเจอบน Google ครบวงจร พัฒนาซอฟต์แวร์สำหรับธุรกิจที่กำลังเติบโตแบบครบวงจร ติดต่อ 085-003-2649",
  keywords:
    "รับเขียนโปรแกรม ทำเว็บไซต์ SEO ขอนแก่น,รับทำเว็บไซต์ ขอนแก่น,รับเขียนโปรแกรม ขอนแก่น,ดูแล seo รายเดือน,รับทำเว็บไซต์ บริษัท",
  robots: "index, follow",
  alternates: {
    canonical: "https://web.thaibusinessmate.com",
  },
  openGraph: {
    title: "Thai Business Mate รับเขียนโปรแกรม รับทำเว็บไซต์ SEO ขอนแก่น",
    description:
      "รับเขียนโปรแกรม ทำเว็บไซต์ SEO ขอนแก่น ดูแลการตลาดให้กับเว็บไซต์บริษัท ค้นหาเจอบน Google ครบวงจร พัฒนาซอฟต์แวร์สำหรับธุรกิจที่กำลังเติบโตแบบครบวงจร ติดต่อ 085-003-2649",
    url: "https://web.thaibusinessmate.com",
    images: [
      {
        url: "https://web.thaibusinessmate.com/images/review_3.webp",
        width: 800,
        height: 600,
        alt: "รับเขียนโปรแกรม ทำเว็บไซต์ SEO ขอนแก่น",
      },
    ],
    siteName: "รับเขียนโปรแกรม ทำเว็บไซต์ SEO ขอนแก่น",
    locale: "th_TH",
    type: "website",
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
      name: "เพิ่มความปลอดภัย ทุกอย่างตรวจสอบได้",
      acceptedAnswer: {
        "@type": "Answer",
        text: "โปรแกรมช่วยในการจัดการความเสี่ยงและความปลอดภัยของธุรกิจ ไม่ว่าจะเป็นการจัดการข้อมูลลูกค้าที่อยู่ในระบบ หรือตรวจสอบกระแสข้อมูลภายในองค์กรของตัวเอง ได้อย่างปลอดภัย",
      },
    },
  ],
  headline: "รับเขียนโปรแกรม รับทำเว็บไซต์ SEO ติดอันดับค้นหา Google ขอนแก่น",
  description:
    "รับเขียนโปรแกรม ทำเว็บไซต์ SEO ขอนแก่น ดูแลการตลาดให้กับเว็บไซต์บริษัท ค้นหาเจอบน Google ครบวงจร พัฒนาซอฟต์แวร์สำหรับธุรกิจที่กำลังเติบโตแบบครบวงจร ติดต่อ 085-003-2649",
  author: {
    "@type": "Person",
    name: "thai business mate",
    url: "https://web.thaibusinessmate.com/",
  },
  image: "https://web.thaibusinessmate.com/images/FAQ.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>
        <ToastContainer autoClose={5000} theme="colored" />

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
      </body> */}
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body className={inter.className}>
        <ToastContainer autoClose={5000} theme="colored" />

        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-0LJYE9NGRZ"
        />
        <Script strategy="lazyOnload">
          {`
           window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0LJYE9NGRZ');
          `}
        </Script>

        {/* Scema */}
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <Header />

        <div className="w-full mt-24 md:mt-36">
          <SpeedDial />
          {children}
        </div>

        <Footer />

      </body>
    </html>
  );
}
