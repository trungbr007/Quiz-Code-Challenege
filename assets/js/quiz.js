var quizzQuestion=[{
    q: "What is CSS stand for?",
    a:['Cascading Style Sheets','Creative Style Sheets','Colorful Style Sheets','Computer Style Sheets'],
    correct:'a'
},

{
    q:"What does the following mean to the computer? div p {color: #ff0000;}",
    a:[
    'Make text in all divs and all paragraphs in this document be bright red',
    'Make the background in all divs that are of the class "p" be bright red',
    'Make the text inside any divs inside of any paragraph be bright red',
    'Make the text inside any paragraph that is inside any div be bright red'],
    correct:'b'
},

{
    q: "Which HTML attribute is used to define inline styles?",
    a:['font','styles','style','class'],
    correct:'b'

},

{
    q:"Which is the correct CSS syntax?",
    a:['{body:color=black;}','body{color:black;}','body:color=black;','{body;color:black;}'],
    correct:'b'
},

{
    q:"How do you insert a comment in a CSS file?",
    a:['// this is a comment','/* this is a comment*/','.this is a comment','//this is a comment//'],
    correct:'b'
}];

var selectedAnswer;
var currentQuestion= 0;
const startBtn=document.getElementById("start-button");
const TiMer= document.getElementById("TiMer");
const q=document.getElementById("questions");
const a= document.getElementById("answer-buttons");
const submitBtn=document.getElementById("submit-button");
const scoRe= document.getElementById("score");
const title=document.querySelector(".title");
const content=document.querySelector(".content");
const questionbox=document.getElementById("question-container");
var choiceA=document.getElementById("choiceA");
var choiceB=document.getElementById("choiceB");
var choiceC=document.getElementById("choiceC");
var choiceD=document.getElementById("choiceD");
const answerCorrect=document.getElementById("correct-answer");
const answerIncorrect=document.getElementById("incorrect-answer");
const ansChecked = document.getElementById("check-ans");


startBtn.addEventListener('click',showQuestion);
submitBtn.addEventListener('click',submitAnswer);
choiceA.addEventListener('click',choiceAClicked);
choiceB.addEventListener('click',choiceBClicked);
choiceC.addEventListener('click',choiceCClicked);
choiceD.addEventListener('click',choiceDClicked);


function choiceAClicked(){

    choiceA.style.backgroundColor="aqua";
    selectedAnswer = "a";
    choiceB.style.backgroundColor="rgb(131, 160, 212)";
    choiceC.style.backgroundColor="rgb(131, 160, 212)";
    choiceD.style.backgroundColor="rgb(131, 160, 212)";


};
function choiceBClicked(){

    choiceB.style.backgroundColor="aqua";
    selectedAnswer = "b";
    choiceA.style.backgroundColor="rgb(131, 160, 212)";
    choiceC.style.backgroundColor="rgb(131, 160, 212)";
    choiceD.style.backgroundColor="rgb(131, 160, 212)";

};
function choiceCClicked(){

    choiceC.style.backgroundColor="aqua";
    selectedAnswer = "c";
    choiceB.style.backgroundColor="rgb(131, 160, 212)";
    choiceA.style.backgroundColor="rgb(131, 160, 212)";
    choiceD.style.backgroundColor="rgb(131, 160, 212)";

};
function choiceDClicked(){

    choiceD.style.backgroundColor="aqua";
    selectedAnswer = "d";
    choiceB.style.backgroundColor="rgb(131, 160, 212)";
    choiceC.style.backgroundColor="rgb(131, 160, 212)";
    choiceA.style.backgroundColor="rgb(131, 160, 212)";

};





function showQuestion(){
   
    startBtn.style.display='none';
    content.innerHTML="";
    questionbox.style.display='block';
    submitBtn.style.display='block';

    title.innerHTML=" Question "+(currentQuestion+1) +": "+quizzQuestion[currentQuestion].q;
    choiceA.innerHTML="a."+quizzQuestion[currentQuestion].a[0];
    choiceB.innerHTML="b."+quizzQuestion[currentQuestion].a[1];
    choiceC.innerHTML="c."+quizzQuestion[currentQuestion].a[2];
    choiceD.innerHTML="d."+quizzQuestion[currentQuestion].a[3];
};

function checkSlection(answerCorrect,answerIncorrect){
    if(choiceAClicked.selectedAnswer.value===quizzQuestion.correct.value) {

            console.log('right');}

        // return answerCorrect
    // } else {
    //     answerIncorrect
    // };
    // if(choiceBClicked.selectedAnswer===quizzQuestion.correct) {
    //     return answerCorrect
    // } else {
    //     answerIncorrect
    // };
    // if(choiceCClicked.selectedAnswer===quizzQuestion.correct) {
    //     return answerCorrect
    // } else {
    //     answerIncorrect
    // };
    // if(choiceDClicked.selectedAnswer===quizzQuestion.correct) {
    //     return answerCorrect
    // } else {
    //     answerIncorrect
    // };


};

function submitAnswer(){

    currentQuestion++;
    if(currentQuestion>=quizzQuestion.lenght){
        
        return "You have completed the quizz"



    } else{

        return checkSlection;
    choiceC.style.backgroundColor="rgb(131, 160, 212)";
    choiceB.style.backgroundColor="rgb(131, 160, 212)";
    choiceA.style.backgroundColor="rgb(131, 160, 212)";
    choiceD.style.backgroundColor="rgb(131, 160, 212)";   
        
    };
};
   

   







