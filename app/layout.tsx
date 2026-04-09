import type { Metadata } from "next";
import "./globals.css";
import "./style.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "(주)남광유압",
  description: "유압 실린더, 유압 유니트, 기타 유압 기기 개발 및 생산 전문 기업",
  keywords: [
  "유압",
  "설비",
  "유압실린더",
  "유압유니트",
  "남광유압",
],
  openGraph: {
    title: '(주)남광유압',
    description: '유압 시스템 및 유압 기기 개발과 생산 전문 기업',
    url: 'https://www.nk-hyd.co.kr/',
    siteName: '(주)남광유압',
    images: [
      {
        url: 'https://www.nk-hyd.co.kr/images/og_image.jpg',
        width: 1200,
        height: 630,
        alt: '(주)남광유압',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  verification: {
    other: {
      'naver-site-verification': '18b0b2bb89de93c0d2aa7103490e917737076864',
    }
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
