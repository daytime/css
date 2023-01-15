const question = "ゲーム史上、最も売れたゲーム機は次の打ちどれ？";
const answers = [
    "スーパーファミコン",
    "プレイステーション2",
    "ニンテンドースイッチ",
    "ニンテンドーDS",
];
const correct = "ニンテンドーDS";
const $button = document.getElementsByTagName("button");

const setupQuiz = () => {
    console.log(document.getElementById("js-question").textContent);
    document.getElementById("js-question").textContent = "Question";
    document.getElementById("js-question").textContent = question;

    // $button[0].textContent = answers[0];
    // $button[1].textContent = answers[1];
    // $button[2].textContent = answers[2];
    // $button[3].textContent = answers[3];

    let buttonIndex = 0;
    let buttonLength = $button.length;
    while (buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = answers[buttonIndex];
        buttonIndex++;
    }
};


const startQuiz(){
$button[0].addEventListener("click", () => {
    if (correct === $button[0].textContent) {
        window.alert("正解！");
    } else {
        window.alert("不正解！");
    }
});


while (buttonIndex < buttonLength){
$button[buttonIndex].addEventListener("click", (e) => {
    if (correct === e.target.textContent) {
        window.alert("正解！");
    } else {
        window.alert("不正解！");
    }
});
buttonIndex++;
}




setupQuiz();
startQuiz();




























// const quiz = [
//     {
//         question: "ゲーム史上、最も売れたゲーム機はどれ？",
//         answers: [
//             "スーパーファミコン",
//             "PlayStation 2",
//             "ニンテンドーDS",
//             "Xbox 360",
//         ],
//         correct: "ニンテンドーDS",
//     },
//     {
//         question: "糸井重里が企画に関わった、任天堂の看板ゲームといえば？",
//         answers: [
//             "MOTHER2",
//             "スーパーマリオブラザーズ3",
//             "スーパードンキーコング",
//             "星のカービィ",
//         ],
//         correct: "MOTHER2",
//     },
//     {
//         question: "ファイナルファンタジーⅣの主人公の名前は？",
//         answers: ["フリオニール", "クラウド", "ティーダ", "セシル"],
//         correct: "セシル",
//     },
// ];

// const $window = window;
// const $doc = document;
// const $question = $doc.getElementById("js-question");
// const $buttons = $doc.querySelectorAll(".btn");

// const quizLen = quiz.length;
// let quizCount = 0;
// let score = 0;

// const init = () => {
//     $question.textContent = quiz[quizCount].question;

//     const buttonLen = $buttons.length;
//     let btnIndex = 0;

//     while (btnIndex < buttonLen) {
//         $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
//         btnIndex++;
//     }
// };

// const goToNext = () => {
//     quizCount++;
//     if (quizCount < quizLen) {
//         init(quizCount);
//     } else {
//         // $window.alert('クイズ終了！');
//         showEnd();
//     }
// };

// const judge = (elm) => {
//     if (elm.textContent === quiz[quizCount].correct) {
//         $window.alert("正解!");
//         score++;
//     } else {
//         $window.alert("不正解!");
//     }
//     goToNext();
// };

// const showEnd = () => {
//     $question.textContent =
//         "終了！あなたのスコアは" + score + "/" + quizLen + "です";

//     const $items = $doc.getElementById("js-items");
//     $items.style.visibility = "hidden";
// };

// init();

// let answersIndex = 0;
// let answersLen = quiz[quizCount].answers.length;

// while (answersIndex < answersLen) {
//     $buttons[answersIndex].addEventListener("click", (e) => {
//         judge(e.target);
//     });
//     answersIndex++;
// }