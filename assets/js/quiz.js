
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



const startButton=document.getElementById("start-button");
const submitButton=document.getElementById("submit-button");
const displayAnswer =document.getElementById("show-Answer");
const scoreRender=document.getElementById("score")
var tiTle= document.querySelector(".title");
var conTent=document.querySelector(".content");
var choiceA=document.getElementById("choiceA");
var choiceB=document.getElementById("choiceB");
var choiceC=document.getElementById("choiceC");
var choiceD=document.getElementById("choiceD");
var questionBox=document.getElementById("question-container");
var timeIsUp=document.getElementById("timeIsUp");
var timerDefault=document.getElementById("tiMer");


var currentQuestion =0;
var answer

startButton.addEventListener('click',showQuestion);
submitButton.addEventListener('click',submitAnswer);
choiceA.addEventListener('click',choiceAClicked);
choiceB.addEventListener('click',choiceBClicked);
choiceC.addEventListener('click',choiceCClicked);
choiceD.addEventListener('click',choiceDClicked);


function showQuestion(){
    
    Timer();
    

    if(currentQuestion>=quizzQuestion.length){
        return "You have completed the quizz"
    };

    conTent.style.display='none';
    startButton.style.display='none';
    questionBox.style.display='block';
    submitButton.style.display='block';
    


    tiTle.innerHTML="Question "+(currentQuestion+1)+": "+ quizzQuestion[currentQuestion].q;
    choiceA.innerHTML="a."+quizzQuestion[currentQuestion].a[0];
    choiceB.innerHTML="b."+quizzQuestion[currentQuestion].a[1];
    choiceC.innerHTML="c."+quizzQuestion[currentQuestion].a[2];
    choiceD.innerHTML="d."+quizzQuestion[currentQuestion].a[3];
    
  
};



function submitAnswer(){




    if(quizzQuestion[currentQuestion].correct===answer) {

    
    
        displayAnswer.innerHTML="Answer is correct";

    

    }
        
      
    else{

        displayAnswer.innerHTML="Answer is incorrect";
 
    
    };



   currentQuestion++;


    showQuestion();


    choiceC.style.backgroundColor="rgb(131, 160, 212)";
    choiceB.style.backgroundColor="rgb(131, 160, 212)";
    choiceA.style.backgroundColor="rgb(131, 160, 212)";
    choiceD.style.backgroundColor="rgb(131, 160, 212)"; 


};

function choiceAClicked(){

 

    choiceA.style.backgroundColor="aqua";
    choiceB.style.backgroundColor="rgb(131, 160, 212)";
    choiceC.style.backgroundColor="rgb(131, 160, 212)";
    choiceD.style.backgroundColor="rgb(131, 160, 212)";
    answer="a";


};
function choiceBClicked(){
   

    choiceB.style.backgroundColor="aqua";
    choiceA.style.backgroundColor="rgb(131, 160, 212)";
    choiceC.style.backgroundColor="rgb(131, 160, 212)";
    choiceD.style.backgroundColor="rgb(131, 160, 212)";
    answer="b";

};
function choiceCClicked(){
    

    choiceC.style.backgroundColor="aqua";
    choiceB.style.backgroundColor="rgb(131, 160, 212)";
    choiceA.style.backgroundColor="rgb(131, 160, 212)";
    choiceD.style.backgroundColor="rgb(131, 160, 212)";
    answer="c";
};
function choiceDClicked(){
   

    choiceD.style.backgroundColor="aqua";
    choiceB.style.backgroundColor="rgb(131, 160, 212)";
    choiceC.style.backgroundColor="rgb(131, 160, 212)";
    choiceA.style.backgroundColor="rgb(131, 160, 212)";
    answer="d";
};



function scoreRender(){
    
    
}

function Timer(){
    var timeleft = 30;

    var downloadTimer = setInterval(function function1(){
   timerDefault.innerHTML = timeleft + 
    " "+"seconds remaining";

    timeleft=timeleft-1;
    if(timeleft < 0){
        clearInterval(downloadTimer);
        timeIsUp.innerHTML = "Time is up!"
    };
    }, 1000);

};








































