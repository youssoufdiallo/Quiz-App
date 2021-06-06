const quizData = [
    {
        question: "How old is Klcc",
        a: "10",
        b: "15",
        c: "24",
        d: "20",
        correct: "c"
    }, {
        question: "what is the best programming language ?",
        a: "java",
        b: "c",
        c: "c++",
        d: "javascript",
        correct: "d"
    }, {
        question: "who is the curerent US president ?",
        a: "donald trump",
        b: "joe baiden",
        c: "youssouf",
        d: "alin",
        correct: "b"
    }, {
        question: "What HTML stand for ?",
        a: "hypertext markup language",
        b: "cascade style sheet",
        c: "jquery",
        d: "Jason",
        correct: "a"
    }, {
        question: "When javascipt was launch ?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of above",
        correct: "d"
    }
]

const quiz = document.getElementById('quiz');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const questionEl = document.getElementById('question');
const submitBtn = document.getElementById('submit');
const answerEls = document.querySelectorAll('.answer');
let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){

    deselectAnswer();

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected(){
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    })
    return answer;
}

submitBtn.addEventListener('click', ()=>{

    const answer = getSelected();

    console.log(answer);

    if (answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML = `<h1>You answer correctly at ${score}/${quizData.length} questions </h1>
            <button onclick='location.reload()'>Reload</button>`;
        }

    }  

})

function deselectAnswer() {
    answerEls.forEach((answerEl) => {
            answerEl.checked = false;
    });
}