import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Script from "next/script";
import ThemeBackground from "@/components/ThemeBackground";
import WallpaperBackground from "@/components/WallpaperBackground";
import SubscriptionOverlay from "@/components/SubscriptionOverlay";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "株式会社 福源屋｜大阪の美装工事・ビルメンテナンス・内装工事",
  description:
    "大阪の美装工事・ビルメンテナンス・内装工事なら株式会社福源屋へ。清掃・ハウスクリーニング・定期・日常清掃や現場作業員派遣まで対応。",
  openGraph: {
    title: "株式会社 福源屋｜大阪の美装工事・ビルメンテナンス・内装工事",
    description:
      "大阪府交野市・大阪市ほか関西一円で、美装工事・ビルメンテナンス・清掃のご相談なら福源屋へ。",
    url: "https://fukugenyaguide225-homepage.vercel.app/",
    siteName: "株式会社 福源屋",
    images: [
      {
        url: "https://fukugenyaguide225-homepage.vercel.app/opgLogo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteKey = "fukugenyaguide225";

  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        {/* ファビコン */}
        <link rel="icon" href="/favicon.ico?v=2" />
        {/* ロゴ画像事前読み込み */}
        <link
          rel="preload"
          as="image"
          href="/opgLogo.png"
          type="image/png"
        />
        <meta name="theme-color" content="#ffffff" />
        {/* OGPタグ */}
        <meta property="og:title" content="株式会社 福源屋｜大阪の美装工事・ビルメンテナンス・内装工事" />
        <meta property="og:description" content="大阪府交野市・大阪市ほか関西一円で、美装工事・ビルメンテナンス・清掃のご相談なら福源屋へ。" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fukugenyaguide225-homepage.vercel.app/" />
        <meta property="og:site_name" content="株式会社 福源屋" />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:image" content="https://fukugenyaguide225-homepage.vercel.app/logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        {/* Twitterカード */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="株式会社 福源屋｜大阪の美装工事・ビルメンテナンス・内装工事" />
        <meta name="twitter:description" content="大阪府交野市・大阪市ほか関西一円で、美装工事・ビルメンテナンス・清掃のご相談なら福源屋へ。" />
        <meta name="twitter:image" content="https://fukugenyaguide225-homepage.vercel.app/logo.png" />
      </head>

      <body className="relative min-h-screen">
        <SubscriptionOverlay siteKey={siteKey} />
        <WallpaperBackground />
        <ThemeBackground />
        <Header />
        {children}
        {/* 構造化データ（JSON-LD、Google検索用） */}
        <Script
          id="ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "株式会社 福源屋",
            description:
              "大阪の美装工事・ビルメンテナンス・内装工事・清掃なら株式会社福源屋へ。2002年創業、関西一円対応。",
            telephone: "072-824-9569",
            faxNumber: "06-6537-4903",
            url: "https://fukugenyaguide225-homepage.vercel.app/",
            address: {
              "@type": "PostalAddress",
              postalCode: "576-0016",
              addressRegion: "大阪府",
              addressLocality: "交野市",
              streetAddress: "星田西5-17-8 カバポプラザ203",
            },
            founder: "中井 弘也",
            employee: "13名（アルバイト含む）",
            openingHours: "09:00-18:00",
            image: "https://fukugenyaguide225-homepage.vercel.app/logo.png",
            sameAs: [],
          })}
        </Script>
      </body>
    </html>
  );
}
