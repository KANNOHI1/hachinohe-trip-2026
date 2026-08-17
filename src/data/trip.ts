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

export type DayItem = {
  time: string;
  text: string;
};

export type DayPlan = {
  day: string;
  date: string;
  headline: string;
  stay: string;
  status: Status;
  items: DayItem[];
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
  image?: string;
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
    status: 'confirmed',
    note:
      'HAC運航。限定運航・1日1往復。往復とも航空券予約済み（2026-08-01時点）。',
    flights: [
      { route: '丘珠→三沢', flightNo: 'JAL2815', depart: '11:40', arrive: '12:40', isPrimary: true, primaryLabel: '奈緒美 行き' },
      {
        route: '三沢→丘珠',
        flightNo: 'JAL2816',
        depart: '13:10',
        arrive: '14:05',
        status: 'confirmed',
        isPrimary: true,
        primaryLabel: '奈緒美 帰り',
      },
    ],
  },
  {
    title: '東京（羽田）↔ 三沢',
    status: 'confirmed',
    note:
      'JAL・通年毎日運航。宏勇は JAL155（行き）・JAL154（帰り）を予約済み。9/23朝は長流寺墓参から12:50発へ逆算して動く。',
    flights: [
      { route: '羽田→三沢', flightNo: 'JAL153', depart: '08:15', arrive: '09:30' },
      {
        route: '羽田→三沢',
        flightNo: 'JAL155',
        depart: '10:45',
        arrive: '12:05',
        isPrimary: true,
        primaryLabel: '宏勇 行き',
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

export const dayPlans: DayPlan[] = [
  {
    day: 'Day 1',
    date: '9/20（日）',
    headline: '三沢で合流 → 航空祭を空港から眺めて離脱 → 根城',
    stay: 'ホテルアドレ（八戸）',
    status: 'tentative',
    items: [
      { time: '12:05', text: '宏勇 三沢着（JAL155）' },
      { time: '12:40', text: '奈緒美 三沢着（JAL2815）' },
      { time: '13:00', text: '三沢空港で合流・レンタカー受取' },
      { time: '13:30', text: '三沢基地航空祭の飛行展示を空港周辺から観覧（入場はしない・タイムテーブル次第）' },
      { time: '14:30', text: '三沢を離脱。帰宅ラッシュに巻き込まれる前に八戸へ' },
      { time: '15:15', text: '史跡 根城の広場（入場は16:30まで。この旅で確実に開くのは9/20だけ）' },
      { time: '17:00', text: 'ホテルアドレ チェックイン' },
      { time: '夜', text: '八戸で軽く夕食（横丁はDay3に取ってある）' },
    ],
  },
  {
    day: 'Day 2',
    date: '9/21（月・祝）',
    headline: '櫛引八幡宮に寄って南下 → 龍泉洞 → 岩泉泊',
    stay: 'ホテル龍泉洞愛山（岩泉）',
    status: 'tentative',
    items: [
      { time: '08:00', text: 'アドレで朝食（朝市は今回入れない）' },
      { time: '09:15', text: '櫛引八幡宮・国宝館（国宝館は水木休。9/21は開館）' },
      { time: '10:30', text: '八戸を出発、三陸道で南下' },
      { time: '12:30', text: '龍泉洞レストハウスで昼食（入洞券売場に併設・無休。岩泉炭鉱ホルモン鍋定食1,100円、めかぶそば650円）' },
      { time: '13:30', text: '龍泉洞（入洞1,100円・見学30〜40分。9月は18:00まで開洞なので時間は余裕。増水による閉洞だけ直前に確認）' },
      { time: '15:00', text: 'ホテル龍泉洞愛山 チェックイン（温泉「炭の湯」・2食付）' },
    ],
  },
  {
    day: 'Day 3',
    date: '9/22（火・休日）',
    headline: '三陸を北上して海岸線ドライブ → 八戸に戻って横丁',
    stay: 'ホテルアドレ（八戸）',
    status: 'tentative',
    items: [
      { time: '09:30', text: '愛山を出発、三陸沿いを北上' },
      { time: '11:00', text: '久慈で昼食。道の駅くじ「レストラン山海里」（久慈まめぶ汁・海鮮丼1,000〜2,000円台。大晦日と元日以外無休）' },
      { time: '13:00', text: '種差海岸（天然芝と海）' },
      { time: '14:00', text: '蕪嶋神社（ウミネコと弁天様）' },
      { time: '14:45', text: '弁天島の厳島神社（アメリカから還ってきた鳥居）' },
      { time: '16:00', text: '八食センター（9/22は9:00〜18:00で営業。厨スタジアムは21:00まで）' },
      { time: '17:00', text: 'ホテルアドレ チェックイン' },
      { time: '19:00', text: 'みろく横丁（飲むなら車を置いてタクシー）' },
    ],
  },
  {
    day: 'Day 4',
    date: '9/23（水・祝）',
    headline: '長流寺の墓参 → 三沢OUT',
    stay: '—',
    status: 'check',
    items: [
      { time: '08:00', text: 'アドレで朝食・チェックアウト' },
      { time: '09:00', text: '長流寺 墓参（命日・彼岸の中日）' },
      { time: '11:00', text: '長流寺を出発。ここが最終リミット' },
      { time: '11:40', text: '三沢空港着・レンタカー返却。昼は売店「スカイマート ビードル」（8:30〜19:30・保安検査前）で空弁を買って機内か到着後に。着席のレストランは時間的に厳しい' },
      { time: '12:50', text: '宏勇 JAL154 で羽田へ／13:10 奈緒美 JAL2816 で丘珠へ' },
    ],
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
    name: 'ホテルアドレ',
    address: '青森県八戸市長根2-5-1',
    memo: [
      '9/20・9/22の2泊とも予約済み（朝食込み・スイート禁煙）',
      'チェックイン17:00〜23:00／チェックアウト〜12:00',
      '敷地内無料駐車場（事前予約不要）・Wi-Fi無料',
      '長流寺まで車6分・中心街/みろく横丁まで車5分（長根公園そば）',
    ],
    price: ['1泊2名 朝食込 10,300円(税込) × 2泊'],
    airportDistance: '三沢空港まで約30分',
    hachinoheDistance: '八戸中心街まで車5分',
    status: 'confirmed',
    tags: ['八戸', '予約済み', '朝食込み', '空港30分'],
    mapUrl: mapSearch('青森県八戸市長根2-5-1 ホテルアドレ'),
    websiteUrl: 'https://couples.jp/hotel-details/54032',
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
    image: 'images/places/tatehana01.webp',
  },
  {
    name: '陸奥湊駅前朝市',
    businessDays: '月曜日〜土曜日 / 日曜日、第2土曜日は休み',
    hours: '午前3時頃〜正午頃',
    location: 'JR陸奥湊駅前',
    memo: ['JR八戸駅から約15分', '戦後から続くレトロな朝市', '海鮮丼が人気', '今回は朝の立ち寄り枠を取っていない（Day2朝=櫛引八幡宮、Day3朝=岩泉、Day4朝=長流寺）', '早起きできた日の飛び込み候補として残す'],
    status: 'check',
    mapUrl: mapSearch('JR陸奥湊駅前'),
    image: 'images/places/mutsuminato01.webp',
  },
  {
    name: '湊日曜朝市',
    businessDays: '毎週日曜日のみ',
    hours: '午前5時頃〜午前10時頃',
    location: 'JR陸奥湊駅周辺',
    memo: ['JR八戸駅から約15分', '館鼻岸壁朝市と同時開催', '地元密着型の落ち着いた朝市', '9/20は13:00合流なので間に合わない可能性が高い'],
    status: 'check',
    mapUrl: mapSearch('JR陸奥湊駅'),
    image: 'images/places/minatonichiyou.jpg',
  },
  {
    name: '八食センター',
    businessDays: '水曜日を除く毎日が基本 / お盆や年末年始は営業あり',
    hours: '午前9時〜午後6時',
    location: '八戸市河原木',
    memo: ['屋内型の巨大市場ビル', '朝市ではない', '全天候型', '買った食材を炭火で焼く七厘村が有名', 'Day3（9/22 火）の夕方に寄る。水曜定休なので9/22は営業の想定'],
    status: 'check',
    mapUrl: mapSearch('八戸市河原木 八食センター'),
    image: 'images/places/hasshokucenter.jpg',
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
      '年中無休だが、大雨・増水で予告なく閉洞する（2026/8/12の台風15号で通路が冠水し閉洞中）',
      '再開後も地底湖の透明度が戻るまで数週間かかる前例あり。直前に公式サイトとXで確認',
      '閉洞時は龍泉新洞科学館が無料開放される',
    ],
    status: 'tentative',
    tags: ['Day2', '龍泉洞', '鍾乳洞', '地底湖', '岩手', '岩泉'],
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
    tags: ['Day4', '八戸', '墓参', '命日9/23', '家族', '曹洞宗'],
    mapUrl: mapSearch('青森県八戸市吹上1-4-18'),
    image: 'images/places/choryuji01.webp',
  },
  {
    name: '史跡 根城の広場',
    address: '青森県八戸市根城字根城47',
    memo: [
      '南部師行が築いた根城の本丸を、発掘調査にもとづいて復元した史跡公園',
      '9:00〜17:00（入場は16:30まで）／本丸のみ有料・一般250円',
      '休館は月曜（祝日は開館）と「祝日の翌日」→ この旅で確実に開くのは9/20（日）だけ',
      '9/22（火）は祝日の翌日にあたり、その日自体も祝日という扱いが公式に明記されていないため、Day1に行く',
      '併設の八戸市博物館は2027年6月までリニューアル休館中だが、八戸市公式が「史跡根城の広場は通常通り開場」と明記（確認済み）',
      'TEL 0178-41-1726',
    ],
    status: 'tentative',
    tags: ['Day1', '八戸', '史跡', '城', '南部氏'],
    mapUrl: mapSearch('青森県八戸市根城字根城47 史跡根城の広場'),
    image: 'images/places/nejo.jpg',
  },
  {
    name: '櫛引八幡宮',
    address: '青森県八戸市八幡字八幡丁3',
    memo: [
      '南部一之宮。国宝の赤糸威鎧など、国宝の鎧2領を伝える',
      '国宝館 9:00〜17:00（最終入館16:30）・大人400円',
      '国宝館の休館は水・木曜 → 9/21（月・祝）は開館',
      'Day2の朝に立ち寄り、そのまま南下して龍泉洞へ向かう動線',
      'TEL 0178-27-3053',
    ],
    status: 'tentative',
    tags: ['Day2', '八戸', '神社', '国宝', '南部一之宮'],
    mapUrl: mapSearch('青森県八戸市八幡字八幡丁3 櫛引八幡宮'),
    image: 'images/places/kushihiki.jpg',
  },
  {
    name: '弁天島の厳島神社',
    address: '青森県八戸市鮫町大作平45',
    memo: ['津波で鳥居が流失', '鳥居の一部が約7,000km離れたアメリカ西海岸に漂着', '返還された鳥居の一部を使って再建された'],
    status: 'interest',
    tags: ['Day3', '神社', '震災', '鳥居', '海', '個人的興味'],
    mapUrl: mapSearch('青森県八戸市鮫町大作平45'),
    image: 'images/places/benten01.webp',
  },
  {
    name: '蕪嶋神社',
    address: '青森県八戸市鮫町鮫56-2',
    memo: ['社伝では1269年に江ノ島弁才天を勧進したのが始まり', '祭神は市寸嶋比売命、多紀理毘売命、多岐都比売命の宗像三女神', '蕪嶋の弁天様として信仰されてきた', '弁財天は商売繁盛や子授けにご利益があるとされる', '漁業の守り神でもある', 'ウミネコでも有名'],
    status: 'interest',
    tags: ['Day3', '神社', '弁天', '宗像三女神', '漁業', 'ウミネコ'],
    mapUrl: mapSearch('青森県八戸市鮫町鮫56-2'),
    image: 'images/places/kabushima.jpg',
  },
  {
    name: '種差海岸',
    memo: ['八戸の代表的な海岸景勝地', '天然芝と海の景色', 'ミチル種差が取れない場合でも訪問候補', '蕪嶋神社、弁天島と合わせて海岸線ドライブに組み込みたい'],
    status: 'tentative',
    tags: ['Day3', '海', '景色', 'ドライブ', '八戸'],
    mapUrl: mapSearch('種差海岸'),
    image: 'images/places/tanesashi.jpg',
  },
  {
    name: 'みろく横丁・八戸横丁群',
    memo: ['八戸中心街の夜スポット', 'アドレから車5分（飲むならタクシーで）', 'Day3（9/22）の夜に行く'],
    status: 'tentative',
    tags: ['Day3', '夜', '飲食', '横丁', '八戸中心街'],
    mapUrl: mapSearch('みろく横丁 八戸横丁群'),
    image: 'images/places/miroku.jpg',
  },
];

export const checklist: ChecklistItem[] = [
  { title: '航空券確認', note: '宏勇・奈緒美とも往復全便予約済み（2026-08-01）', status: 'confirmed', done: true },
  { title: '9/23 丘珠便確認', note: 'JAL2816 は航空券予約成立により運航確定', status: 'confirmed', done: true },
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
    title: '龍泉洞の再開・地底湖の透明度の確認',
    note: '2026/8/12の台風15号で増水・通路冠水のため閉洞中（8/17時点で再開告知なし）。9月の開洞は8:30〜18:00で13:30入洞なら時間の心配はなく、確認すべきは「開いているか」と「地底湖が濁っていないか」。2023年は8/14閉洞→9/2再開、その後も透明度回復に数週間を要した前例あり。公式サイトとXで再開告知を追い、直前に TEL 0194-22-2566',
    status: 'check',
    done: false,
  },
  { title: '宿予約', note: '全泊確定: 9/20・9/22 ホテルアドレ(朝食込10,300円/泊)、9/21 ホテル龍泉洞愛山。', status: 'confirmed', done: true },
  { title: 'レンタカー予約', note: '三沢空港IN / 三沢空港OUTの貸出・返却時刻と料金を確認する', status: 'check', done: false },
  {
    title: '根城の広場 開場確認',
    note: '博物館が長期休館中でも「史跡根城の広場は通常通り開場」と八戸市公式が明記（確認済み）。Day1(9/20 日)は休館ルールに掛からず開場。9/22(火)の扱いだけ公式に記載がないが、9/20固定なので日程への影響なし',
    status: 'confirmed',
    done: true,
  },
  { title: '朝市営業確認', note: '今回は朝の立ち寄り枠なし。早起きできた日の飛び込み用に営業日だけ把握しておく', status: 'check', done: false },
  {
    title: '八食センター営業確認',
    note: '公式営業カレンダーで9/20〜23の全日営業を確認済み。9/22(火)は市場棟・味横丁9:00〜18:00、厨スタジアム21:00まで。七厘村のラストオーダーだけ未確認（TEL 0178-29-4451）',
    status: 'confirmed',
    done: true,
  },
  { title: 'Google Mapリンク整理', note: '宿・朝市・神社・海岸線のリンクを旅行前に整理する', status: 'tentative', done: false },
  { title: '予算整理', note: '宿、航空券、レンタカー、食費の概算をまとめる', status: 'tentative', done: false },
];
