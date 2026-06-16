# STATUS — 八戸・三沢旅行 2026

## 現在地

**MVP公開＆プラン再構築まで完了。** 三沢一択プラン A(十和田リゾート)/B(酸ヶ湯・混浴)/C(八戸拠点・凱旋=推し) をライブ反映。青森案は退路メモへhidden。参加者枠削除・飛行機暫定便明記(羽田⇔三沢/丘珠⇔三沢)済み。公開URL: https://kannohi1.github.io/hachinohe-trip-2026/ 。タイトル「八戸・三沢旅行 2026」(案B)、共有OGPサムネ=ogp.jpg「なおみちゃん八戸凱旋トリップ2026」(案A・122KB JPEG)。次はアンケートタブ追加（収集方式と設問が未確定）。
最新リモート同期: 2026-06-16 — origin/main = HEAD (ahead 0 / behind 0)

## 次にやること

- **アンケートタブ追加**（2人の意見すり合わせ・A/B/C順位付け）。要決定: 収集方式（①共有リンク=純静的推し / ②Googleフォーム / ③コピペ要約=最速）＋設問8問の確定
- 酸ヶ湯/十和田/八戸泊の価格・空室は2026/9ダイヤ公開後に要確認、status更新
- 彼女レビュー後のフィードバック反映
- データ確定作業（9月JALダイヤ確認、9/23丘珠便、宿予約、レンタカー乗り捨て可否、朝市/八食センター営業）→ trip.ts の status を check→confirmed へ更新
- 写真・予約リンク・メモの追加（実装は Codex 委譲）
- vite optimizeDeps.disabled の警告解消（任意・cosmetic）

## 未解決・保留

| 項目 | 状況 |
|---|---|
| 公開URLのデプロイ方式 | Astro scaffold 後に GitHub Actions（astro公式）で設定予定 |

## 判断済みの決定

| 決定 | 補足 |
|---|---|
| リポジトリは public + GitHub Pages | HK標準（既存3プロジェクト同様、確認不要） |
| 技術スタックは Astro + TypeScript | 指示書要件 |

## ハマりパターン

- **withastro/action@v3 の既定 Node は 20。Astro 6 は Node>=22.12 必須**で CI build が `Node.js v20 is not supported by Astro!` で落ちる。→ `with: node-version: 22` を明示して解決。

## 更新履歴

- 2026-06-16: プロジェクト始動。git 初期化・public リポジトリ作成・初期 push 完了 [Claude]
- 2026-06-16: MVP実装〜公開完了。Geminiでヒーロー画像生成→Pillowでタイトル入りサムネ合成、Codexで8ページ実装、Pages自動デプロイ（Node22修正含む）、ライブ確認OK [Claude]
- 2026-06-16: ヒーロー高さ圧縮(mobile/PC)、LINE OGP表示修正(PNG1.1MB→JPEG122KB)、三沢一択プランA/B/C再構築・青森案hidden・参加者削除・飛行機暫定便明記。混浴調査でPlanB=酸ヶ湯一択確定。全て本番反映 [Claude]
