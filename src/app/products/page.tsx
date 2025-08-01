import type { Metadata } from "next";
import ProductsClient from "@/components/ProductsClient"; // Firestore接続のまま施工実績一覧に転用OK

export const metadata: Metadata = {
  title: "施工実績一覧｜株式会社 福源屋",
  description:
    "株式会社福源屋の施工実績一覧ページ。美装工事・ビルメンテナンス・清掃・内装工事など、これまで手掛けてきた現場やプロジェクト事例を写真付きでご紹介しています。",
  openGraph: {
    title: "施工実績一覧｜株式会社 福源屋",
    description:
      "株式会社福源屋の施工実績一覧。大阪・関西一円の美装工事やビルメンテナンス、現場清掃の事例写真を多数掲載。信頼と実績のサービスをご覧ください。",
    url: "https://fukugenyaguide225-homepage.vercel.app/products", // 公開URLに合わせて調整
    siteName: "株式会社 福源屋",
    images: [
      {
        url: "/ogp-products.jpg", // OGP画像を施工実績用に変更もOK
        width: 1200,
        height: 630,
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
};

export default function ProductsPage() {
  return <ProductsClient />;
}
