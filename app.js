const stations = [
  { name: "日本橋", meibutsu: "お江戸の中心・魚河岸", hintText: "📍日本橋のたもとには、1699年創業の鰹節専門店「にんべん」があり、現在も日本の出汁文化を支えています。阿部寛主演のドラマ『新参者』の舞台・人形町もすぐ近くです。" },
  { name: "品川宿", meibutsu: "海苔・品川女郎", hintText: "📍江戸前の「品川海苔」が名産でした。現在、京急の北品川駅周辺から青物横丁にかけて、旧東海道の面影を残す商店街が続き、映画『シン・ゴジラ』でゴジラが上陸した舞台でもあります。" },
  { name: "川崎宿", meibutsu: "厄除け大師・奈良茶飯", hintText: "📍川崎大師（平間寺）は初詣客で全国トップクラスです。名物の「久寿餅（くずもち）」は、住吉などの老舗で今も食べられます。小麦粉を発酵させた独特の風味が特徴です。" },
  { name: "神奈川宿", meibutsu: "台町茶屋・海の眺め", hintText: "📍かつては海沿いの景勝地で、幕末には各国の領事館が置かれました。現在の横浜駅のおひざ元にあたり、近くの「田中家」は広重の浮世絵にも描かれた老舗料亭で、現在も営業を続けています。" },
  { name: "保土ヶ谷宿", meibutsu: "権太坂・松並木", hintText: "📍箱根駅伝の「花の2区」にも登場する難所「権太坂」があります。周辺には江戸時代の松並木がわずかに残っており、当時の旅人の気分を味わえます。" },
  { name: "戸塚宿", meibutsu: "しがらき茶屋（沢庵）", hintText: "📍江戸を出て最初の宿泊地として栄えました。広重の絵に描かれた「こめや」など、当時の屋号を継ぐお店が今も残っています。箱根駅伝の戸塚中継所としても有名です。" },
  { name: "藤沢宿", meibutsu: "遊行寺・江の島道", hintText: "📍時宗の総本山「遊行寺」の門前町であり、江の島への分岐点（江の島道）でもありました。現在でも当時の「ふじさわ宿」の看板や蔵などが街のあちこちに点在しています。" },
  { name: "平塚宿", meibutsu: "高麗山・花水橋", hintText: "📍平塚の特産品といえば「落花生」や「弦斎カレーパン」が有名です。毎年7月に開催される「湘南ひらつか七夕まつり」は関東三大七夕祭りの一つとして多くの人で賑わいます。" },
  { name: "大磯宿", meibutsu: "虎御前・鴫立庵", hintText: "📍明治以降、伊藤博文や吉田茂など歴代首相の別荘が建てられた「政界の奥座敷」です。名菓「虎子（とらご）まんじゅう」や、老舗蒲鉾店「井上蒲鉾店」のはんぺんが人気です。" },
  { name: "小田原宿", meibutsu: "小田原城・ういろう・かまぼこ", hintText: "📍箱根越えの拠点で、練り物（かまぼこ）が日本一有名です。また、室町時代から600年続く薬と菓子の老舗「ういろう」の店舗（お城のような外観）は現在も営業中です。" },
  { name: "箱根宿", meibutsu: "箱根の関所・芦ノ湖", hintText: "📍「天下の険」と呼ばれる東海道最大の難所でした。「箱根関所」は完全復元されており江戸時代の厳しい取り調べの跡を見学できます。黒たまごや箱根の温泉宿は現代でも大人気です。" },
  { name: "三島宿", meibutsu: "三嶋大社・うなぎ", hintText: "📍富士山の伏流水で泥を吐かせた「三島のうなぎ」は絶品で、『桜家』などの老舗は常に行列が絶えません。三嶋大社は源頼朝が深く信仰したことでも知られ、ドラマ『鎌倉殿の13人』ゆかりの地です。" },
  { name: "沼津宿", meibutsu: "千本松原・富士山の眺め", hintText: "📍駿河湾の新鮮な魚介が並ぶ「沼津港」がすぐ近く。近年はアニメ『ラブライブ！サンシャイン!!』の聖地としても世界中からファンが訪れる活気ある港町です。" },
  { name: "原宿", meibutsu: "浮島沼・富士の絶景", hintText: "📍広重の浮世絵の中で、富士山が最も大きく美しく描かれている場所です。現代の東京「原宿」とは全くの別物で、静岡県沼津市の一部です。「原の白隠さん」として知られる白隠禅師のゆかりの地です。" },
  { name: "吉原宿", meibutsu: "左富士", hintText: "📍江戸から京都へ向かう際、富士山は常に右側に見えますが、ここの松並木だけは道が大きく蛇行するため「左富士（左側に富士山が見える）」と呼ばれる名所でした。現在の富士市周辺です。" },
  { name: "蒲原宿", meibutsu: "夜之雪（広重の傑作）", hintText: "📍広重の浮世絵「夜之雪」が世界的にも非常に有名です（実際には雪はめったに降らない場所です）。イルカのすまし汁などの独特の食文化がある海沿いの待ちです。" },
  { name: "由比宿", meibutsu: "さった峠・桜えび", hintText: "📍日本で唯一、駿河湾でのみ水揚げされる「桜えび」の町として有名。「さった峠」からの富士山の絶景は、国道1号線と東名高速道路、東海道本線が交差する現代の交通の難所でもあります。" },
  { name: "興津宿", meibutsu: "清見寺・興津鯛", hintText: "📍徳川家康が愛した「清見寺」があり、晩年もよく訪れたと言われます。名物は薄塩の鯛の一夜干し「興津鯛（おきつだい）」で、家康も好んで食べたと伝わっています。" },
  { name: "江尻宿", meibutsu: "三保の松原・巴川", hintText: "📍『ちびまる子ちゃん』の舞台として有名な静岡市清水区（旧清水市）の中心部です。清水港には「清水まつり」や「次郎長」の歴史があり、マグロの水揚げは日本一を誇ります。" },
  { name: "府中宿", meibutsu: "駿府城・安倍川もち", hintText: "📍徳川家康が晩年を過ごした「駿府城」の城下町です。名物の「安倍川もち」は、家康が名前を付けたという逸話があり、現在も「石部屋（せきべや）」などの老舗でつきたてを味わえます。" },
  { name: "鞠子宿", meibutsu: "丁子屋のとろろ汁", hintText: "📍広重の絵にも描っかった名物「とろろ汁」の老舗「丁子屋」は、1596年の創業から現在まで同じ場所で営業を続けています。茅葺き屋根の建物で食べる麦飯ロマンは格別です。" },
  { name: "岡部宿", meibutsu: "宇津ノ谷峠・十団子", hintText: "📍「大旅籠 柏屋（かしばや）」という江戸時代の豪華な宿の建物が当時のまま保存されており、内部を見学できます。昔ながらの「十団子（とおだんご）」という魔除けの小さなお菓子が名物でした。" },
  { name: "藤枝宿", meibutsu: "瀬戸の染飯・蓮華寺池", hintText: "📍名物「瀬戸の染飯（そめいい）」は、クチナシの実で黄色く染め、疲労回復を願って食べられたおこわです。現代の藤枝市は「サッカーの街」としても全国的に有名です。" },
  { name: "島田宿", meibutsu: "大井川川越し・島田髷", hintText: "📍「箱根八里は馬でも越すが、越すに越されぬ大井川」で知られる川越しの拠点です。現在でも川越し遺跡が残り、「世界一長い木造歩道橋（蓬莱橋）」は映画や時代劇のロケ地として頻繁に使われます。" },
  { name: "金谷宿", meibutsu: "大井川・牧之原台地", hintText: "📍大井川を挟んで島田宿の対岸に位置します。背後には東洋一の茶園「牧之原台地」が広がり、現在も「静岡茶（金谷茶）」の一大産地として美しい茶畑の風景を見ることができます。" },
  { name: "日坂宿", meibutsu: "小夜の中山・夜泣き石", hintText: "📍東海道の三大難所の一つ「小夜の中山（さよのなかやま）」峠を含みます。殺された妊婦の霊が乗り移って泣いたという伝説の「夜泣き石」があり、名物の「子育て飴」が現在も売られています。" },
  { name: "掛川宿", meibutsu: "掛川城・葛布", hintText: "📍山内一豊が城主を務めた「掛川城」の城下町であり、NHK大河ドラマ『功名が辻』の舞台です。葛（くず）の繊維で織った「葛布（かっぷ）」が特産品として知られています。" },
  { name: "袋井宿", meibutsu: "東海道どまん中・厄除け団子", hintText: "📍53次のちょうど真ん中（27番目）にあたるため「東海道どまん中」をキャッチコピーにしています。法多山の「厄除けだんご」は、串が5本刺さった特徴的な形で、静岡県民のソウルフードの一つです。" },
  { name: "見付宿", meibutsu: "見付天神・遠江国府", hintText: "📍「見付天神（矢奈比賣神社）」には、妖怪ヒヒを退治したと伝わる霊犬「悉平太郎（しっぺいたろう）」の伝説があります。磐田市の公式キャラ「しっぺい」のモデルです。" },
  { name: "浜松宿", meibutsu: "浜松城・うなぎ", hintText: "📍徳川家康が青年期を過ごした「出世城」浜松城の城下町です。名物の「浜松うなぎ」や「浜松餃子」の激戦区であり、ヤマハやスズキなど世界的メーカーの発祥地でもあります。" },
  { name: "舞阪宿", meibutsu: "今切の渡し・雁木", hintText: "📍浜名湖の入り口にあたる宿場です。ここから船に乗って次の新居宿まで浜名湖を渡りました。現在も船着き場である「雁木（がんげ）」の石垣が当時の姿のまま残っています。" },
  { name: "新居宿", meibutsu: "新居関所・白須賀の眺め", hintText: "📍箱根と並んで全国的に現存する唯一の関所建物「新居関所」が残っています。特に「入り鉄砲に出女」を厳しく取り締まった場所で、当時の歴史的建造物をそのまま見学できます。" },
  { name: "白須賀宿", meibutsu: "汐見坂・柏餅", hintText: "📍京都から江戸へ向かう旅人が、初めて富士山と太平洋の青い海を同時に見ることができる「汐見坂」の絶景が有名でした。名物「柏餅」のお店（山中屋）は今も営業しています。" },
  { name: "二川宿", meibutsu: "本陣資料館・かしわ餅", hintText: "📍現在の愛知県豊橋市の一部。大名が泊まる「本陣」、一般人が泊まる「旅籠（はたご）」、その両方が現存し、当時の姿をそのまま公開している全国でも珍しい宿場町です。" },
  { name: "吉田宿", meibutsu: "吉田城・豊川橋", hintText: "📍豊橋市の中心部です。豊川に架かる「豊川橋」は東海道でも屈指の長く美しい鉄橋でした。名物は、ご飯の下に具材を隠した「豊橋カレーうどん」や、ご当地お菓子の「ブラックサンダー」（発祥の地）です。" },
  { name: "御油宿", meibutsu: "松並木・とめる女（客引き）", hintText: "📍「御油の松並木」は国の天然記念物に指定されており、約300本の巨大な松が両側に並ぶ圧巻の景色を楽しめます。広重の絵では、旅籠の強引な「客引き女」がコミカルに描かれています。" },
  { name: "赤坂宿", meibutsu: "旅籠大橋屋・飯盛女", hintText: "📍御油宿からわずか2kmしか離れておらず、東海道で最も宿場間の距離が短い区間です。広重も描いた豪華な旅籠「大橋屋」は、なんと2015年まで実際に旅館として営業を続けていました。" },
  { name: "藤川宿", meibutsu: "むらさき麦・棒鼻", hintText: "📍江戸時代から背が高い「むらさき麦」という麦が名産で、松尾芭蕉も句に詠んでいます。現在も町おこしでむらさき麦が栽培され、うどんや焼酎が販売されています。" },
  { name: "岡崎宿", meibutsu: "岡崎城・八丁味噌", hintText: "📍徳川家康の生誕地「岡崎城」の城下町です。岡崎城から西へ八丁（約870m）の場所で作られている伝統的な「八丁味噌」は、「カクキュー」などの巨大な味噌蔵が現在も稼働し、工場見学が人気です。" },
  { name: "池鯉鮒宿", meibutsu: "馬市・大あんまき", hintText: "📍現在の「知立（ちりゅう）市」です。毎年巨大な「馬市（馬の取引市場）」が開かれ賑わいました。名物は、小麦粉の皮でたっぷりの餡を巻いた和菓子「大あんまき」で、藤田屋などが有名です。" },
  { name: "鳴海宿", meibutsu: "有松絞り・鳴海絞り", hintText: "📍現在の名古屋市緑区。伝統工芸品「有松・鳴海絞り」という独特の染物が特産品で、手作業で布を細かく括って染める技術は現在も服飾ブランド等で注目されています。古い町並みも美しく残っています。" },
  { name: "宮宿", meibutsu: "熱田神宮・七里の渡し", hintText: "📍三種の神器の一つ「草薙剣」を祀る「熱田神宮」の門前町。三英傑（信長・秀吉・家康）全員にゆかりがあります。「あつた蓬莱軒」のひつまぶしや「きよめ餅」が絶品です。" },
  { name: "桑名宿", meibutsu: "焼き蛤・七里の渡し", hintText: "📍「その手は桑名の焼き蛤」という地口（ダジャレ）で有名なほど、ハマグリが名産です。「七里の渡し」の到着地として大きな鳥居が海辺に建っており、伊勢国（三重県）の入り口を象徴しています。" },
  { name: "四日市宿", meibutsu: "那古野・三重川", hintText: "📍古くから「四の付く日」に巨大な市が立ったことが市名の由来です。名物の「なが餅」は、細長く伸ばした平たい餅で餡を包み、表面を香ばしく焼いたお菓子で、「笹井屋」という老舗が有名です。" },
  { name: "石薬師宿", meibutsu: "石薬師寺・蒲桜", hintText: "📍現在の三重県鈴鹿市。「石薬師寺」というお寺を中心とする小さな宿場でした。歌人・佐佐木信綱の故郷であり、近年ではF1日本グランプリが開催される「鈴鹿サーキット」がある街として世界的知名度を誇ります。" },
  { name: "庄野宿", meibutsu: "白雨（広重の傑作）", hintText: "📍広重の東海道五十三次の中でも最高傑作と評される「庄野の白雨（にわか雨に向かって走る旅人たち）」が描かれた場所です。実際には小さな宿場でしたが、この一枚の絵によって歴史に名が刻まれました。" },
  { name: "亀山宿", meibutsu: "亀山城・雪晴", hintText: "📍急な坂の上に建つ「亀山城」の城下町でした。現在はローソクの国内シェアトップの「カメヤマローソク」発祥の地として、またシャープの液晶テレビ（世界の亀山ブランド）の工場があったことで知られています。" },
  { name: "関宿", meibutsu: "古い町並み・地蔵院", hintText: "📍東海道の中で「江戸時代の町並み」が最も完璧な形で広範囲に保存されている奇跡の宿場町です。約200棟の古い町屋が並び、時代劇のロケ地に迷い込んだような圧倒的な没入感を体験できます。" },
  { name: "坂下宿", meibutsu: "鈴鹿峠・筆捨山", hintText: "📍西の難所「鈴鹿峠」の麓にある宿場です。近くにある「筆捨山」は、昔、有名な絵師の狩野元信がこの山の風景を描こうとしたが複雑すぎて筆を投げ捨てた、という伝説が残っています。" },
  { name: "土山宿", meibutsu: "春の雨・お茶", hintText: "📍滋賀県（近江国）最初の宿場。「坂は照る照る 鈴鹿は曇る あいの土山 雨が降る」と馬子唄に歌われたように、雨が多い地域。その気候を生かした「土山茶」という濃厚で美味しいお茶が名産品です。" },
  { name: "水口宿", meibutsu: "水口干瓢（かんぴょう）", hintText: "📍水口城の城下町。名産品の「干瓢（かんぴょう）」は、夕顔の実を薄く紐状に剥いて天日干しにしたもので、広重の絵にも軒下に白い干瓢が干されている様子が描かれています。" },
  { name: "石部宿", meibutsu: "京立ち石部泊まり・田楽", hintText: "📍「京立ち 石部泊まり」と言葉があるように、京都を出発した旅人が1日目の夜に宿泊する定番の場所として栄えました。「田楽（お豆腐に味噌を塗って焼いた郷土料理）」を出す茶屋が名物でした。" },
  { name: "草津宿", meibutsu: "草津本陣・中山道分岐", hintText: "📍東海道と、もう一つの主要街道である「中山道（なかせんどう）」が合流する超重要拠点で、信じられないほどの交通量を誇りました。現存する「草津宿本陣」は国内最大級の規模で、新選組の土方歳三なども宿泊した記録が残っています。" },
  { name: "大津宿", meibutsu: "三井寺・大津絵・琵琶湖", hintText: "📍京都の直前、東海道最大の宿場（現在の滋賀県大津市）です。「大津絵」という独特のコミカルな民画が旅の土産として大ブームになりました。日本最大の湖「琵琶湖」を眺めながら、いよいよゴールの京都へ入ります。" },
  { name: "三条大橋", meibutsu: "京都・鴨川・旅の終点", hintText: "📍【ゴール】京都の真ん中、鴨川に架かる三条大橋。江戸から約490キロ、約2週間の徒歩の旅の終着点です。幕末には新選組による「池田屋事件」の舞台となり、橋の擬宝珠（ぎぼし）には今も当時の刀傷が残っています。お疲れ様でした！" }
];

// ブロックの定義
const blocks = [
  { name: "1: 東京・神奈川", start: 0, end: 9 },
  { name: "2: 箱根・静岡東部", start: 10, end: 15 },
  { name: "3: 静岡中部", start: 16, end: 24 },
  { name: "4: 静岡西部", start: 25, end: 33 },
  { name: "5: 愛知", start: 34, end: 42 },
  { name: "6: 三重・近江・京都", start: 43, end: 54 }
];

let currentStations = []; // 今回学習/クイズの対象となる宿場サブセット
let currentIndex = 0;
let isAnimating = false;
let currentMode = "all"; // "all" or "block"

// DOM要素
const screens = ["home-screen", "study-screen", "quiz-screen", "clear-screen"];
const currentNameEl = document.getElementById("current-name");
const choicesContainer = document.getElementById("choices-container");
const progressFill = document.getElementById("progress-fill");
const progressText = document.getElementById("progress-text");
const feedbackOverlay = document.getElementById("feedback-overlay");
const feedbackMessage = document.getElementById("feedback-message");
const studyListEl = document.getElementById("study-list");
const studyTitleEl = document.getElementById("study-title");
const startQuizBtn = document.getElementById("start-quiz-btn");
const mapPin = document.getElementById("map-pin");
const pinLabel = document.getElementById("pin-label");

// 画面切り替えユーティリティ
function showScreen(screenId) {
  screens.forEach(id => {
    const el = document.getElementById(id);
    if (id === screenId) {
      el.classList.remove("hidden");
      el.classList.add("active");
    } else {
      el.classList.add("hidden");
      el.classList.remove("active");
    }
  });
}

// モード選択（Homeから呼ばれる）
function selectMode(type, blockIdx = null) {
  currentMode = type;
  
  if (type === "all") {
    currentStations = [...stations];
    startStudyPhase("全問踏破コース");
  } else {
    const block = blocks[blockIdx];
    currentStations = stations.slice(block.start, block.end + 1);
    startStudyPhase(block.name);
  }
}

// 学習フェーズの開始
function startStudyPhase(title) {
  studyTitleEl.textContent = title;
  studyListEl.innerHTML = "";
  
  // 今日の学習内容をリスト化
  currentStations.forEach(s => {
    const div = document.createElement("div");
    div.className = "study-item";
    div.innerHTML = `<span class="name">${s.name}</span><p class="desc">${s.hintText}</p>`;
    studyListEl.appendChild(div);
  });
  
  showScreen("study-screen");
}

// クイズ開始
startQuizBtn.onclick = () => {
  currentIndex = 0;
  showScreen("quiz-screen");
  loadQuestion();
};

// 質問データの読み込み
function loadQuestion() {
  if (currentIndex >= currentStations.length - 1) {
    showClearScreen();
    return;
  }

  isAnimating = false;
  
  // UI更新
  const s = currentStations[currentIndex];
  currentNameEl.textContent = s.name;
  
  const meibutsuEl = document.getElementById("current-meibutsu");
  if (meibutsuEl) meibutsuEl.textContent = s.meibutsu;

  const hintTextEl = document.getElementById("current-hint-text");
  if (hintTextEl) hintTextEl.textContent = s.hintText;

  // ルートマップのピン更新
  updateMapPin(s);
  updateProgress();

  // 選択肢
  const correctAnswer = currentStations[currentIndex + 1].name;
  const dummyAnswers = generateDummyAnswers(correctAnswer);
  const allChoices = [correctAnswer, ...dummyAnswers];
  shuffleArray(allChoices);

  choicesContainer.innerHTML = "";
  allChoices.forEach(choice => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = choice;
    btn.onclick = () => handleChoice(choice, correctAnswer);
    choicesContainer.appendChild(btn);
  });
}

// マップピンの更新
function updateMapPin(station) {
  // 元のstations配列でのインデックスを探して全行程での位置を出す
  const globalIndex = stations.findIndex(s => s.name === station.name);
  const progressRatio = globalIndex / (stations.length - 1);
  const currentLeft = 5 + (progressRatio * 90);
  
  mapPin.style.left = `${currentLeft}%`;
  pinLabel.textContent = station.name;
}

function generateDummyAnswers(correctAnswer) {
  const dummies = [];
  while (dummies.length < 2) {
    const randomIndex = Math.floor(Math.random() * stations.length);
    const candidate = stations[randomIndex].name;
    if (candidate !== correctAnswer && !dummies.includes(candidate)) {
      dummies.push(candidate);
    }
  }
  return dummies;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function handleChoice(selectedChoice, correctAnswer) {
  if (isAnimating) return;
  isAnimating = true;

  const isCorrect = selectedChoice === correctAnswer;

  // フィードバック表示
  feedbackOverlay.className = isCorrect ? "feedback-correct" : "feedback-wrong";
  feedbackMessage.textContent = isCorrect ? "正解！次へ進みます。" : `残念... 次は「${correctAnswer}」です。`;
  feedbackOverlay.classList.remove("hidden");

  setTimeout(() => {
    feedbackOverlay.classList.add("hidden");
    if (isCorrect) {
      currentIndex++;
      loadQuestion();
    } else {
      isAnimating = false;
    }
  }, 1500);
}

function updateProgress() {
  const progressPercent = (currentIndex / (currentStations.length - 1)) * 100;
  progressFill.style.width = `${progressPercent}%`;
  progressText.textContent = `${currentIndex + 1} / ${currentStations.length}`;
}

function showClearScreen() {
  const clearTitle = document.getElementById("clear-title");
  const clearMsg = document.getElementById("clear-message");
  
  if (currentMode === "all") {
    clearTitle.textContent = "東海道 踏破達成！";
    clearMsg.textContent = "江戸から京都までの全宿場を完全制覇しました。おめでとうございます！";
  } else {
    clearTitle.textContent = "コース完了！";
    clearMsg.textContent = "このブロックの宿場をマスターしました。この調子で次のブロックへ進みましょう。";
  }
  
  showScreen("clear-screen");
}

// 初回起動
window.onload = () => showScreen("home-screen");
