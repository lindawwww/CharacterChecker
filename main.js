(function(){
  'use strict';

  var cards = document.getElementById("cards");
  var check = document.getElementById("check");
  var retry = document.getElementById("retry");
  var userName = document.getElementById("user_name");

  //ブラウザを読み込んだ際フォーカスを選択、入力フォームでなければ意味なし？
  userName.focus();

  check.addEventListener("click",function(){
    //#cardsにmoveクラスをつけてあげる
    cards.className = "move";

    var msgs=[
      "究極の進化を遂げた",
      "太古より蘇った",
      "最も恐れられた"
    ];
    var jobs=[
      {name: "勇者", img: "hero.gif"},
      {name: "魔法使い", img: "wizard.gif"},
      {name: "武闘家", img: "fighter.gif"}
    ];
    var types=[
      {name: "その炎は全てを焼き尽くす", img: "bg-fire"},
      {name: "その清水ですべてを浄化する", img: "bg-water"},
      {name: "その雷撃は万物の怒りを鎮める", img: "bg-thunder"}
    ];

    var msg;
    var job;
    var type;
    var resultImg = document.getElementById("result_img");
    var tweet = document.getElementById("tweet");

    function getRandomElement(array){
      // ０から要素数未満の実数を返す
      return array[Math.floor( Math.random()*array.length )];
    }

    function setTextContent(id,text){
      document.getElementById(id).textContent = text;
    }

    msg = getRandomElement(msgs);
    job = getRandomElement(jobs);
    type = getRandomElement(types);

    if (userName.value === "" || userName.value.length > 10) {
          userName.value = "名無し";
      }

    var tweetUrl = "https://twitter.com/intent/tweet?text=" +
    encodeURIComponent(userName.value+"さんは"+msg+job.name+"でした！！")
    + "&hashtags=dotinstall";

    //<input id="user_name">から受け取った情報 userName
    //その値を参照する場合は .value で参照
    setTextContent("result_name",userName.value);
    setTextContent("result_msg",msg);
    setTextContent("result_job",job.name);
    resultImg.children[0].src = "img/" + job.img;
    setTextContent("result_type",type.name);
    resultImg.className = "left-side " + type.img;
    tweet.href = tweetUrl;
  });
  retry.addEventListener("click",function(){
    //#cardsからmoveクラスをなくす
    cards.className = "";
    userName.value = "";
    userName.focus();
  });
})();
