---
name: astro-pages-node22
description: Astro6 を GitHub Pages(withastro/action) でデプロイする際は Node 22 を明示する
type: reference
last_verified: 2026-06-16
---

Astro 6 系を GitHub Pages の公式 `withastro/action@v3` でデプロイすると、action の既定 Node が **20** のため CI build が `Node.js v20.x is not supported by Astro!`（Astro6 は Node>=22.12 必須）で失敗する。

**対処**: ワークフローで明示指定。
```yaml
- uses: withastro/action@v3
  with:
    node-version: 22
```
ローカル build が通っても CI で落ちる典型パターン（ローカルは Node22、runner は既定20）。[[hachinohe-trip-overview]]
