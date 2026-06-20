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
  flights: Flight[];
};

export type ArrivalTrack = {
  person: string;
  direction: string;
  origin: string;
  steps: string[];
};

export type ArrivalJourney = {
  date: string;
  tracks: ArrivalTrack[];
  merge: {
    time: string;
    place: string;
    steps: string[];
  };
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
  image?: string;
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
  image?: string;
  imageCredit?: string;
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
    '三沢空港IN / 三沢空港OUT',
    '三沢空港で合流',
    'レンタカー前提',
    'Day1 八戸 / Day2 龍泉洞 / Day3 八戸',
  ],
};

export const arrivalJourney: ArrivalJourney = {
  date: '9/20（日）',
  tracks: [
    {
      person: '奈緒美',
      direction: '札幌方面',
      origin: '稲積公園駅',
      steps: ['稲積公園駅 出発', '丘珠空港', 'JAL2815 丘珠 11:40 → 三沢 12:40', '三沢空港着'],
    },
    {
      person: '宏勇',
      direction: '東京方面',
      origin: '東雲駅（江東区）',
      steps: ['東雲駅（江東区）出発', '羽田空港', 'JAL155 羽田 10:45 → 三沢 12:05', '三沢空港着'],
    },
  ],
  merge: {
    time: '13:00',
    place: '三沢空港で合流',
    steps: ['レンタカー受取', '旅へ'],
  },
};

export const flights: FlightGroup[] = [
  {
    title: '札幌（丘珠）↔ 三沢',
    status: 'check',
    note:
      'HAC運航。限定運航・1日1往復。暫定でこの便を置き、9/23（水・祝）の三沢→丘珠 JAL2816 のみ2026年9月ダイヤ公開後に要確認。',
    flights: [
      { route: '丘珠→三沢', flightNo: 'JAL2815', depart: '11:40', arrive: '12:40', primaryLabel: '奈緒美 行き' },
      {
        route: '三沢→丘珠',
        flightNo: 'JAL2816',
        depart: '13:10',
        arrive: '14:05',
        status: 'check',
        isPrimary: true,
        primaryLabel: '奈緒美 帰り / 9/23 要確認',
      },
    ],
  },
  {
    title: '東京（羽田）↔ 三沢',
    status: 'check',
    note:
      'JAL・通年毎日運航。宏勇の帰りは JAL154 12:50→14:15 を確定として置く。9/23朝は長流寺墓参から12:50発へ逆算して動く。',
    flights: [
      { route: '羽田→三沢', flightNo: 'JAL153', depart: '08:15', arrive: '09:30' },
      {
        route: '羽田→三沢',
        flightNo: 'JAL155',
        depart: '10:45',
        arrive: '12:05',
        isPrimary: true,
        primaryLabel: '宏勇 行き第一候補',
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
        primaryLabel: '宏勇 帰り',
      },
      { route: '三沢→羽田', flightNo: 'JAL156', depart: '16:50', arrive: '18:15' },
      { route: '三沢→羽田', flightNo: 'JAL158', depart: '19:10', arrive: '20:35' },
    ],
  },
];

export const plans: Plan[] = [
  {
    name: 'Plan A',
    route: '八戸ベース＋龍泉洞泊（本命）',
    summary: [
      '1泊目=八戸中心街',
      '2泊目=ホテル龍泉洞愛山（予約済み・龍泉洞泊・温泉「炭の湯」・三陸2食）',
      '3泊目＝八戸中心街',
      'Day1 三沢着→八戸（海・種差海岸・横丁でゆるく）',
      'Day2 八戸→南下→龍泉洞→愛山泊',
      'Day3 愛山→北上（種差海岸など）→八戸泊',
      'Day4 長流寺墓参→三沢OUT',
    ],
    merits: ['龍泉洞を泊まりで堪能（日帰り往復の運転を回避）', '前後の八戸を楽しめる', '凱旋の締めも八戸'],
    risks: ['中日に南北移動', '9/21予約済みのため到着時刻に注意'],
    status: 'confirmed',
  },
];

export const hotels: Hotel[] = [
  {
    name: 'ホテル龍泉洞愛山',
    address: '岩手県下閉伊郡岩泉町岩泉字松橋',
    memo: ['龍泉洞から車5分', '龍泉洞と同源泉の「炭の湯」', '三陸の海の幸の2食', '客室露天は要確認', '9/21予約済み(現地払い・1泊2食 日替わり家庭料理)'],
    price: ['1泊2名 2食付 31,480円(税込)'],
    airportDistance: '三沢空港から約2h15(要確認)',
    hachinoheDistance: '八戸から三陸道で約1h40',
    status: 'confirmed',
    tags: ['龍泉洞', '温泉', '炭の湯', '三陸', '岩泉'],
    mapUrl: mapSearch('岩手県下閉伊郡岩泉町岩泉字松橋 ホテル龍泉洞愛山'),
    websiteUrl: 'https://www.aizan.co.jp/',
    image: 'images/places/aizan02.jpg',
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
];

export const wishlistHotels: Hotel[] = [
  {
    name: '青森屋 by 星野リゾート',
    address: '青森県三沢市字古間木山56',
    memo: [
      '来年の宿候補（今年は見送り）',
      'JTBシンプルステイ朝食付き候補',
      '三沢空港合流と相性が良い',
      '青森文化、温泉、リゾート感',
      'あずまし半露天付き客室・三沢空港から約20分・送迎あり',
      '2026/9の実料金・空室は要確認',
    ],
    price: ['1泊2名 88,600円目安', '3泊2名 261,400円目安'],
    airportDistance: '三沢空港から車で約15分',
    hachinoheDistance: '八戸市内から車で約30分',
    status: 'interest',
    tags: ['三沢', '空港近い', '温泉', '青森文化', '来年候補'],
    mapUrl: mapSearch('青森県三沢市字古間木山56'),
    image: 'images/places/aomoriya03.jpg',
  },
  {
    name: 'ミチル種差｜michill TANESASHI',
    memo: ['1泊1部屋 6〜7万円目安', '来年こそ泊まりたい第一候補', '種差海岸に近く、雰囲気はかなり良さそう', '2026/9の実料金・空室は要確認'],
    price: ['1泊1部屋 6〜7万円目安'],
    airportDistance: '三沢空港から車で約1時間弱',
    hachinoheDistance: '八戸市内から車で約30分',
    status: 'interest',
    tags: ['種差', '海', '来年候補', '泊まりたかった宿'],
    mapUrl: mapSearch('ミチル種差 michill TANESASHI'),
    image: 'images/places/michill03.png',
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
    name: '龍泉洞（りゅうせんどう）',
    address: '岩手県下閉伊郡岩泉町岩泉字神成1-1',
    memo: [
      '日本三大鍾乳洞のひとつ',
      '地底湖の透明度で有名',
      '9月の開洞 8:30〜18:00',
      '入洞料 1,100円',
      '見学約30〜40分',
      '無料駐車場多数',
      '八戸から三陸道で約1時間40分',
      '最終入洞時刻は要電話確認(0194-22-2566)',
    ],
    status: 'tentative',
    tags: ['龍泉洞', '鍾乳洞', '地底湖', '岩手', '岩泉'],
    mapUrl: mapSearch('岩手県下閉伊郡岩泉町岩泉字神成1-1'),
    image: 'images/places/ryusendo.jpg',
  },
  {
    name: '長流寺（ちょうりゅうじ）',
    address: '青森県八戸市吹上1-4-18',
    memo: [
      '奈緒美の父の墓所',
      '法要を依頼する場合は事前予約必須、駐車場有無は要確認',
      'TEL 0178-43-4468',
    ],
    status: 'confirmed',
    tags: ['八戸', '墓参', '命日9/23', '家族', '曹洞宗'],
    mapUrl: mapSearch('青森県八戸市吹上1-4-18'),
    image: 'images/places/choryuji01.webp',
  },
  {
    name: '弁天島の厳島神社',
    address: '青森県八戸市鮫町大作平45',
    memo: ['津波で鳥居が流失', '鳥居の一部が約7,000km離れたアメリカ西海岸に漂着', '返還された鳥居の一部を使って再建された'],
    status: 'interest',
    tags: ['神社', '震災', '鳥居', '海', '個人的興味'],
    mapUrl: mapSearch('青森県八戸市鮫町大作平45'),
    image: 'images/places/benten01.webp',
  },
  {
    name: '蕪嶋神社',
    address: '青森県八戸市鮫町鮫56-2',
    memo: ['社伝では1269年に江ノ島弁才天を勧進したのが始まり', '祭神は市寸嶋比売命、多紀理毘売命、多岐都比売命の宗像三女神', '蕪嶋の弁天様として信仰されてきた', '弁財天は商売繁盛や子授けにご利益があるとされる', '漁業の守り神でもある', 'ウミネコでも有名'],
    status: 'interest',
    tags: ['神社', '弁天', '宗像三女神', '漁業', 'ウミネコ'],
    mapUrl: mapSearch('青森県八戸市鮫町鮫56-2'),
    image: 'images/places/kabushima.jpg',
  },
  {
    name: '種差海岸',
    memo: ['八戸の代表的な海岸景勝地', '天然芝と海の景色', 'ミチル種差が取れない場合でも訪問候補', '蕪嶋神社、弁天島と合わせて海岸線ドライブに組み込みたい'],
    status: 'tentative',
    tags: ['海', '景色', 'ドライブ', '八戸'],
    mapUrl: mapSearch('種差海岸'),
    image: 'images/places/tanesashi.jpg',
  },
  {
    name: 'みろく横丁・八戸横丁群',
    memo: ['八戸中心街の夜候補', '車を置いて歩ける宿とセットで考える', '八戸中心街に泊まる日があれば行きたい'],
    status: 'tentative',
    tags: ['夜', '飲食', '横丁', '八戸中心街'],
    mapUrl: mapSearch('みろく横丁 八戸横丁群'),
    image: 'images/places/miroku.jpg',
  },
];

export const checklist: ChecklistItem[] = [
  { title: '航空券確認', note: '2026年9月ダイヤ公開後、全便を最終確認する', status: 'check', done: false },
  { title: '9/23 丘珠便確認', note: '三沢→丘珠 JAL2816 の運航有無を確認する', status: 'check', done: false },
  {
    title: '長流寺の墓参・法要確認',
    note: '0178-43-4468 へ電話。命日9/23（彼岸の中日で混雑）の墓参可否・法要の事前予約・お花/手桶/線香・駐車場・参拝可能時間を確認。帰り便 JAL154（三沢12:50発）に向け、空港まで約40分＋レンタカー返却・保安検査を見込み、遅くとも11:00頃には長流寺を出発する。',
    status: 'check',
    done: false,
  },
  {
    title: 'ホテル龍泉洞愛山(9/21) 予約済み',
    note: '1泊2名 2食付 31,480円(税込)。9/21予約済み・現地払い・日替わり家庭料理。',
    status: 'confirmed',
    done: true,
  },
  {
    title: '龍泉洞 最終入洞時刻の確認',
    note: 'TEL 0194-22-2566。何時までに入洞すれば見学可能か当日朝に確認',
    status: 'check',
    done: false,
  },
  { title: '宿予約', note: '思い出になる宿を軸に候補を絞る', status: 'tentative', done: false },
  { title: 'レンタカー予約', note: '三沢空港IN / 三沢空港OUTの貸出・返却時刻と料金を確認する', status: 'check', done: false },
  { title: '朝市営業確認', note: '祝日の営業状況を各市場で確認する', status: 'check', done: false },
  { title: '八食センター営業確認', note: '9/23は水曜祝日のため、営業カレンダー要確認', status: 'check', done: false },
  { title: 'Google Mapリンク整理', note: '宿・朝市・神社・海岸線のリンクを旅行前に整理する', status: 'tentative', done: false },
  { title: '予算整理', note: '宿、航空券、レンタカー、食費の概算をまとめる', status: 'tentative', done: false },
];
