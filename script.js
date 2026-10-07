// ==================================================
// HTML要素を取得
// ==================================================

const startButton =
  document.getElementById("startButton");

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


// ==================================================
// トラまる画像
// ==================================================

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


// ==================================================
// シーン設定
// ==================================================

const scenes = [

  {
    text:
      "おう！ おいらはトラまるってんだ！",
    image: normalImage,
    animation: "none"
  },

  {
    text:
      "500日記念ってのを聞きつけてわざわざ来てやったんだ",
    image: normalImage,
    animation: "none"
  },

  {
    text:
      "感謝しろー！",
    image: normalImage,
    animation: "shake"
  },

  {
    text:
      "本当はズートピアに出てくるトラのキャラを使いたかったんだが著作権の問題で使えないとかっていう理由で仕方なくおいらにサプライズのお手伝いの仕事が回ってきたって訳だ！",
    image: normalImage,
    animation: "none"
  },

  {
    text:
      "本当にむかつくぜ！",
    image: angryImage,
    animation: "shake"
  },

  {
    text:
      "まあそんなことはどうでもいい！",
    image: normalImage,
    animation: "none"
  },

  {
    text:
      "今日はあんたに伝えたいことがあるんだ",
    image: normalImage,
    animation: "none"
  },

  {
    text:
      "500日って結構すごいことなんだぜ？",
    image: magaoImage,
    animation: "none"
  },

  {
    text:
      "そこであんたの彼氏があんたに手紙を書いたんだ！",
    image: letterImage,
    animation: "none"
  },

  {
    text:
      "自分で渡すのが恥ずかしいから手紙をおいらに預けてきた",
    image: letterImage,
    animation: "none"
  },

  {
    text:
      "自分で渡せばいいものを情けないヤツだなー！！",
    image: angry2Image,
    animation: "shake"
  },

  {
    text:
      "そんなこんなで今回は特別においらが代わりに読んでやる！！",
    image: letterImage,
    animation: "none"
  },

  {
    text:
      "「インターネットにアップロードするので念のためセキュリティの都合上とても不気味ですが「私」と「あなた」、「ですます調」で言わせてください。",
    image: readImage,
    animation: "none"
  },

  {
    text:
      "付き合ってから500日経っても変わらず大好きです。",
    image: readImage,
    animation: "none"
  },

  {
    text:
      "あなたの全てが大好きですが、なんといってもやはり笑顔がたまらなく好きです。",
    image: readImage,
    animation: "none"
  },

  {
    text:
      "どんな時であろうが、本当に可愛いあなたの笑顔を見ると疲れや不安、ストレスが全部吹っ飛んで忘れてしまうほどです。",
    image: readImage,
    animation: "none"
  },

  {
    text:
      "これからもその笑顔を見れるよう傍にいさせてください",
    image: readImage,
    animation: "none"
  },

  {
    text:
      "そういえば去年の私の入院と手術からおよそ1年くらい経ちましたね。",
    image: readImage,
    animation: "none"
  },

  {
    text:
      "あの時は泣いてくれたことが本当に嬉しかったな。",
    image: readImage,
    animation: "none"
  },

  {
    text:
      "今でも思い出すと少し涙目になります。",
    image: readImage,
    animation: "none"
  },

  {
    text:
      "この先ずっと忘れることはないでしょう。",
    image: readImage,
    animation: "none"
  },

  {
    text:
      "私を好きになってくれたこと、今でもこうして好きでいてくれていることに心から感謝しています。",
    image: readImage,
    animation: "none"
  },

  {
    text:
      "実はもう一つ重い病気にかかってしまいました。",
    image: readImage,
    animation: "none"
  },

  {
    text:
      "もう治らないかもしれません。",
    image: readImage,
    animation: "none"
  },

  {
    text:
      "それはあなたのことがダイスキダイスキ病です。",
    image: aseri1Image,
    animation: "shake"
  },

  {
    text:
      "さすがあなたですね！その通りです！",
    image: aseri1Image,
    animation: "none"
  },

  {
    text:
      "これは私が考えたボケではありません。",
    image: aseri2Image,
    animation: "shake"
  },

  {
    text:
      "AIに考えさせました。",
    image: aseri3Image,
    animation: "shake"
  },

  {
    text:
      "私はこんなつまらないボケをしたことがありません。",
    image: aseri4Image,
    animation: "shake"
  },

  {
    text:
      "こんなにすぐAIだと見抜かれてしまうようではAIのギャグセンスもまだまだ私には遠く及ばないですね。（笑）」",
    image: kooruImage,
    animation: "shake"
  },

  {
    text:
      "急に冬になったのかと思ったよ！あんたもそう思ったかい？まあ、気を取り直して続きを読むとしよう",
    image: letterImage,
    animation: "shake"
  },

  {
    text:
      "「今年の4月に教員になってからちょうど半年くらい経ちましたね。",
    image: readImage,
    animation: "none"
  },

  {
    text:
      "去年の5月につきあってからすぐに実習へ行き、7月や8月には試験や面接を受け、めでたく合格し、今ではもう立派な学校の先生ですね。",
    image: readImage,
    animation: "none"
  },

  {
    text:
      "そんな成長の過程を誰よりも近くで応援することが出来て本当に嬉しいです。",
    image: readImage,
    animation: "none"
  },

  {
    text:
      "でも少し心配なこともあります。",
    image: readImage,
    animation: "none"
  },

  {
    text:
      "しょうがないことなのですが、土日の両方に部活の予定が入っていたり、平日にあなたの家へ行くと帰っても授業準備をしているのを見ると、頑張り過ぎていないか心配です。",
    image: readImage,
    animation: "none"
  },

  {
    text:
      "あなたは部活は体を動かすのは楽しいし、授業準備も好きだからやっていると言っているけど、それでも少し心配です。",
    image: readImage,
    animation: "none"
  },

  {
    text:
      "（この前、部活面倒くさいと言っていてなぜか安心しました。）",
    image: readImage,
    animation: "none"
  },

  {
    text:
      "私としてはあなたに自分を一番大切にしてほしい。",
    image: readImage,
    animation: "none"
  },

  {
    text:
      "なぜなら私にとってはあなたが一番大切な人だから。",
    image: readImage,
    animation: "none"
  },

  {
    text:
      "そして、これからもずっと一緒にいてほしいです。",
    image: readImage,
    animation: "none"
  },

  {
    text:
      "あなたのことを応援しているし、支えていきたいです。",
    image: readImage,
    animation: "none"
  },

  {
    text:
      "（この前、コロナになったときは頼ってくれて嬉しかった）",
    image: readImage,
    animation: "none"
  },

  {
    text:
      "私には大きな目標があります。",
    image: readImage,
    animation: "none"
  },

  {
    text:
      "それは将来、あなたと結婚してあなたの人生を幸せでいっぱいにすること。",
    image: readImage,
    animation: "none"
  },

  {
    text:
      "そのためにアクチュアリーの資格を持ったエロデータサイエンティストになれるよう精一杯頑張ります！",
    image: readImage,
    animation: "none"
  },

  {
    text:
      "やはり！さすがあなたですね！もう気づいてしまいましたか！",
    image: readImage,
    animation: "none"
  },

  {
    text:
      "そうです。",
    image: readImage,
    animation: "none"
  },

  {
    text:
      "アクチュアリーでも、データサイエンティストにもなっていない私は今はただのエロい人です。",
    image: aseri3Image,
    animation: "none"
  },

  {
    text:
      "とにかく目標を達成できるように精一杯努力します。",
    image: readImage,
    animation: "none"
  },

  {
    text:
      "でも、疲れているときや弱っているときはあなたにたくさん甘えさせてください。",
    image: readImage,
    animation: "none"
  },

  {
    text:
      "こんな私ですがこれからの新しい500日もよろしくお願いします。」",
    image: readImage,
    animation: "none"
  },

  {
    text:
      "ボケは全然面白くなかったけどなかなか良い彼氏だな！これからも大切にしてやってくれ！",
    image: normalImage,
    animation: "shake"
  },

  {
    text:
      "さて，おいらはそろそろ次の仕事に行かなきゃならない。またあんたの彼氏が仕事を頼んでくるかもしれねぇ、そのときまで元気でな！",
    image: normalImage,
    animation: "none"
  }

];


// ==================================================
// 状態
// ==================================================

let currentScene = 0;

let hasAppeared = false;

let isEnding = false;

let sceneTimer = null;


// ==================================================
// シーン表示
// ==================================================

function updateScene() {

  const scene =
    scenes[currentScene];

  if (!scene) {
    return;
  }


  // ------------------------------------------
  // セリフ
  // ------------------------------------------

  speechBubble.innerHTML =
    scene.text;


  // ------------------------------------------
  // 画像
  // ------------------------------------------

  toramaru.src =
    scene.image;


  // ------------------------------------------
  // アニメーションリセット
  // ------------------------------------------

  toramaru.classList.remove(
    "angry-shake"
  );

  void toramaru.offsetWidth;


  // ------------------------------------------
  // アニメーション
  // ------------------------------------------

  if (
    scene.animation === "shake"
  ) {

    toramaru.classList.add(
      "angry-shake"
    );

  }


  // ------------------------------------------
  // 戻るボタン
  // ------------------------------------------

  if (
    currentScene === 0
  ) {

    backButton.classList.remove(
      "show"
    );

  } else {

    backButton.classList.add(
      "show"
    );

  }


  // ------------------------------------------
  // 次へボタン
  // ------------------------------------------

  if (
    currentScene ===
    scenes.length - 1
  ) {

    nextButton.innerText =
      "エンディングへ";

  } else {

    nextButton.innerText =
      "次へ";

  }


  nextButton.classList.add(
    "show"
  );

}


// ==================================================
// セリフ変更
// ==================================================

function changeScene(
  newScene
) {

  if (
    newScene < 0 ||
    newScene >= scenes.length
  ) {
    return;
  }

  currentScene =
    newScene;


  speechBubble.classList.remove(
    "show"
  );


  if (sceneTimer) {

    clearTimeout(
      sceneTimer
    );

  }


  sceneTimer =
    setTimeout(
      () => {

        updateScene();

        speechBubble.classList.add(
          "show"
        );

      },
      250
    );

}


// ==================================================
// トラまる登場
// ==================================================

startButton.addEventListener(
  "click",
  () => {

    if (hasAppeared) {
      return;
    }


    hasAppeared = true;


    toramaruWrapper.classList.add(
      "show"
    );


    startButton.style.display =
      "none";


    setTimeout(
      () => {

        currentScene =
          0;

        updateScene();

        speechBubble.classList.add(
          "show"
        );

      },
      1500
    );

  }
);


// ==================================================
// 次へ
// ==================================================

nextButton.addEventListener(
  "click",
  () => {

    if (isEnding) {
      return;
    }


    if (
      currentScene >=
      scenes.length - 1
    ) {

      startEnding();

      return;

    }


    changeScene(
      currentScene + 1
    );

  }
);


// ==================================================
// 戻る
// ==================================================

backButton.addEventListener(
  "click",
  () => {

    if (isEnding) {
      return;
    }


    if (
      currentScene <= 0
    ) {
      return;
    }


    changeScene(
      currentScene - 1
    );

  }
);


// ==================================================
// トラまる位置固定
// ==================================================

function freezeToramaruPosition() {

  const rect =
    toramaruWrapper.getBoundingClientRect();


  const width =
    rect.width;


  /*
     現在の画面上の位置を
     そのまま固定する。
  */

  toramaruWrapper.style.animation =
    "none";

  toramaruWrapper.style.left =
    `${rect.left}px`;

  toramaruWrapper.style.top =
    `${rect.top}px`;

  toramaruWrapper.style.bottom =
    "auto";

  toramaruWrapper.style.transform =
    "none";


  /*
     退場開始位置
  */

  toramaruWrapper.style.setProperty(
    "--exit-start-left",
    `${rect.left}px`
  );


  /*
     スマホでもPCでも
     必ず画面右外まで移動する。
  */

  toramaruWrapper.style.setProperty(
    "--exit-end-left",
    `${window.innerWidth + width + 100}px`
  );


  void toramaruWrapper.offsetWidth;

}


// ==================================================
// エンドロール開始
// ==================================================

function startEndRoll() {

  endRoll.classList.add(
    "show"
  );

  endRoll.setAttribute(
    "aria-hidden",
    "false"
  );


  /*
     アニメーションリセット
  */

  endRollContent.style.animation =
    "none";

  endRollContent.style.transform =
    "translateY(0)";


  void endRollContent.offsetHeight;


  /*
     コンテンツ高さ
  */

  const contentHeight =
    endRollContent.scrollHeight;


  const viewportHeight =
    window.innerHeight;


  /*
     最後まで移動する距離
  */

  const distance =
    -Math.max(
      0,
      contentHeight -
      viewportHeight
    );


  endRollContent.style.setProperty(
    "--end-distance",
    `${distance}px`
  );


  /*
     画面サイズに応じて
     スクロール速度を調整。
  */

  const duration =
    Math.max(
      24,
      Math.min(
        48,
        contentHeight / 55
      )
    );


  endRollContent.style.setProperty(
    "--end-roll-duration",
    `${duration}s`
  );


  /*
     アニメーション開始
  */

  endRollContent.style.animation =
    `endRollScroll ${duration}s linear forwards`;

}


// ==================================================
// エンディング開始
// ==================================================

function startEnding() {

  if (isEnding) {
    return;
  }


  isEnding = true;


  // ------------------------------------------
  // セリフを消す
  // ------------------------------------------

  speechBubble.classList.remove(
    "show"
  );


  // ------------------------------------------
  // ボタンを消す
  // ------------------------------------------

  nextButton.classList.remove(
    "show"
  );

  backButton.classList.remove(
    "show"
  );


  // ------------------------------------------
  // トラまるを現在位置で固定
  // ------------------------------------------

  freezeToramaruPosition();


  // ------------------------------------------
  // 少し余韻
  // ------------------------------------------

  setTimeout(
    () => {

      toramaruWrapper.classList.add(
        "exit-right"
      );

    },
    500
  );


  // ------------------------------------------
  // カーテン
  // ------------------------------------------

  setTimeout(
    () => {

      curtain.classList.add(
        "close"
      );

    },
    2400
  );


  // ------------------------------------------
  // エンドロール
  // ------------------------------------------

  setTimeout(
    () => {

      startEndRoll();

    },
    4100
  );

}


// ==================================================
// 画面サイズ変更対策
// ==================================================

let resizeTimer = null;

window.addEventListener(
  "resize",
  () => {

    /*
       エンディング中でなければ
       CSSが自動調整するので
       特別な処理は不要。
    */

    if (isEnding) {
      return;
    }


    clearTimeout(
      resizeTimer
    );


    resizeTimer =
      setTimeout(
        () => {

          /*
             画面回転などで
             トラまるが登場済みなら
             現在位置を大きく崩さない。
          */

          if (
            hasAppeared &&
            toramaruWrapper
          ) {

            /*
               CSS側に任せるため、
               不要な位置変更はしない。
            */

          }

        },
        150
      );

  }
);


// ==================================================
// 初期状態
// ==================================================

speechBubble.classList.remove(
  "show"
);

backButton.classList.remove(
  "show"
);

nextButton.classList.remove(
  "show"
);

curtain.classList.remove(
  "close"
);

endRoll.classList.remove(
  "show"
);
