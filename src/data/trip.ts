export type Status = 'confirmed' | 'tentative' | 'check' | 'unavailable' | 'interest';

export type TripOverview = {
  title: string;
  dateRange: string;
  dateLabel: string;
  policy: string[];
};

export type Flight = {
  route: string;
  flightNo: string;
  depart: string;
  arrive: string;
  status?: Status;
  isPrimary?: boolean;
  primaryLabel?: string;
};

export type FlightGroup = {
  title: string;
  status: Status;
  note: string;
  details: string[];
  flights: Flight[];
};

export type Plan = {
  name: string;
  route: string;
  summary: string[];
  merits: string[];
  risks: string[];
  status: Status;
};

export type Hotel = {
  name: string;
  address?: string;
  memo: string[];
  price?: string[];
  airportDistance: string;
  hachinoheDistance: string;
  status: Status;
  tags: string[];
  mapUrl: string;
  websiteUrl?: string;
};

export type Market = {
  name: string;
  businessDays: string;
  hours: string;
  location: string;
  memo: string[];
  status: Status;
  mapUrl: string;
};

export type Place = {
  name: string;
  address?: string;
  memo: string[];
  status: Status;
  tags: string[];
  mapUrl: string;
};

export type ItineraryDay = {
  day: string;
  date: string;
  title: string;
  status: Status;
  schedule?: string[];
  candidates: string[];
  notes?: string[];
};

export type ChecklistItem = {
  title: string;
  note: string;
  status: Status;
  done: boolean;
};

const mapSearch = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

export const tripOverview: TripOverview = {
  title: '八戸・三沢旅行 2026',
  dateRange: '2026/9/20（日）IN 〜 2026/9/23（水・祝）OUT',
  dateLabel: '2026.9.20 SUN — 9.23 WED',
  policy: [
    'お互い飛行機を第一優先',
    '三沢空港で合流予定',
    '三沢空港IN / 三沢空港OUTを前提',
    'レンタカー前提',
    '宿は「思い出になる宿」を重視',
    '客室露天風呂、リゾート、温泉、自然、こもれる宿を重視',
    '八戸の朝市、海岸、神社、横丁、海鮮も楽しみたい',
  ],
};

export const flights: FlightGroup[] = [
  {
    title: '東京（羽田）↔ 三沢',
    status: 'check',
    note:
      'JAL・通年毎日運航。運航は前提にしてOK。暫定でこの便を置き、便/時刻の確定は2026年9月ダイヤ公開後に確認。',
    details: [
      '羽田→三沢: JAL153 08:15→09:30 / JAL155 10:45→12:05 / JAL157 14:55→16:10 / JAL159 17:05→18:30',
      '三沢→羽田: JAL152 10:10→11:35 / JAL154 12:50→14:15 / JAL156 16:50→18:15 / JAL158 19:10→20:35',
      'Hiro 行き第一候補: JAL155 10:45→12:05',
      'Hiro 帰り候補: JAL154 / JAL156 / JAL158',
    ],
    flights: [
      { route: '羽田→三沢', flightNo: 'JAL153', depart: '08:15', arrive: '09:30' },
      {
        route: '羽田→三沢',
        flightNo: 'JAL155',
        depart: '10:45',
        arrive: '12:05',
        isPrimary: true,
        primaryLabel: 'Hiro 行き第一候補',
      },
      { route: '羽田→三沢', flightNo: 'JAL157', depart: '14:55', arrive: '16:10' },
      { route: '羽田→三沢', flightNo: 'JAL159', depart: '17:05', arrive: '18:30' },
      { route: '三沢→羽田', flightNo: 'JAL152', depart: '10:10', arrive: '11:35' },
      {
        route: '三沢→羽田',
        flightNo: 'JAL154',
        depart: '12:50',
        arrive: '14:15',
        isPrimary: true,
        primaryLabel: 'Hiro 帰り候補',
      },
      {
        route: '三沢→羽田',
        flightNo: 'JAL156',
        depart: '16:50',
        arrive: '18:15',
        isPrimary: true,
        primaryLabel: 'Hiro 帰り候補',
      },
      {
        route: '三沢→羽田',
        flightNo: 'JAL158',
        depart: '19:10',
        arrive: '20:35',
        isPrimary: true,
        primaryLabel: 'Hiro 帰り候補',
      },
    ],
  },
  {
    title: '札幌（丘珠）↔ 三沢',
    status: 'check',
    note:
      'HAC運航。限定運航・1日1往復。暫定でこの便を置き、9/23（水・祝）の三沢→丘珠 JAL2816 のみ2026年9月ダイヤ公開後に要確認。',
    details: [
      'HAC運航',
      '限定運航・1日1往復',
      '丘珠→三沢: JAL2815 11:40→12:40（なおみ 行き）',
      '三沢→丘珠: JAL2816 13:10→14:05（なおみ 帰り）',
      '9/23（水・祝）の三沢→丘珠 JAL2816 のみ status: check（要確認）',
      'シルバーウィーク臨時便次第、2026年9月ダイヤ公開後に確認',
    ],
    flights: [
      { route: '丘珠→三沢', flightNo: 'JAL2815', depart: '11:40', arrive: '12:40', primaryLabel: 'なおみ 行き' },
      {
        route: '三沢→丘珠',
        flightNo: 'JAL2816',
        depart: '13:10',
        arrive: '14:05',
        status: 'check',
        isPrimary: true,
        primaryLabel: 'なおみ 帰り / 9/23 要確認',
      },
    ],
  },
];

export const plans: Plan[] = [
  {
    name: 'Plan A',
    route: '十和田リゾート連泊',
    summary: [
      '1・2泊目＝十和田湖畔リゾート（第一候補=十和田プリンスホテル／候補=十和田ホテル・奥入瀬渓流ホテル）',
      '3泊目＝八戸中心街',
      '十和田湖・奥入瀬の自然をリゾートで2連泊、最終日は八戸で朝市・横丁・締め',
    ],
    merits: ['十和田湖をじっくり', 'リゾートの快適さ', '移動が前半集中で後半楽'],
    risks: ['第一第二候補は客室露天なし（共用湯のみ）', '十和田湖畔は三沢から約70〜90分と遠め'],
    status: 'tentative',
  },
  {
    name: 'Plan B',
    route: '秘湯・混浴の旅館連泊',
    summary: [
      '1・2泊目＝酸ヶ湯温泉旅館（ヒバ千人風呂＝カップルで一緒に入れる混浴。湯あみ着OK）',
      '3泊目＝八戸中心街',
      '八甲田の名湯・酸ヶ湯でヒバ千人風呂(混浴160畳)を2連泊で堪能、最終日八戸で締め',
      '蔦温泉・谷地温泉は現在混浴なし（男女別/時間入替）なので、混浴目的なら酸ヶ湯一択',
    ],
    merits: ['湯あみ着OKでカップル混浴が成立する唯一の名湯', '秘湯の非日常感', '2食付2名 約2.6万円〜とコスパ良'],
    risks: [
      '三沢空港から約1.5〜2時間と最遠（要確認）',
      '女性専用時間あり(朝8-9・夜20-21時)で2人で入る時間帯調整が必要',
      '湯あみ着は売店購入か有料レンタルのみ(持込・水着不可)',
      '客室露天なし(共用湯)',
      '2026/9の料金・空室は要確認',
    ],
    status: 'tentative',
  },
  {
    name: 'Plan C',
    route: '八戸拠点・凱旋型（推し）',
    summary: [
      '1泊目＝八戸中心街',
      '2泊目＝旅館系（第一候補=奥入瀬渓流ホテル＝客室露天テラス・送迎／候補=蔦温泉離れ）',
      '3泊目＝八戸中心街',
      '13時集合の初日は八戸で海・デート・横丁、中日に奥入瀬・十和田の自然と温泉、最終日は陸奥湊朝市・蕪嶋神社・弁天島を回って八戸で締め',
    ],
    merits: ['凱旋テーマと最も噛む', '初日の移動最小', '中日に自然と温泉のピーク', '客室露天も取れる'],
    risks: ['中日だけ往復の遠出', '八戸泊の宿は要選定'],
    status: 'tentative',
  },
];

export const aomoriFallbackNote =
  '※9/23の三沢→丘珠便が運航しない場合は青森空港OUT案を検討（退路として保持）';

export const hotels: Hotel[] = [
  {
    name: '奥入瀬渓流ホテル by 星野リゾート',
    address: '青森県十和田市大字奥瀬字栃久保231',
    memo: [
      '奥入瀬渓流沿いのリゾートホテル',
      '自然、渓流、温泉、記念旅行感が強い',
      '客室露天テラスあり・三沢空港から送迎あり(約60分)',
      '2026/9の実料金・空室は要確認',
    ],
    price: ['1泊2名 88,600円目安', '3泊2名 265,800円目安'],
    airportDistance: '三沢空港から車で約1時間強',
    hachinoheDistance: '八戸市内から車で約1時間20分',
    status: 'tentative',
    tags: ['リゾート', '自然', '奥入瀬', '記念宿', '客室風呂候補'],
    mapUrl: mapSearch('青森県十和田市大字奥瀬字栃久保231'),
  },
  {
    name: '青森屋 by 星野リゾート',
    address: '青森県三沢市字古間木山56',
    memo: [
      'JTBシンプルステイ朝食付き候補',
      '三沢空港合流と相性が良い',
      '青森文化、温泉、リゾート感',
      'あずまし半露天付き客室・三沢空港から約20分・送迎あり',
      '2026/9の実料金・空室は要確認',
    ],
    price: ['1泊2名 88,600円目安', '3泊2名 261,400円目安'],
    airportDistance: '三沢空港から車で約15分',
    hachinoheDistance: '八戸市内から車で約30分',
    status: 'tentative',
    tags: ['三沢', '空港近い', '温泉', '青森文化', '初日向き'],
    mapUrl: mapSearch('青森県三沢市字古間木山56'),
  },
  {
    name: '蔦温泉旅館',
    address: '青森県十和田市奥瀬字蔦野湯1',
    memo: [
      'JTBシンプルステイ朝食付き候補',
      '秘湯、静かな旅館、奥入瀬エリア',
      '半露天風呂付き離れ客室があれば強い',
      '混浴ではない候補（男女別/時間入替）',
      '2026/9の実料金・空室は要確認',
    ],
    price: ['1泊2名 88,600円目安', '3泊2名 261,400円目安'],
    airportDistance: '三沢空港から車で約1時間強',
    hachinoheDistance: '八戸市内から車で約1時間20分',
    status: 'tentative',
    tags: ['旅館', '秘湯', '静か', '奥入瀬', 'こもれる宿候補'],
    mapUrl: mapSearch('青森県十和田市奥瀬字蔦野湯1'),
  },
  {
    name: '十和田プリンスホテル',
    address: '秋田県鹿角郡小坂町十和田湖西湖畔',
    memo: [
      '十和田湖畔のホテル',
      '景色は良さそうだが、八戸・三沢からはやや遠い',
      '客室露天なし(共用露天のみ)',
      '住所はKeep原文から補正済み',
      '2026/9の実料金・空室は要確認',
    ],
    price: ['1泊2名 約46,000〜84,000円(2食・目安)'],
    airportDistance: '三沢空港から車で約2時間弱',
    hachinoheDistance: '八戸市内から車で約2時間',
    status: 'tentative',
    tags: ['十和田湖', '湖畔', '遠め', '景色'],
    mapUrl: mapSearch('秋田県鹿角郡小坂町十和田湖西湖畔'),
  },
  {
    name: '十和田ホテル',
    address: '青森県十和田市奥瀬十和田湖畔（西湖畔）',
    memo: [
      '1939年築の登録有形文化財',
      '全室十和田湖ビュー',
      '客室露天なし(共用展望大浴場)',
      '2026/9の実料金・空室は要確認',
    ],
    price: ['1泊2名 約42,000〜68,000円(2食・目安)'],
    airportDistance: '三沢空港から約90分(要確認)',
    hachinoheDistance: '八戸市内からの距離は要確認',
    status: 'tentative',
    tags: ['十和田湖', 'クラシック', '文化財', '湖ビュー', 'リゾート'],
    mapUrl: mapSearch('青森県十和田市奥瀬十和田湖畔 西湖畔 十和田ホテル'),
    websiteUrl: 'https://towada-hotel.com/',
  },
  {
    name: '酸ヶ湯温泉旅館',
    address: '青森県青森市荒川南荒川山国有林酸湯沢50',
    memo: [
      '名物ヒバ千人風呂(160畳の混浴)',
      'カップル混浴可・湯あみ着OK(売店購入/有料レンタルのみ、持込水着不可)',
      '女性専用時間 朝8-9時・夜20-21時',
      '別に男女別「玉の湯」あり',
      '客室露天なし(共用湯)',
      '2026/9の料金・空室は要確認',
    ],
    price: ['1泊2名 約26,000〜（2食・目安・要確認）'],
    airportDistance: '三沢空港から約110〜120分(推定・要確認)',
    hachinoheDistance: '八戸市内からの距離は要確認',
    status: 'check',
    tags: ['混浴', '秘湯', '千人風呂', '八甲田', '湯あみ着OK', '要確認'],
    mapUrl: mapSearch('青森県青森市荒川南荒川山国有林酸湯沢50'),
    websiteUrl: 'https://sukayu.jp/',
  },
  {
    name: '八戸中心街（宿未定）',
    memo: ['みろく横丁・朝市が徒歩圏', '三沢空港まで約30分', '具体的な宿は要選定', '2026/9の実料金・空室は要確認'],
    price: ['未定'],
    airportDistance: '三沢空港まで約30分',
    hachinoheDistance: '八戸中心街',
    status: 'check',
    tags: ['八戸', '横丁', '空港30分', '宿未定'],
    mapUrl: mapSearch('八戸中心街'),
  },
  {
    name: 'ミチル種差｜michill TANESASHI',
    memo: ['1泊1部屋 6〜7万円目安', '今回は空室なし扱い', '種差海岸に近く、雰囲気はかなり良さそう', '2026/9の実料金・空室は要確認'],
    price: ['1泊1部屋 6〜7万円目安'],
    airportDistance: '三沢空港から車で約1時間弱',
    hachinoheDistance: '八戸市内から車で約30分',
    status: 'unavailable',
    tags: ['種差', '海', '空室なし', '泊まりたかった宿'],
    mapUrl: mapSearch('ミチル種差 michill TANESASHI'),
  },
];

export const markets: Market[] = [
  {
    name: '館鼻岸壁朝市',
    businessDays: '毎週日曜日のみ / 3月中旬〜12月限定',
    hours: '日の出から午前9時頃',
    location: '館鼻岸壁',
    memo: ['市内中心部から車で約15分', '約300店が並ぶ日本最大級の朝市', '9/20は日曜だが、13:00合流なので間に合わない可能性が高い'],
    status: 'check',
    mapUrl: mapSearch('館鼻岸壁朝市'),
  },
  {
    name: '陸奥湊駅前朝市',
    businessDays: '月曜日〜土曜日 / 日曜日、第2土曜日は休み',
    hours: '午前3時頃〜正午頃',
    location: 'JR陸奥湊駅前',
    memo: ['JR八戸駅から約15分', '戦後から続くレトロな朝市', '海鮮丼が人気', '9/21、9/22、9/23朝に行ける可能性あり', '祝日の営業状況は要確認'],
    status: 'check',
    mapUrl: mapSearch('JR陸奥湊駅前'),
  },
  {
    name: '湊日曜朝市',
    businessDays: '毎週日曜日のみ',
    hours: '午前5時頃〜午前10時頃',
    location: 'JR陸奥湊駅周辺',
    memo: ['JR八戸駅から約15分', '館鼻岸壁朝市と同時開催', '地元密着型の落ち着いた朝市', '9/20は13:00合流なので間に合わない可能性が高い'],
    status: 'check',
    mapUrl: mapSearch('JR陸奥湊駅'),
  },
  {
    name: '八食センター',
    businessDays: '水曜日を除く毎日が基本 / お盆や年末年始は営業あり',
    hours: '午前9時〜午後6時',
    location: '八戸市河原木',
    memo: ['屋内型の巨大市場ビル', '朝市ではない', '全天候型', '買った食材を炭火で焼く七厘村が有名', '9/23は水曜祝日のため、営業カレンダー要確認'],
    status: 'check',
    mapUrl: mapSearch('八戸市河原木 八食センター'),
  },
];

export const places: Place[] = [
  {
    name: '弁天島の厳島神社',
    address: '青森県八戸市鮫町大作平45',
    memo: ['津波で鳥居が流失', '鳥居の一部が約7,000km離れたアメリカ西海岸に漂着', '返還された鳥居の一部を使って再建された', '個人的興味が高い'],
    status: 'interest',
    tags: ['神社', '震災', '鳥居', '海', '個人的興味'],
    mapUrl: mapSearch('青森県八戸市鮫町大作平45'),
  },
  {
    name: '蕪嶋神社',
    address: '青森県八戸市鮫町鮫56-2',
    memo: ['社伝では1269年に江ノ島弁才天を勧進したのが始まり', '祭神は市寸嶋比売命、多紀理毘売命、多岐都比売命の宗像三女神', '蕪嶋の弁天様として信仰されてきた', '弁財天は商売繁盛や子授けにご利益があるとされる', '漁業の守り神でもある', 'ウミネコでも有名'],
    status: 'interest',
    tags: ['神社', '弁天', '宗像三女神', '漁業', 'ウミネコ'],
    mapUrl: mapSearch('青森県八戸市鮫町鮫56-2'),
  },
  {
    name: '種差海岸',
    memo: ['八戸の代表的な海岸景勝地', '天然芝と海の景色', 'ミチル種差が取れない場合でも訪問候補', '蕪嶋神社、弁天島と合わせて海岸線ドライブに組み込みたい'],
    status: 'tentative',
    tags: ['海', '景色', 'ドライブ', '八戸'],
    mapUrl: mapSearch('種差海岸'),
  },
  {
    name: 'みろく横丁・八戸横丁群',
    memo: ['八戸中心街の夜候補', '車を置いて歩ける宿とセットで考える', '八戸中心街に泊まる日があれば行きたい'],
    status: 'tentative',
    tags: ['夜', '飲食', '横丁', '八戸中心街'],
    mapUrl: mapSearch('みろく横丁 八戸横丁群'),
  },
];

export const itinerary: ItineraryDay[] = [
  {
    day: 'Day 1',
    date: '9/20（日）',
    title: 'IN / 三沢空港で合流',
    status: 'tentative',
    schedule: ['13:00までに三沢空港で合流', 'レンタカー受け取り', '宿へ移動', '宿は未定'],
    candidates: ['青森屋に泊まる場合：三沢空港から近く、初日が楽', '奥入瀬方面に泊まる場合：移動は長いが、初日から非日常感が強い', '八戸中心街に泊まる場合：夜の横丁や食事に強い'],
  },
  {
    day: 'Day 2',
    date: '9/21（月・祝）',
    title: '八戸の朝市と海岸線',
    status: 'tentative',
    candidates: ['陸奥湊駅前朝市', '八食センター', '蕪嶋神社', '弁天島の厳島神社', '種差海岸', '八戸中心街', 'みろく横丁'],
  },
  {
    day: 'Day 3',
    date: '9/22（火・休日）',
    title: '奥入瀬・十和田湖・温泉',
    status: 'tentative',
    candidates: ['奥入瀬渓流', '十和田湖', '思い出になる宿でゆっくり', '温泉', '客室露天風呂付きの宿'],
  },
  {
    day: 'Day 4',
    date: '9/23（水・祝）',
    title: 'OUT / 帰路',
    status: 'check',
    candidates: ['朝食', '軽めの観光', 'レンタカー返却', '三沢空港から帰路'],
    notes: ['彼女の三沢→丘珠 JAL2816 が運航される場合、13:10発想定', 'その場合、最終日は午前中に無理をしすぎない', 'プラン(A/B/C)により宿が変わる'],
  },
];

export const checklist: ChecklistItem[] = [
  { title: '航空券確認', note: '2026年9月ダイヤ公開後、全便を最終確認する', status: 'check', done: false },
  { title: '9/23 丘珠便確認', note: '三沢→丘珠 JAL2816 の運航有無を確認する', status: 'check', done: false },
  { title: '宿予約', note: '思い出になる宿を軸に候補を絞る', status: 'tentative', done: false },
  { title: 'レンタカー予約', note: '三沢空港IN / 三沢空港OUTの貸出・返却時刻と料金を確認する', status: 'check', done: false },
  { title: '朝市営業確認', note: '祝日の営業状況を各市場で確認する', status: 'check', done: false },
  { title: '八食センター営業確認', note: '9/23は水曜祝日のため、営業カレンダー要確認', status: 'check', done: false },
  { title: 'Google Mapリンク整理', note: '宿・朝市・神社・海岸線のリンクを旅行前に整理する', status: 'tentative', done: false },
  { title: '予算整理', note: '宿、航空券、レンタカー、食費の概算をまとめる', status: 'tentative', done: false },
];
