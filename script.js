
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

  // Scene 0
  {
    text:
      "おう！ おいらはトラまるってんだ！",
    image: normalImage,
    animation: "none"
  },


  // Scene 1
  {
    text:
      "500日記念ってのを聞きつけて<br>" +
      "わざわざ来てやったんだ",
    image: normalImage,
    animation: "none"
  },


  // Scene 2
  {
    text:
      "感謝しろー！",
    image: normalImage,
    animation: "shake"
  },


  // Scene 3
  {
    text:
      "本当は<br>" +
      "ズートピアに出てくる<br>" +
      "トラのキャラを使いたかったんだが<br>" +
      "著作権の問題で使えないとかっていう理由で<br>" +
      "仕方なくおいらに<br>" +
      "サプライズのお手伝いの仕事が<br>" +
      "回ってきたって訳だ！",
    image: normalImage,
    animation: "none"
  },


  // Scene 4
  {
    text:
      "本当にむかつくぜ！",
    image: angryImage,
    animation: "shake"
  },


  // Scene 5
  {
    text:
      "まあそんなことはどうでもいい！",
    image: normalImage,
    animation: "none"
  },


  // Scene 6
  {
    text:
      "今日はあんたに伝えたいことがあるんだ",
    image: normalImage,
    animation: "none"
  },


  // Scene 7
  {
    text:
      "500日って結構すごいことなんだぜ？",
    image: magaoImage,
    animation: "none"
  },


  // Scene 8
  {
    text:
      "そこであんたの彼氏が<br>" +
      "あんたに手紙を書いたんだ！",
    image: letterImage,
    animation: "none"
  },


  // Scene 9
  {
    text:
      "自分で渡すのが恥ずかしいから<br>" +
      "手紙をおいらに預けてきた",
    image: letterImage,
    animation: "none"
  },


  // Scene 10
  {
    text:
      "自分で渡せばいいものを<br>" +
      "情けないヤツだなー！！",
    image: angry2Image,
    animation: "shake"
  },


  // Scene 11
  {
    text:
      "そんなこんなで<br>" +
      "今回は特別においらが代わりに読んでやる！！",
    image: letterImage,
    animation: "none"
  },


  // Scene 12
  {
    text:
      "「インターネットにアップロードするので<br>" +
      "念のためセキュリティの都合上<br>" +
      "とても不気味ですが<br>" +
      "「私」と「あなた」、「ですます調」で<br>" +
      "言わせてください。",
    image: readImage,
    animation: "none"
  },


  // Scene 13
  {
    text:
      "付き合ってから500日経っても<br>" +
      "変わらず大好きです。",
    image: readImage,
    animation: "none"
  },


  // Scene 14
  {
    text:
      "あなたの全てが大好きですが、<br>" +
      "なんといってもやはり<br>" +
      "笑顔がたまらなく好きです。",
    image: readImage,
    animation: "none"
  },


  // Scene 15
  {
    text:
      "どんな時であろうが、<br>" +
      "本当に可愛いあなたの笑顔を見ると<br>" +
      "疲れや不安、ストレスが全部吹っ飛んで<br>" +
      "忘れてしまうほどです。",
    image: readImage,
    animation: "none"
  },


  // Scene 16
  {
    text:
      "これからもその笑顔を見れるよう<br>" +
      "傍にいさせてください",
    image: readImage,
    animation: "none"
  },


  // Scene 17
  {
    text:
      "そういえば去年の私の入院と手術から<br>" +
      "およそ1年くらい経ちましたね。",
    image: readImage,
    animation: "none"
  },


  // Scene 18
  {
    text:
      "あの時は泣いてくれたことが<br>" +
      "本当に嬉しかったな。",
    image: readImage,
    animation: "none"
  },


  // Scene 19
  {
    text:
      "今でも思い出すと<br>" +
      "少し涙目になります。",
    image: readImage,
    animation: "none"
  },


  // Scene 20
  {
    text:
      "この先ずっと<br>" +
      "忘れることはないでしょう。",
    image: readImage,
    animation: "none"
  },


  // Scene 21
  {
    text:
      "私を好きになってくれたこと、<br>" +
      "今でもこうして好きでいてくれていることに<br>" +
      "心から感謝しています。",
    image: readImage,
    animation: "none"
  },


  // Scene 22
  {
    text:
      "実はもう一つ<br>" +
      "重い病気にかかってしまいました。",
    image: readImage,
    animation: "none"
  },


  // Scene 23
  {
    text:
      "もう治らないかもしれません。",
    image: readImage,
    animation: "none"
  },


  // Scene 24
  {
    text:
      "それはあなたのことが<br>" +
      "ダイスキダイスキ病です。",
    image: aseri1Image,
    animation: "shake"
  },


  // Scene 25
  {
    text:
      "さすがあなたですね！<br>" +
      "その通りです！",
    image: aseri1Image,
    animation: "none"
  },


  // Scene 26
  {
    text:
      "これは私が考えたボケではありません。",
    image: aseri2Image,
    animation: "shake"
  },


  // Scene 27
  {
    text:
      "AIに考えさせました。",
    image: aseri3Image,
    animation: "shake"
  },


  // Scene 28
  {
    text:
      "私はこんなつまらないボケを<br>" +
      "したことがありません。",
    image: aseri4Image,
    animation: "shake"
  },


  // Scene 29
  {
    text:
      "こんなにすぐAIだと見抜かれてしまうようでは<br>" +
      "AIのギャグセンスもまだまだ<br>" +
      "私には遠く及ばないですね。（笑）」",
    image: kooruImage,
    animation: "shake"
  },


  // Scene 30
  {
    text:
      "急に冬になったのかと思ったよ！<br>" +
      "あんたもそう思ったかい？<br>" +
      "まあ、気を取り直して続きを読むとしよう",
    image: letterImage,
    animation: "shake"
  },


  // Scene 31
  {
    text:
      "「今年の4月に教員になってから<br>" +
      "ちょうど半年くらい経ちましたね。",
    image: readImage,
    animation: "none"
  },


  // Scene 32
  {
    text:
      "去年の5月につきあってからすぐに実習へ行き、<br>" +
      "7月や8月には試験や面接を受け、<br>" +
      "めでたく合格し、<br>" +
      "今ではもう立派な学校の先生ですね。",
    image: readImage,
    animation: "none"
  },


  // Scene 33
  {
    text:
      "そんな成長の過程を<br>" +
      "誰よりも近くで応援することが出来て<br>" +
      "本当に嬉しいです。",
    image: readImage,
    animation: "none"
  },


  // Scene 34
  {
    text:
      "でも少し心配なこともあります。",
    image: readImage,
    animation: "none"
  },


  // Scene 35
  {
    text:
      "しょうがないことなのですが、<br>" +
      "土日の両方に部活の予定が入っていたり、<br>" +
      "平日にあなたの家へ行くと帰っても<br>" +
      "授業準備をしているのを見ると、<br>" +
      "頑張り過ぎていないか心配です。",
    image: readImage,
    animation: "none"
  },


  // Scene 36
  {
    text:
      "あなたは部活は体を動かすのは楽しいし、<br>" +
      "授業準備も好きだからやっていると言っているけど、<br>" +
      "それでも少し心配です。",
    image: readImage,
    animation: "none"
  },


  // Scene 37
  {
    text:
      "（この前、部活面倒くさいと言っていて<br>" +
      "なぜか安心しました。）",
    image: readImage,
    animation: "none"
  },


  // Scene 38
  {
    text:
      "私としてはあなたに<br>" +
      "自分を一番大切にしてほしい。",
    image: readImage,
    animation: "none"
  },


  // Scene 39
  {
    text:
      "なぜなら私にとっては<br>" +
      "あなたが一番大切な人だから。",
    image: readImage,
    animation: "none"
  },


  // Scene 40
  {
    text:
      "そして、これからもずっと<br>" +
      "一緒にいてほしいです。",
    image: readImage,
    animation: "none"
  },


  // Scene 41
  {
    text:
      "あなたのことを応援しているし、<br>" +
      "支えていきたいです。",
    image: readImage,
    animation: "none"
  },


  // Scene 42
  {
    text:
      "（この前、コロナになったときは<br>" +
      "頼ってくれて嬉しかった）",
    image: readImage,
    animation: "none"
  },


  // Scene 43
  {
    text:
      "私には大きな目標があります。",
    image: readImage,
    animation: "none"
  },


  // Scene 44
  {
    text:
      "それは将来、<br>" +
      "あなたと結婚して<br>" +
      "あなたの人生を幸せでいっぱいにすること。",
    image: readImage,
    animation: "none"
  },


  // Scene 45
  {
    text:
      "そのために<br>" +
      "アクチュアリーの資格を持った<br>" +
      "エロデータサイエンティストになれるよう<br>" +
      "精一杯頑張ります！",
    image: readImage,
    animation: "none"
  },


  // Scene 46
  {
    text:
      "やはり！<br>" +
      "さすがあなたですね！<br>" +
      "もう気づいてしまいましたか！",
    image: readImage,
    animation: "none"
  },


  // Scene 47
  {
    text:
      "そうです。",
    image: readImage,
    animation: "none"
  },


  // Scene 48
  {
    text:
      "アクチュアリーでも、<br>" +
      "データサイエンティストにもなっていない私は<br>" +
      "今はただのエロい人です。",
    image: aseri3Image,
    animation: "none"
  },


  // Scene 49
  {
    text:
      "とにかく目標を達成できるように<br>" +
      "精一杯努力します。",
    image: readImage,
    animation: "none"
  },


  // Scene 50
  {
    text:
      "でも、疲れているときや弱っているときは<br>" +
      "あなたにたくさん甘えさせてください。",
    image: readImage,
    animation: "none"
  },


  // Scene 51
  {
    text:
      "こんな私ですが<br>" +
      "これからの新しい500日も<br>" +
      "よろしくお願いします。」",
    image: readImage,
    animation: "none"
  },


  // Scene 52
  {
    text:
      "ボケは全然面白くなかったけど<br>" +
      "なかなか良い彼氏だな！<br>" +
      "これからも大切にしてやってくれ！",
    image: normalImage,
    animation: "shake"
  },


  // Scene 53
  {
    text:
      "さて，おいらはそろそろ<br>" +
      "次の仕事に行かなきゃならない。<br>" +
      "またあんたの彼氏が<br>" +
      "仕事を頼んでくるかもしれねぇ、<br>" +
      "そのときまで元気でな！",
    image: normalImage,
    animation: "none"
  }

];


// ==================================================
// 現在のシーン
// ==================================================

let currentScene = 0;


// ==================================================
// トラまるが登場したか
// ==================================================

let hasAppeared = false;


// ==================================================
// エンディング中か
// ==================================================

let isEnding = false;


// ==================================================
// セリフ切り替えタイマー
// ==================================================

let sceneTimer = null;


// ==================================================
// シーン表示
// ==================================================

function updateScene() {

  const scene =
    scenes[currentScene];


  // ------------------------------------------
  // セリフ
  // ------------------------------------------

  speechBubble.innerHTML =
    scene.text;


  // ------------------------------------------
  // 表情
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
// トラまる登場
// ==================================================

startButton.addEventListener(
  "click",
  () => {

    if (hasAppeared) {

      return;

    }


    hasAppeared = true;


    // ------------------------------------------
    // 登場
    // ------------------------------------------

    toramaruWrapper.classList.add(
      "show"
    );


    // ------------------------------------------
    // スタートボタンを消す
    // ------------------------------------------

    startButton.style.display =
      "none";


    // ------------------------------------------
    // 1.5秒後にセリフ
    // ------------------------------------------

    setTimeout(
      () => {

        currentScene = 0;

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


    // ------------------------------------------
    // 最後のシーン
    // ------------------------------------------

    if (
      currentScene >=
      scenes.length - 1
    ) {

      startEnding();

      return;

    }


    // ------------------------------------------
    // 次のシーン
    // ------------------------------------------

    currentScene++;


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
        300
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


    if (currentScene <= 0) {

      return;

    }


    currentScene--;


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
        300
      );

  }
);


// ==================================================
// トラまるを現在位置で固定
// ==================================================

function freezeToramaruPosition() {

  /*
     現在のwrapperの画面上の位置を取得。
  */

  const rect =
    toramaruWrapper.getBoundingClientRect();


  /*
     現在の幅・高さも取得。
  */

  const width =
    rect.width;


  const height =
    rect.height;


  /*
     animationによって
     bottom / transform が管理されている状態を
     いったん解除する。

     画面上の位置を
     left / top で直接指定する。
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
     CSSアニメーション用の値。

     現在位置
     ↓
     画面右端のさらに外

     とする。
  */

  toramaruWrapper.style.setProperty(
    "--exit-start-left",
    `${rect.left}px`
  );


  toramaruWrapper.style.setProperty(
    "--exit-end-left",
    `${window.innerWidth + width + 100}px`
  );


  /*
     念のため再描画。
  */

  void toramaruWrapper.offsetWidth;

}


// ==================================================
// エンドロール開始
// ==================================================

function startEndRoll() {

  /*
     エンドロールを表示。
  */

  endRoll.classList.add(
    "show"
  );


  endRoll.setAttribute(
    "aria-hidden",
    "false"
  );


  /*
     アニメーションを一度リセット。
  */

  endRollContent.style.animation =
    "none";


  endRollContent.style.transform =
    "translateY(0)";


  void endRollContent.offsetHeight;


  /*
     実際のコンテンツ高さを取得。
  */

  const contentHeight =
    endRollContent.scrollHeight;


  const viewportHeight =
    window.innerHeight;


  /*
     コンテンツを最後まで
     画面上へ流すための距離。

     少し余裕を持たせて
     最後のTHE ENDまで見えるようにする。
  */

  const distance =
    -(
      contentHeight -
      viewportHeight
    );


  endRollContent.style.setProperty(
    "--end-distance",
    `${distance}px`
  );


  /*
     コンテンツ量に応じて
     スクロール速度を調整。

     短すぎず、長すぎないようにする。
  */

  const duration =
    Math.max(
      24,
      Math.min(
        42,
        contentHeight / 55
      )
    );


  endRollContent.style.setProperty(
    "--end-roll-duration",
    `${duration}s`
  );


  /*
     アニメーション開始。
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
  // トラまるを現在位置で完全固定
  // ------------------------------------------

  freezeToramaruPosition();


  /*
     少し余韻を置く。
  */

  setTimeout(
    () => {

      /*
         現在位置から右へ退場。
      */

      toramaruWrapper.classList.add(
        "exit-right"
      );

    },
    500
  );


  // ------------------------------------------
  // トラまる退場後
  // カーテンを閉じる
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
  // カーテン完全閉鎖後
  // エンドロール
  // ------------------------------------------

  setTimeout(
    () => {

      startEndRoll();

    },
    4100
  );

}