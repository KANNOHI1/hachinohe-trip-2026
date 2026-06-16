---
name: repo-visibility-default
description: GitHubリポジトリの公開設定はいちいち確認せず public + GitHub Pages が標準
type: feedback
last_verified: 2026-06-16
---

新規プロジェクトで GitHub リポジトリを作るとき、**public / private をいちいち質問しない**。HK の標準は **public リポジトリ + GitHub Pages 公開**。

**Why:** 既存プロジェクト（ariake-events / partner-finder-fermi / care-navi）はすべて public + Pages（`https://kannohi1.github.io/<repo>/`）で運用済み。個人名・日付が含まれていても public 前提で進めている。公開設定の確認で作業を止めるとテンポを損なう。

**How to apply:** `gh repo create <name> --public --source=. --push` で即作成。プライバシーが本当にクリティカルな新種の情報（認証情報・他人の機密）が混ざる場合のみ確認する。[[project_hachinohe-trip-overview]]
