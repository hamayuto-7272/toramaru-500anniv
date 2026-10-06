/* =========================================================
   要素取得
========================================================= */

const startButton = document.getElementById("startButton");

const toramaruWrapper =
  document.getElementById("toramaruWrapper");

const toramaru =
  document.getElementById("toramaru");

const speechBubble =
  document.getElementById("speechBubble");

const nextButton =
  document.getElementById("nextButton");

const backButton =
  document.getElementById("backButton");

const curtain =
  document.getElementById("curtain");

const endRoll =
  document.getElementById("endRoll");

const endRollContent =
  document.querySelector(".end-roll-content");


/* =========================================================
   画像
========================================================= */

const normalImage =
  "images/toramaru.png";

const angryImage =
  "images/toramaru-angry.png";

const angry2Image =
  "images/toramaru-angry2.png";

const letterImage =
  "images/toramaru-letter.png";

const magaoImage =
  "images/toramaru-magao.png";

const readImage =
  "images/toramaru-reading.png";

const aseri1Image =
  "images/toramaru-aseri1.png";

const aseri2Image =
  "images/toramaru-aseri2.png";

const aseri3Image =
  "images/toramaru-aseri3.png";

const aseri4Image =
  "images/toramaru-aseri4.png";

const kooruImage =
  "images/toramaru-kooru.png";


/* =========================================================
   シーン
========================================================= */

const scenes = [

  {
    text: "おう！ おいらはトラまるってんだ！",
    image: normalImage
  },

  {
    text: "なんでも今日は500日記念らしいじゃねえか！",
    image: normalImage
  },

  {
    text: "500日も続いてるなんてすげえな！ 感謝しろー！",
    image: normalImage,
    shake: true
  },

  {
    text: "ちなみにオレはズートピアのトラじゃねえからな！",
    image: normalImage
  },

  {
    text: "本当にむかつくぜ！",
    image: angryImage,
    shake: true
  },

  {
    text: "まあそんなことはどうでもいい！",
    image: normalImage
  },

  {
    text: "今日はあんたに伝えたいことがあるんだ。",
    image: normalImage
  },

  {
    text: "付き合って500日って、改めて考えるとすげえよな。",
    image: magaoImage
  },

  {
    text: "そこで、あんたが書いた手紙を預かってきたぜ。",
    image: letterImage
  },

  {
    text: "ほらよ。ちゃんと読めよ！",
    image: letterImage
  },

  {
    text: "情けないヤツだなー！！",
    image: angry2Image,
    shake: true
  },

  {
    text: "……ん？",
    image: readImage
  },

  {
    text: "インターネットにアップロードするのでセキュリティの都合上とても不気味ですが「私」と「あなた」、「ですます調」で言わせてください。",
    image: readImage
  },

  {
    text: "付き合って500日経っても変わらず大好きです。",
    image: readImage
  },

  {
    text: "あなたの全てが大好きですが、なんといってもやはり笑顔がたまらなく好きです。",
    image: readImage
  },

  {
    text: "あなたの笑顔を見ると、嫌なことやストレスも全部吹き飛びます。",
    image: readImage
  },

  {
    text: "これからもずっとあなたのそばにいたいです。",
    image: readImage
  },

  {
    text: "約1年前、私が入院して手術をしたときも、あなたは心配して泣いてくれましたね。",
    image: readImage
  },

  {
    text: "あのとき、あなたが泣いてくれたことが嬉しかったです。",
    image: readImage
  },

  {
    text: "あなたの涙は絶対に忘れません。",
    image: readImage
  },

  {
    text: "本当にありがとう。",
    image: readImage
  },

  {
    text: "実はもう一つ、重い病気があるんです。",
    image: readImage
  },

  {
    text: "もう治らないかもしれません。",
    image: readImage
  },

  {
    text: "ダイスキダイスキ病です。",
    image: aseri1Image,
    shake: true
  },

  {
    text: "さすがあなたですね！ よくここまで付き合ってくれました！",
    image: aseri1Image
  },

  {
    text: "ちなみにこのギャグ、AIに考えてもらいました。",
    image: aseri2Image,
    shake: true
  },

  {
    text: "AIが「これは面白いです！」って言ってました。",
    image: aseri3Image,
    shake: true
  },

  {
    text: "こんなつまらないギャグを考えるなんて、AIもまだまだですね。",
    image: aseri4Image,
    shake: true
  },

  {
    text: "……今のはちょっと寒かったですね。",
    image: kooruImage,
    shake: true
  },

  {
    text: "冬に言うにはちょうどいいギャグだったな。",
    image: letterImage,
    shake: true
  },

  {
    text: "そして、4月からあなたは先生になりますね。",
    image: readImage
  },

  {
    text: "先生になるって聞いたとき、すごいなって思いました。",
    image: readImage
  },

  {
    text: "これまで頑張ってきたことが、少しずつ形になっていくんだなと思います。",
    image: readImage
  },

  {
    text: "これからも、あなたらしく成長していってください。",
    image: readImage
  },

  {
    text: "でも、ちょっと心配でもあります。",
    image: readImage
  },

  {
    text: "部活や準備で忙しくなって、無理をしすぎないか心配です。",
    image: readImage
  },

  {
    text: "あなたが楽しいと思っていることは分かっています。",
    image: readImage
  },

  {
    text: "でも、ちゃんと休むことも大切です。",
    image: readImage
  },

  {
    text: "（まあ、あなた自身も部活めんどくさいって言ってましたけどね。）",
    image: readImage
  },

  {
    text: "私は、あなたには自分自身のことを一番大切にしてほしいです。",
    image: readImage
  },

  {
    text: "あなたは私にとって、一番大切な人です。",
    image: readImage
  },

  {
    text: "これからもずっと一緒にいたいです。",
    image: readImage
  },

  {
    text: "嬉しいときも、つらいときも、私はあなたの味方です。",
    image: readImage
  },

  {
    text: "（コロナのときも本当に大変でしたね。）",
    image: readImage
  },

  {
    text: "これから先、あなたが大きな目標に向かっていく姿をずっと応援しています。",
    image: readImage
  },

  {
    text: "そして、いつかあなたと結婚して、あなたを幸せにしたいです。",
    image: readImage
  },

  {
    text: "私はアクチュアリーになって、エロデータサイエンティストにもなります。",
    image: readImage
  },

  {
    text: "やはり！ そういうことだったんですね！",
    image: readImage
  },

  {
    text: "そうです。",
    image: readImage
  },

  {
    text: "アクチュアリーでもデータサイエンティストでもありません。",
    image: aseri3Image
  },

  {
    text: "ただのエロい人です。",
    image: aseri3Image
  },

  {
    text: "これからも、あなたのために頑張ります。",
    image: readImage
  },

  {
    text: "疲れたときは、たくさん甘えさせてください。",
    image: readImage
  },

  {
    text: "そして、また新しい500日を一緒に過ごしましょう。",
    image: readImage
  },

  {
    text: "500日経っても、変わらず大好きです。",
    image: normalImage,
    shake: true
  },

  {
    text: "それじゃあ、またな！",
    image: normalImage
  }

];


/* =========================================================
   状態
========================================================= */

let currentScene = 0;

let hasAppeared = false;

let isEnding = false;

let sceneTimer = null;


/* =========================================================
   シーン表示
========================================================= */

function updateScene() {

  if (!scenes[currentScene]) {
    return;
  }

  const scene = scenes[currentScene];


  /* セリフ */

  speechBubble.textContent =
    scene.text;


  /* 画像 */

  toramaru.src =
    scene.image;


  /* 怒りのアニメーションをリセット */

  toramaru.classList.remove(
    "angry-shake"
  );


  /* 次のフレームで再適用 */

  requestAnimationFrame(() => {

    if (scene.shake) {

      toramaru.classList.add(
        "angry-shake"
      );

    }

  });


  /* 戻るボタン */

  if (currentScene === 0) {

    backButton.style.display =
      "none";

  } else {

    backButton.style.display =
      "block";

  }


  /* 次へボタン */

  if (
    currentScene ===
    scenes.length - 1
  ) {

    nextButton.textContent =
      "エンディングへ";

  } else {

    nextButton.textContent =
      "次へ ▶";

  }

}


/* =========================================================
   スタート
========================================================= */

startButton.addEventListener(
  "click",
  () => {

    if (hasAppeared) {
      return;
    }

    hasAppeared = true;

    startButton.style.display =
      "none";


    toramaruWrapper.classList.add(
      "show"
    );


    setTimeout(() => {

      currentScene = 0;

      updateScene();

      speechBubble.style.opacity =
        "1";

      nextButton.style.display =
        "block";

    }, 1200);

  }
);


/* =========================================================
   次へ
========================================================= */

nextButton.addEventListener(
  "click",
  () => {

    if (isEnding) {
      return;
    }


    if (
      currentScene <
      scenes.length - 1
    ) {

      currentScene++;

      changeScene();

    } else {

      startEnding();

    }

  }
);


/* =========================================================
   戻る
========================================================= */

backButton.addEventListener(
  "click",
  () => {

    if (isEnding) {
      return;
    }


    if (currentScene > 0) {

      currentScene--;

      changeScene();

    }

  }
);


/* =========================================================
   シーン切り替え
========================================================= */

function changeScene() {

  clearTimeout(sceneTimer);


  speechBubble.style.opacity =
    "0";


  sceneTimer = setTimeout(() => {

    updateScene();

    speechBubble.style.opacity =
      "1";

  }, 250);

}


/* =========================================================
   トラまるの現在位置を完全固定
========================================================= */

function freezeToramaruPosition() {

  const rect =
    toramaruWrapper.getBoundingClientRect();


  /*
   * 登場アニメーションなどを
   * 完全に停止
   */

  toramaruWrapper.style.animation =
    "none";


  /*
   * 現在の画面上の位置を
   * left / top で固定
   */

  toramaruWrapper.style.left =
    `${rect.left}px`;

  toramaruWrapper.style.top =
    `${rect.top}px`;

  toramaruWrapper.style.bottom =
    "auto";

  toramaruWrapper.style.transform =
    "none";


  /*
   * 退場開始位置
   */

  toramaruWrapper.style.setProperty(
    "--exit-start-left",
    `${rect.left}px`
  );


  /*
   * 画面右側へ完全に出る位置
   */

  toramaruWrapper.style.setProperty(
    "--exit-end-left",
    `${window.innerWidth + rect.width + 50}px`
  );

}


/* =========================================================
   エンディング開始
========================================================= */

function startEnding() {

  if (isEnding) {
    return;
  }

  isEnding = true;


  clearTimeout(sceneTimer);


  /*
   * UIを消す
   */

  speechBubble.style.opacity =
    "0";

  nextButton.style.display =
    "none";

  backButton.style.display =
    "none";


  /*
   * トラまるの現在位置を固定
   */

  freezeToramaruPosition();


  /*
   * 少し間を置いて退場
   */

  setTimeout(() => {

    toramaruWrapper.classList.add(
      "exit-right"
    );

  }, 300);


  /*
   * カーテンを閉じる
   */

  setTimeout(() => {

    curtain.classList.add(
      "show"
    );

    /*
     * 左右カーテンを閉じる
     */

    setTimeout(() => {

      curtain.classList.add(
        "close"
      );

    }, 100);

  }, 1700);


  /*
   * エンドロール
   */

  setTimeout(() => {

    startEndRoll();

  }, 3500);

}


/* =========================================================
   エンドロール
========================================================= */

function startEndRoll() {

  endRoll.classList.add(
    "show"
  );


  endRollContent.classList.remove(
    "scroll"
  );


  endRollContent.style.animation =
    "none";

  endRollContent.style.transform =
    "translateY(0)";


  /*
   * ブラウザに再計算させる
   */

  void endRollContent.offsetHeight;


  /*
   * コンテンツ全体の高さ
   */

  const contentHeight =
    endRollContent.scrollHeight;


  /*
   * 画面外までスクロールする距離
   */

  const viewportHeight =
    window.innerHeight;


  const distance =
    -(contentHeight - viewportHeight);


  endRollContent.style.setProperty(
    "--end-distance",
    `${distance}px`
  );


  /*
   * コンテンツ量に応じて
   * エンドロール時間を調整
   */

  let duration =
    contentHeight / 55;


  /*
   * 短すぎ・長すぎを防ぐ
   */

  duration =
    Math.max(
      24,
      Math.min(
        duration,
        42
      )
    );


  endRollContent.style.animation =
    `endRollScroll ${duration}s linear forwards`;

}


/* =========================================================
   初期状態
========================================================= */

backButton.style.display =
  "none";

nextButton.style.display =
  "none";

speechBubble.style.opacity =
  "0";

endRoll.classList.remove(
  "show"
);

curtain.classList.remove(
  "show",
  "close"
);
