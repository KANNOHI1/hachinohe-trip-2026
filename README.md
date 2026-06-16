# 八戸・三沢旅行 2026 — 旅のしおり

2026/9/20（日）〜 9/23（水・祝）の八戸・三沢旅行を、2人で共有するための旅程サイト。
Google Keep のラフメモを、見やすく更新しやすい WEB サイトへ移行する。

## 技術スタック

- **Astro + TypeScript**（静的サイト）
- スマホファースト・レスポンシブ
- 外部 API / DB なし（地図は Google Maps への外部リンク）
- データは `src/data/trip.ts` に集約
- **GitHub Pages** で公開

## ステータス設計

各情報は `status` を持つ:

| status | 意味 |
|---|---|
| `confirmed` | 確定 |
| `tentative` | 仮 |
| `check` | 要確認 |
| `unavailable` | 現時点で不可・空室なし |
| `interest` | 個人的興味 |

## 開発

```bash
npm install
npm run dev      # ローカル開発サーバ
npm run build    # 本番ビルド（dist/）
npm run preview  # ビルド結果のプレビュー
```

## ディレクトリ

- `src/data/trip.ts` — 旅程・宿・フライト等の全データ
- `docs/` — 元の指示書・作業順ドラフト（raw data として保存）

## 公開

GitHub Pages（GitHub Actions 経由）で自動デプロイ。`astro.config.mjs` の `site` / `base` をリポジトリ名に合わせる。
