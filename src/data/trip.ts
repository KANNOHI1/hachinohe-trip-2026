export type Status = 'confirmed' | 'tentative' | 'check' | 'unavailable' | 'interest';

export type TripOverview = {
  title: string;
  dateRange: string;
  dateLabel: string;
  policy: string[];
  participants: { name: string; from: string }[];
};

export type Flight = {
  route: string;
  flightNo: string;
  depart: string;
  arrive: string;
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
    'レンタカー前提',
    '宿は「思い出になる宿」を重視',
    '客室露天風呂、リゾート、温泉、自然、こもれる宿を重視',
    '八戸の朝市、海岸、神社、横丁、海鮮も楽しみたい',
  ],
  participants: [
    { name: 'Hiro', from: '東京方面から出発' },
    { name: '彼女', from: '札幌方面から出発' },
  ],
};

export const flights: FlightGroup[] = [
  {
    title: '札幌（丘珠）↔ 三沢',
    status: 'check',
    note:
      '2026年9月ダイヤはまだ未確定。シルバーウィーク期間のため、祝日追加運航の可能性はあるが、公式発表までは確定扱いにしない。',
    details: [
      'HAC運航',
      '基本は運航日に1日1往復',
      '通常は金・土・日中心',
      '祝日・繁忙期は追加運航の可能性あり',
      '9/23（水・祝）の運航有無は2026年9月ダイヤ公開後に要確認',
    ],
    flights: [
      { route: '丘珠→三沢', flightNo: 'JAL2815', depart: '11:40', arrive: '12:40' },
      {
        route: '三沢→丘珠',
        flightNo: 'JAL2816',
        depart: '13:10',
        arrive: '14:05',
        isPrimary: true,
        primaryLabel: '9/23 要確認',
      },
    ],
  },
  {
    title: '東京（羽田）↔ 三沢',
    status: 'check',
    note: '2026年9月ダイヤは最終確認が必要。現時点では三沢空港合流を第一候補とする。',
    details: ['Hiroの行き第一候補：JAL155 10:45 → 12:05', 'Hiroの帰り候補：JAL154 / JAL156 / JAL158'],
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
];

export const plans: Plan[] = [
  {
    name: 'Base Plan',
    route: '三沢空港IN / 三沢空港OUT',
    summary: ['9/20に三沢空港で合流', '9/23に三沢空港で解散', '彼女の三沢→丘珠便が9/23に運航される場合の第一候補'],
    merits: ['2人とも同じ空港で合流・解散できる', '三沢空港から八戸や宿への移動がしやすい', 'レンタカー導線が自然', '旅の始まりがきれい'],
    risks: ['9/23の三沢→丘珠便が未確定', '彼女の帰りが13:10発の場合、最終日は午前中中心になる'],
    status: 'tentative',
  },
  {
    name: 'Plan B',
    route: '三沢空港IN / 青森空港OUT',
    summary: ['9/20は三沢空港で合流', '9/23は青森空港からそれぞれ帰る', '三沢→丘珠が9/23に運航しない場合の現実的な代替案'],
    merits: ['行きは三沢空港合流の良さを残せる', '帰りは青森空港の便数を使える', '札幌方面、東京方面の両方に戻りやすい'],
    risks: ['レンタカーの乗り捨て可否と料金確認が必要', '最終日の移動距離が増える'],
    status: 'check',
  },
  {
    name: 'Plan C',
    route: '青森空港IN / 青森空港OUT',
    summary: ['三沢便が使いにくい場合の安定案', '青森空港で合流・解散する', '八戸、奥入瀬、十和田湖、青森方面を広域で回るプラン'],
    merits: ['便数が多く安定しやすい', '帰路の不確実性が低い'],
    risks: ['八戸・三沢から遠くなる', '三沢空港合流より旅程の美しさは落ちる'],
    status: 'check',
  },
];

export const hotels: Hotel[] = [
  {
    name: '奥入瀬渓流ホテル by 星野リゾート',
    address: '青森県十和田市大字奥瀬字栃久保231',
    memo: ['奥入瀬渓流沿いのリゾートホテル', '自然、渓流、温泉、記念旅行感が強い', '半露天風呂付き客室があれば優先候補'],
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
    memo: ['JTBシンプルステイ朝食付き候補', '三沢空港合流と相性が良い', '青森文化、温泉、リゾート感', '初日宿として有力'],
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
    memo: ['JTBシンプルステイ朝食付き候補', '秘湯、静かな旅館、奥入瀬エリア', '半露天風呂付き離れ客室があれば強い'],
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
    memo: ['十和田湖畔のホテル', '景色は良さそうだが、八戸・三沢からはやや遠い', '住所はKeep原文から補正済み'],
    airportDistance: '三沢空港から車で約2時間弱',
    hachinoheDistance: '八戸市内から車で約2時間',
    status: 'tentative',
    tags: ['十和田湖', '湖畔', '遠め', '景色'],
    mapUrl: mapSearch('秋田県鹿角郡小坂町十和田湖西湖畔'),
  },
  {
    name: 'ミチル種差｜michill TANESASHI',
    memo: ['1泊1部屋 6〜7万円目安', '今回は空室なし扱い', '種差海岸に近く、雰囲気はかなり良さそう'],
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
    candidates: ['朝食', '軽めの観光', 'レンタカー返却', '三沢空港 or 青森空港から帰路'],
    notes: ['彼女の三沢→丘珠 JAL2816 が運航される場合、13:10発想定', 'その場合、最終日は午前中に無理をしすぎない', '運航されない場合は青森空港OUT案を検討'],
  },
];

export const checklist: ChecklistItem[] = [
  { title: '航空券確認', note: '2026年9月ダイヤ公開後、全便を最終確認する', status: 'check', done: false },
  { title: '9/23 丘珠便確認', note: '三沢→丘珠 JAL2816 の運航有無を確認する', status: 'check', done: false },
  { title: '宿予約', note: '思い出になる宿を軸に候補を絞る', status: 'tentative', done: false },
  { title: 'レンタカー予約', note: '三沢空港IN、青森空港OUTの乗り捨て可否と料金を確認する', status: 'check', done: false },
  { title: '朝市営業確認', note: '祝日の営業状況を各市場で確認する', status: 'check', done: false },
  { title: '八食センター営業確認', note: '9/23は水曜祝日のため、営業カレンダー要確認', status: 'check', done: false },
  { title: 'Google Mapリンク整理', note: '宿・朝市・神社・海岸線のリンクを旅行前に整理する', status: 'tentative', done: false },
  { title: '予算整理', note: '宿、航空券、レンタカー、食費の概算をまとめる', status: 'tentative', done: false },
];
