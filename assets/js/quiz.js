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

startBtn.addEventListener('click',showQuestion);


function displayQuestion(){

    questionbox.style.display='block';
    submitBtn.style.display='block';
}

function showQuestion(){

    startBtn.style.display='none';
    title.remove();
    content.remove();

    return displayQuestion();

};

function showAnswer(){


};

function currentQuestion(){


};

function scoreRender(){



};

function timeLeft(){



};





