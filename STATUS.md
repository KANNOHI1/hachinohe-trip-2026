# STATUS — 八戸・三沢旅行 2026

## 現在地

**Plan A で確定・サイトを1プラン化した**（B/C 関連は全削除）。trip.ts から Plan B/C・aomoriFallbackNote・dead な itinerary 配列/ItineraryDay 型・旧青森/十和田案の宿5件（奥入瀬/蔦温泉/十和田×2/酸ヶ湯）を削除。宿は今年＝愛山(confirmed)＋八戸中心街の2件、来年＝青森屋＋ミチル種差を `wishlistHotels`（Hotelsページ「来年行きたい宿」セクション）に控えめに残した。Home は A/B/C タブUI撤去→Plan A 単独日程表示。Plans ページ/PlanCard/Timeline は削除、nav から Plans 除去。基本方針(policy)を4点に刷新（三沢IN/OUT・三沢合流・レンタカー前提・Day1八戸/Day2龍泉洞/Day3八戸）。長流寺チェックリストの失礼文言「フライト約1時間40分前には切り上げる」を削除→「帰り便JAL154(12:50発)に向け空港まで約40分＋返却/保安検査を見込み遅くとも11:00頃に長流寺出発」へ逆算修正。`npm run build` green（6ページ）。**未push（ローカルのみ）**。次は八戸の宿・航空券・残画像・アンケート。公開URL: https://kannohi1.github.io/hachinohe-trip-2026/
最新リモート同期: 2026-06-18 15:55 JST — ローカル変更ありpush未実施（要 git push で Pages 反映）

## 次にやること

### サイト最終化フェーズ（次の主タスク）
- **八戸の宿（1泊目・3泊目）を選定→予約**（中心街・横丁徒歩圏で要選定。現状「八戸中心街（宿未定）」）
- **航空券予約**（宏勇 JAL154 12:50 / 奈緒美 JAL2816 13:10 ※2816運航は2026年9月ダイヤ公開後に確認）
- **弁天島・長流寺の実写真**をHKが用意 → PlaceCard 配線（今は色帯。`public/images/places/` に置けば1分で配線）
- **アンケートタブ**：収集方式（①共有リンク=純静的推し/②Googleフォーム/③コピペ）＋設問8問を決定して実装
- 「4枚を四角にまとめた感じ」の意味確認（a:正方形サムネ/b:2×2グリッド/c:他）

### データ確定（2026/9ダイヤ・営業情報の公開後）
- 9/23 三沢→丘珠 JAL2816 の運航確認、陸奥湊朝市/八食センターの営業確認 → trip.ts の status を check→confirmed へ
- 追加宿候補（彼女提案）: 岩泉CYMBALS（龍泉洞至近・グランピング系・客室露天要確認）／浄土ヶ浜パークホテル（宮古・浄土ヶ浜を足すなら）＝保留

### 任意
- vite optimizeDeps.disabled の警告解消（cosmetic）

## 未解決・保留

| 項目 | 状況 |
|---|---|
| 弁天島・長流寺の実写真 | 正規ライセンス写真なし → HKの実写真待ち（今は色帯） |
| アンケートタブの収集方式・設問 | 未決（HK確認待ち） |
| 「4枚を四角にまとめた感じ」の解釈 | a/b/c のどれか未確認 |
| 追加宿候補(CYMBALS/浄土ヶ浜) | 保留 |

## 判断済みの決定

| 決定 | 補足 |
|---|---|
| リポジトリは public + GitHub Pages | HK標準（既存3プロジェクト同様、確認不要） |
| 技術スタックは Astro + TypeScript | 指示書要件 |
| 宏勇の帰り便=三沢→羽田 JAL154 12:50 | 家族都合で変更不可・一番タイト |
| Plan A 2泊目=ホテル龍泉洞愛山 で確定→予約済 | 9/21・2食付31,480円・現地払い・取消料9/18〜 |
| プランは Plan A 一本で確定（B/C は廃止・サイトから全削除） | Day1八戸/Day2龍泉洞/Day3八戸。旧青森/十和田案の宿も削除、青森屋・ミチルのみ「来年候補」で残置 |
| 長流寺墓参は時間制約なし・法要なし | 奈緒美の地元知識／飛行機に合わせ逆算のみ |
| 場所写真はWikimedia正規ライセンスのみ使用 | Google等のスクレイプ禁止。無いものは色帯/HK実写真 |
| 予約番号・本名等の個人情報は公開しない | `_private/`(git管理外)に保管、サイト/memoryには載せない |

## ハマりパターン

- **withastro/action@v3 の既定 Node は 20。Astro 6 は Node>=22.12 必須**で CI build が `Node.js v20 is not supported by Astro!` で落ちる。→ `with: node-version: 22` を明示して解決。
- **codex exec を `--sandbox workspace-write` で実行し、プロンプト末尾に `npm run build`（Astro）を同梱すると hang する**。原因は Astro telemetry が `%AppData%\Roaming` へ書こうとし sandbox が workspace 外書込を阻むため。→ (1)ビルドは codex に含めず Claude 側で `ASTRO_TELEMETRY_DISABLED=1 npm run build` 実行 (2)大きい複合プロンプトは hang しやすいのでファイル単位に分割委譲（trip.ts／削除系／index.astro と3分割で安定）。codex exec は stdout を完了まで全バッファするので「出力0バイト」は正常、kill 判断はファイル変更とプロセス数で行う。

## 更新履歴

- 2026-06-16: プロジェクト始動。git 初期化・public リポジトリ作成・初期 push 完了 [Claude]
- 2026-06-16: MVP実装〜公開完了。Geminiでヒーロー画像生成→Pillowでタイトル入りサムネ合成、Codexで8ページ実装、Pages自動デプロイ（Node22修正含む）、ライブ確認OK [Claude]
- 2026-06-16: ヒーロー高さ圧縮(mobile/PC)、LINE OGP表示修正(PNG1.1MB→JPEG122KB)、三沢一択プランA/B/C再構築・青森案hidden・参加者削除・飛行機暫定便明記。混浴調査でPlanB=酸ヶ湯一択確定。全て本番反映 [Claude]
- 2026-06-18: Plan A 一本化（B/C・旧青森十和田案の宿5件・dead itinerary/aomoriFallbackを全削除、宿を今年2件＋wishlist来年2件に再編、Homeタブ撤去→単一日程、Plans/PlanCard/Timeline削除＆nav整理）、基本方針を4点へ刷新、長流寺の失礼文言を逆算式の出発時刻へ修正。build green(6p)。実装はCodex(gpt-5.5/high)へ分割委譲。※大プロンプト+npm build同梱だとAstro telemetryのAppData書込をsandboxが阻みhang→タスク分割で解決 [Claude]
- 2026-06-18: 龍泉洞ベースへ全面刷新(A本命/B/C)、Home⇔Itinerary統合(合流ドラマ+A/B/Cタブ)、Places折りたたみバナー化、AI画像→Wikimedia正規ライセンス実写真+クレジット、長流寺確定(時間制約なし/法要なし)、帰り便JAL154確定、ホテル龍泉洞愛山(9/21)予約確定を反映(個人情報は_privateへ) [Claude]
