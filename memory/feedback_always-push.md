---
name: always-push
description: 変更は常に commit→push まで完遂する（ローカル止まりは二度手間で禁止）
type: feedback
last_verified: 2026-06-18
---

HK の恒久ルール: コード/設定を変更したら**常に git commit → push まで一気にやる**。ローカル変更だけで止めて「push する?」と聞くのは二度手間で NG。

**Why:** このサイトは GitHub Pages 公開前提（push で自動デプロイ）。ローカルのみでは公開に反映されず、後から push し直す手間が二重に発生する。

**How to apply:**
- ファイル変更が一段落したら、確認を待たず commit & push まで実行する（自律作業モード）。
- push 後は STATUS 現在地に `最新リモート同期` 行を更新（[[hachinohe-trip-overview]] の運用）。
- 例外は破壊的操作の事前報告のみ。
