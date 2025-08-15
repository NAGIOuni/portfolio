# Portfolio Site

RYOTA のエンジニアポートフォリオサイト

## Live Site

https://portfolio-4vh3s9vii-nagiounis-projects.vercel.app/

## 技術スタック

- Next.js 15.3.2
- React 19
- TypeScript
- Tailwind CSS v4
- Vercel (デプロイ)

## 機能

- レスポンシブデザイン
- 青から紫へのグラデーションアクセント
- SSG (Static Site Generation)
- 英語学習アプリ「Tango!」の紹介
- カードベースの UI 設計
- CSS-only アニメーション

## 開発・ビルドコマンド

```bash
# 開発サーバー起動
npm run dev

# 本番ビルド
npm run build

# 本番サーバー起動
npm run start

# リンター実行
npm run lint
```

開発サーバーは [http://localhost:3000](http://localhost:3000) で起動します。

## プロジェクト構成

- `/src/app/page.tsx` - メインページ
- `/src/app/tangoCard/page.tsx` - 英語学習アプリの詳細ページ
- `/src/app/globals.css` - グローバルスタイル・アニメーション
- `/public/` - 画像・アイコンファイル

## デザイン特徴

- モノクロームベースデザイン
- 青 → 紫グラデーションアクセント
- ホバーエフェクト付きカード UI
- スムーズなページ内アニメーション
