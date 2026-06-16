---
name: hachinohe-trip-overview
description: 八戸・三沢旅行2026 旅のしおりサイト（Astro/TS, GitHub Pages）プロジェクト概要
type: project
last_verified: 2026-06-16
---

**プロジェクト**: 八戸・三沢旅行 2026 の「旅のしおり」WEBサイト。2人（Hiro=東京発 / 彼女=札幌発）で共有。Google Keep のラフメモを見やすく更新しやすいサイトへ移行する。

- 旅程: 2026/9/20（日）IN 〜 9/23（水・祝）OUT、三沢空港合流・レンタカー前提
- 技術: **Astro + TypeScript**、スマホファースト、外部API/DBなし、データは `src/data/trip.ts` に集約
- status 設計: confirmed / tentative / check / unavailable / interest
- ページ: Home / Itinerary / Flights / Hotels / Food&Markets / Places / Plans / Checklist
- 公開: **GitHub Pages**（repo: KANNOHI1/hachinohe-trip-2026 public、URL `https://kannohi1.github.io/hachinohe-trip-2026/`）
- 要件原文: `docs/Prompt01_指示書ドラフト.txt` / `Prompt02_作業順ドラフト.txt`（raw data）
- 実装は Codex に委譲する方針（.astro/.ts ソースコード）。[[repo-visibility-default]]
