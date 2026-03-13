// 東海道五十三次の宿場データ（起点：日本橋、終点：三条大橋を含めて全55）
const stations = [
  "日本橋", "品川宿", "川崎宿", "神奈川宿", "保土ヶ谷宿", "戸塚宿", "藤沢宿", "平塚宿", "大磯宿", "小田原宿",
  "箱根宿", "三島宿", "沼津宿", "原宿", "吉原宿", "蒲原宿", "由比宿", "興津宿", "江尻宿", "府中宿",
  "鞠子宿", "岡部宿", "藤枝宿", "島田宿", "金谷宿", "日坂宿", "掛川宿", "袋井宿", "見付宿", "浜松宿",
  "舞阪宿", "新居宿", "白須賀宿", "二川宿", "吉田宿", "御油宿", "赤坂宿", "藤川宿", "岡崎宿", "池鯉鮒宿",
  "鳴海宿", "宮宿", "桑名宿", "四日市宿", "石薬師宿", "庄野宿", "亀山宿", "関宿", "坂下宿", "土山宿",
  "水口宿", "石部宿", "草津宿", "大津宿", "三条大橋"
];

let currentIndex = 0;
let isAnimating = false;

// DOM要素の取得
const currentNameEl = document.getElementById("current-name");
const choicesContainer = document.getElementById("choices-container");
const progressFill = document.getElementById("progress-fill");
const progressText = document.getElementById("progress-text");
const feedbackOverlay = document.getElementById("feedback-overlay");
const feedbackMessage = document.getElementById("feedback-message");
const quizScreen = document.getElementById("quiz-screen");
const clearScreen = document.getElementById("clear-screen");
const restartBtn = document.getElementById("restart-btn");

// アプリケーションの初期化
function init() {
  currentIndex = 0;
  quizScreen.classList.add("active");
  quizScreen.classList.remove("hidden");
  clearScreen.classList.add("hidden");
  clearScreen.classList.remove("active");
  
  loadQuestion();
}

// 質問データの読み込みと表示
function loadQuestion() {
  // すべてクリアした場合
  if (currentIndex >= stations.length - 1) {
    showClearScreen();
    return;
  }

  isAnimating = false;
  
  // UIの更新
  currentNameEl.textContent = stations[currentIndex];
  updateProgress();

  // 選択肢の生成
  const correctAnswer = stations[currentIndex + 1];
  const dummyAnswers = generateDummyAnswers(correctAnswer);
  
  // 選択肢をシャッフル
  const allChoices = [correctAnswer, ...dummyAnswers];
  shuffleArray(allChoices);

  // ボタンの描画
  choicesContainer.innerHTML = "";
  allChoices.forEach(choice => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = choice;
    btn.addEventListener("click", () => handleChoice(choice, correctAnswer, btn));
    choicesContainer.appendChild(btn);
  });
}

// ダミーの選択肢（不正解）を2つ生成する（完全ランダム）
function generateDummyAnswers(correctAnswer) {
  const dummies = [];
  while (dummies.length < 2) {
    const randomIndex = Math.floor(Math.random() * stations.length);
    const candidate = stations[randomIndex];
    
    // 正解と同じでない、かつ、既に選ばれたダミーでもないものを選ぶ
    if (candidate !== correctAnswer && !dummies.includes(candidate)) {
      dummies.push(candidate);
    }
  }
  return dummies;
}

// 配列のシャッフル関数 (Fisher-Yates)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// 選択肢がクリックされた時の処理
function handleChoice(selectedChoice, correctAnswer, buttonEl) {
  if (isAnimating) return;
  isAnimating = true;

  const isCorrect = selectedChoice === correctAnswer;

  // ボタンにクラス付与（色変え）
  const allButtons = document.querySelectorAll(".choice-btn");
  allButtons.forEach(btn => {
    if (btn.textContent === correctAnswer) {
      btn.classList.add("correct");
    } else {
      btn.classList.add("wrong");
    }
  });

  // フィードバックの表示
  showFeedback(isCorrect, correctAnswer);

  // 少し待ってから次へ
  setTimeout(() => {
    hideFeedback();
    if (isCorrect) {
      currentIndex++;
      loadQuestion();
    } else {
      // 不正解の場合は同じ問題にとどまる
      isAnimating = false;
      // ボタンの状態を元に戻す
      allButtons.forEach(btn => {
        btn.classList.remove("correct", "wrong");
      });
    }
  }, 1500); // 1.5秒待機
}

// 正解・不正解表示
function showFeedback(isCorrect, correctAnswer) {
  feedbackOverlay.className = isCorrect ? "feedback-correct" : "feedback-wrong";
  
  if (isCorrect) {
    feedbackMessage.textContent = "正解！次へ進みます。";
  } else {
    feedbackMessage.textContent = `残念... 次の宿場は「${correctAnswer}」です。`;
  }
  
  feedbackOverlay.classList.remove("hidden");
}

function hideFeedback() {
  feedbackOverlay.classList.add("hidden");
}

// プログレスバーの更新
function updateProgress() {
  const progressPercent = (currentIndex / (stations.length - 1)) * 100;
  progressFill.style.width = `${progressPercent}%`;
  // 日本橋が1、品川が2...なので、currentIndex + 1 を表示
  progressText.textContent = `${currentIndex + 1} / ${stations.length}`;
}

// クリア画面の表示
function showClearScreen() {
  quizScreen.classList.remove("active");
  quizScreen.classList.add("hidden");
  clearScreen.classList.remove("hidden");
  clearScreen.classList.add("active");
}

// イベントリスナー
restartBtn.addEventListener("click", init);

// アプリ開始
window.onload = init;
