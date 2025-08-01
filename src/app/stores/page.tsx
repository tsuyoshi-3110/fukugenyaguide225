import type { Metadata } from "next";
import StoresClient from "@/components/StoresClient";
import { PhoneSection } from "@/components/PhoneSection";

export const metadata: Metadata = {
  title: "拠点一覧｜株式会社 福源屋",
  description:
    "株式会社福源屋の拠点・事業所一覧ページ。大阪府交野市本社を中心に、関西一円に対応しています。ビルメンテナンス・清掃・美装工事のご依頼はお気軽にご相談ください。",
  openGraph: {
    title: "拠点一覧｜株式会社 福源屋",
    description:
      "株式会社福源屋の拠点一覧。大阪府交野市を本社に関西各地の現場に迅速対応しています。ビルメンテナンス・内装工事・清掃のプロフェッショナル。",
    url: "https://fukugenyaguide225-homepage.vercel.app/stores", // 実際の公開URLに変更
    siteName: "株式会社 福源屋",
    images: [
      {
        url: "/ogp-stores.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
};

export default function StoresPage() {
  return (
    <main className="px-4 py-16">
      {/* 会社案内・拠点紹介セクション */}
      <section className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-2xl lg:text-3xl font-extrabold mb-4 text-white">
          株式会社 福源屋 ─ 拠点・事業所一覧
        </h1>
        <p className="leading-relaxed  text-white">
          <strong>株式会社福源屋</strong>は大阪府交野市の本社を拠点に、
          <strong>関西一円</strong>の現場に迅速対応。
          建設現場の美装工事やビルメンテナンス、
          店舗・マンションの清掃・ハウスクリーニングまで、
          <br className="hidden lg:block" />
          地域密着型で安心・丁寧なサービスを提供しております。
        </p>
      </section>

      {/* お問い合わせ・電話番号セクション */}
      <section className="max-w-4xl mx-auto text-center mb-12">
        <PhoneSection />
      </section>

      {/* Firestoreから動的レンダリングされる拠点カード */}
      <StoresClient />
    </main>
  );
}
