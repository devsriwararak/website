import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "รีวิวหนัง สปอยหนัง netflix มาใหม่ หนังเข้าโรง  ",
  description: "รีวิวหนัง สปอยหนัง netflix มาใหม่ หนังเกาหลี หนังจีน หนังฝรั่ง หนังผี รีวิวจริงจากนักดูหนังมืออาชีพ ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
        {children}
        </body>
    </html>
  );
}
