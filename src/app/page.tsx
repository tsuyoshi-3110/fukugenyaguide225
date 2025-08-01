// src/app/(routes)/home/page.tsx

import type { Metadata } from "next";
import BackgroundVideo from "@/components/BackgroundVideo";
import TopFixedText from "@/components/TopFixedText";

export const metadata: Metadata = {
  title: "株式会社 福源屋｜大阪の美装工事・ビルメンテナンス・内装工事",
  description:
    "大阪・関西一円の美装工事、ビルメンテナンス、内装工事なら株式会社福源屋へ。清掃・ハウスクリーニング・現場作業員派遣も対応可能。",
  openGraph: {
    title: "株式会社 福源屋｜大阪の美装工事・ビルメンテナンス・内装工事",
    description:
      "大阪府交野市の株式会社福源屋。清掃・美装・ビルメンテナンス・内装工事など建物のプロフェッショナル。2002年創業。",
    url: "https://fukugenyaguide225-homepage.vercel.app/",
    siteName: "株式会社 福源屋",
    images: [
      {
        url: "/ogp-home.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  alternates: { canonical: "https://fukugenyaguide225-homepage.vercel.app/" },
};

export default function HomePage() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* ① ファーストビュー：背景動画または画像 */}
      <section className="relative h-screen overflow-hidden">
        <BackgroundVideo />
      </section>

      {/* ② テキスト紹介セクション */}
      <section className="relative z-10 text-gray-800 px-4 py-20">
        {/* 編集可能な固定テキストコンポーネント */}
        <TopFixedText />

        {/* ページタイトルとリード文（福源屋用） */}
        <h1 className="text-3xl lg:text-4xl font-extrabold text-center text-white leading-tight mb-6">
          株式会社 福源屋
          <br />
          大阪・関西の美装工事・清掃・ビルメンテナンス
        </h1>

        <p className="max-w-3xl mx-auto text-center text-white leading-relaxed">
          株式会社福源屋は2002年創業、大阪府交野市を拠点に関西全域で
          <br />
          美装工事・ビルメンテナンス・定期清掃・内装工事を手掛けています。
          <br />
          建設現場の美装や、マンション・店舗の清掃、ハウスクリーニングなど幅広くご対応可能です。
        </p>
      </section>

      {/* ③ JSON-LD（構造化データ）福源屋用 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "株式会社 福源屋",
            description:
              "大阪・関西一円の美装工事、ビルメンテナンス、内装工事なら株式会社福源屋へ。清掃・ハウスクリーニング・現場作業員派遣も対応可能。",
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
            image: "/ogp-home.jpg",
            // sameAs: [], // SNSアカウントがあれば配列で
          }),
        }}
      />
    </main>
  );
}
