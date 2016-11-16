var allQuestions = [
  {sequence: 1, question: "0. Who is Prime Minister of the United Kingdom?", choices: ["Theresa May", "Winston Churchill", "Tony Blair"], 
  correctAnswer:"Theresa May"},
  {sequence: 2, question: "1. What is the capital of the Great Britain?", choices: ["Paris", "Warsaw", "London", "Liverpool", "Budapest"], 
  correctAnswer:"London"},
  {sequence: 3, question: "2. What is the capital of the Russian Federation?", choices: ["Prague", "Minsk", "Washington", "Moscow"], 
  correctAnswer:"Moscow"},
  {sequence: 4, question: "3. Who was the first man in space", choices: ["Armstrong", "Leonov", "Titov", "Gagarin", "Gorbachev"], 
  correctAnswer:"Gagarin"},
  {sequence: 5, question: "4. Who is the President of the USA", choices: ["Putin", "Psaki", "Clinton", "Obama"], correctAnswer:"Obama"},
];

//with answers
var allQuestions = [
  {sequence: 1, question: "0. Who is Prime Minister of the United Kingdom?", choices: ["Theresa May", "Winston Churchill", "Tony Blair"], 
  correctAnswer:"Theresa May", userAnswer: "Tony Blair"},
  {sequence: 2, question: "1. What is the capital of the Great Britain?", choices: ["Paris", "Warsaw", "London", "Liverpool", "Budapest"], 
  correctAnswer:"London", userAnswer: "Paris"},
  {sequence: 3, question: "2. What is the capital of the Russian Federation?", choices: ["Prague", "Minsk", "Washington", "Moscow"], 
  correctAnswer:"Moscow", userAnswer: "Prague"},
  {sequence: 4, question: "3. Who was the first man in space", choices: ["Armstrong", "Leonov", "Titov", "Gagarin", "Gorbachev"], 
  correctAnswer:"Gagarin", userAnswer: "Gagarin"},
  {sequence: 5, question: "4. Who is the President of the USA", choices: ["Putin", "Psaki", "Clinton", "Obama"], correctAnswer:"Obama", 
  userAnswer: "Clinton"},
];


quiz_single_choice
- delete the numbers from questions. disaplay them on result page
- style the quiz
jssexy
- Add user authentication: allow users to log in, and save their login credentials to local storage (HTML5 browser storage).
- Use cookies to remember the user, and show a “Welcome, First Name message when the user returns to the quiz.
Extra see http://javascriptissexy.com/how-to-learn-javascript-properly/
- boostrap
- show user s rankins
- and more



Unlikely yo fullfil / not completed
- Store the quiz questions in an external JSON file.
can't get the data out of the $.ajax function. Spent about 6-8 hours on it. Fuck it. Moving on. Must be looking in the wrong direction.




Improve:
- let user create his own quiz: input questions and asnwers.


Done.
- mozilla does not work, other browsers are fine. IE gives a warning though. Event was not defined.
- display result on the last page. highlight correctAnswers with green , incorrect userAnswers with red
- do not allow user to check radio btns on the result page
- highlight current queston in nav
- if you check and do not click next, checked box won't be saved.
- nav probelm if clicking next after nav, bringing new question without an answer of course
- css cursor


minor problems
- if(qInd>=2){} does not work on event listerne ?






Solving problems
- Retrieve data from external JSON
http://stackoverflow.com/questions/37717183/how-to-carry-data-after-getjson?rq=1 using promise

http://stackoverflow.com/questions/1739800/variables-set-during-getjson-function-only-accessible-within-function tried almost everythin all shit


// this seems to be working. but sync req depreceated by chrome
$.ajax({        
  type: 'GET',
  url: "questions.json",
  data: {'name':name},
  async: false,
  dataType: 'json',
  success: function (data) {
    myData = data;
  }
});

// getting data, but can't get it out of the $.ajax function
var myData = [];
$(document).ready(function(){
  $.ajax({        
    type: 'GET',
    url: "questions.json",
    data: {'name':name},
    async: true,
    dataType: 'json',
    success: function (data) {
      myData = data;
    }
  });
});
  myArray = myData; // empty here

// same situation 
var myData = [];
$.getJSON("questions.json", function(data) {
var myData = data;
console.log(data);
});

// at least something fucking sensible. But still can't work with it in my quiz.
function callback(records) {
  // do stuff with records.
 myArray  = records;
}
$.getJSON("questions.json", function(data){
 var recordCollection = data;
 callback(recordCollection); 
});


http://stackoverflow.com/questions/19706046/how-to-read-an-external-local-json-file-in-javascript nothin useful

load an external JSON file
http://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript I don't need no alternative to jquery though


- Store the quiz questions in an external JSON file. Do it later. It requires http request and running a server, it can be done loclally
 which does not make much sense or doess it? Chrome prohibits requests locally.
 main.js:5 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/. '
Fucking finally get my JSON with this code and this JSON. My json is not valid after JSON.stringify(allQuestions); wtf? 
$.getJSON("questions.json", function(data) { // 200, but no array
    myJson = data;
    console.log(data); // this will show the info it in firebug console
});
{
   "line1": "MikeBsocool",
   "line2": "Typeyournamasd",
   "line3": "763-345",
   "num_rows": "15",
   "num_cols": "3",
   "bgColorPage": "#f08008",
   "bgColorFilled": "#08f008",
   "bgColorEmpty": "#6f00ff"
}






//draft
JSON.stringify(allQuestions)
"[{"sequence":1,"question":"0. Who is Prime Minister of the United Kingdom?","choices":["Theresa May","Winston Churchill","Tony Blair"],"correctAnswer":"Theresa May"},{"sequence":2,"question":"1. What is the capital of the Great Britain?","choices":["Paris","Warsaw","London","Liverpool","Budapest"],"correctAnswer":"London"},{"sequence":3,"question":"2. What is the capital of the Russian Federation?","choices":["Prague","Minsk","Washington","Moscow"],"correctAnswer":"Moscow"},{"sequence":4,"question":"3. Who was the first man in space","choices":["Armstrong","Leonov","Titov","Gagarin","Gorbachev"],"correctAnswer":"Gagarin"},{"sequence":5,"question":"4. Who is the President of the USA","choices":["Putin","Psaki","Clinton","Obama"],"correctAnswer":"Obama"}]"














Multiple choice quiz notes
// to access a property of an object...
allQuestions[0].choices[0]





Problems:
- need to get the value of the clicked span SOLVED. You got to be a fucking idiot - navSpan = event.target.innerHTML;
  navSpan = event.target.tagName; 
  content = navSpan.innerHTML; // did not work

document.getElementById("navigation").nextSibling // giving #text

document.querySelectorAll("#seqSpan") // gives an array

event.target.value; ?
event.target.name; ?
event.target.tagName;




- cannot display a question through a function and click SOLVED
 function getQuestion(/*question/*, choice*/){ // display question and choices
  console.log("getQuestion message");
  var questionPar = document.createElement("p");
  var text = document.createTextNode(allQuestions[0].question);
  var textText = document.createTextNode("test");
  var displayText =questionPar.appendChild(text);
  questionPar.appendChild(textText);
  /*questionPar.setAttribute("id", "question");
  document.getElementById("question").innerHTML = allQuestions[0].question;*/
  
  /*for(i=0; i<3; i++){
    document.getElementById("QuestionChoice").innerHTML = allQuestions[question].choices[i];
  }*/
}

document.getElementsByTagName("button")[1].addEventListener("click", function(){
  getQuestion();
});

// solving
var myP = document.createElement("p");
myP.setAttribute("id", "myParagraph");
//document.getElementById("myParagraph").innerHTML = "chlen sobachiiy";
var myId = document.getElementById("myParagraph"); // gives null

var Block = document.getElementById("questionBlock"); // returns the id
// So it is obvious the script element is loaded after document.getElementById("myParagraph"); or somththing

// worked. I never appneded the element to the document, fucking morron
var myP = document.createElement("p");
myP.setAttribute("id", "myParagraph");
var questionBlock = document.getElementById("questionBlock");
questionBlock.appendChild(myP);
myP.innerHTML = "hey hey";


- Why is question replaces each other and choices do not? Because the question uses .innerHTML
- What is the allQuestions array? And what are these items: question, choices and correctAnswer?
allQuestions is an array that consisits of "nameless" object literals 
var allQuestions = [
  {question: "1. Who is Prime Minister of the United Kingdom?", choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"], 
  correctAnswer:0},
  {question: "2. What is the capital of the Great Britain?", choices: ["Paris", "Warsaw", "London", "Liverpool"], correctAnswer:2},
  {question: "3. What is the capital of the Russian Federation?", choices: ["Prague", "Minsk", "Washington", "Moscow"], correctAnswer:3},
  {question: "4. Who was first man in space", choices: ["Armstrong", "Titov", "Gagarin", "Gorbachev"], correctAnswer:2},
  {question: "5. Who is the President of the USA", choices: ["Putin", "Psaki", "Clinton", "Obama"], correctAnswer:3},
];
- How to create new item in allQuestions array and add user's answer there? Get reqired object literal allQuestions[0], then using dot notation ...
allQuestions[0].userAnswer = "this is the answer";
 - Why qInd-1 in allQuestions[qInd-1].userAnswer

if(qInd==5){document.getElementById("next").innerHTML = "Finish"}

qInd = navSpan-1;


Things to do 
- allow multiple answers.
- fix checkboxes appearing. If more thn one cb checked they do not appear when using navigation numbers
- if you check and do not click next, checked box won't be saved.


before release
- add var to make local variables
- possibly give question function as a callback to the cick event?

Things that are done
- display different cursor on navigation nums when not allowed to go
- allow any number of choices for one question.
- when all questions are answered (checked), if you navigate to any question, not necessearaliy the last one, and you click "next" you wil be directed to the result
- make user to navigate only answered questions
- diplay question navigation bar
- when you go back then next checkboxex are not checked
- copmare user s answer with the correct answer 
- function to get the answer Done
- last question problem. Not getting answer. 
At the last interation I got qInd == 5, why?. 
Not getting answer because now it chehkc only the frist box with Putin choice coz myBoxElse = document.getElementById("myCheckbox")
(need to get all the inputs one by one. Here it only gets the first one thruogh all iterations)
forEach does not work
SOLVED by: var allCheckBoxes = document.getElementsByTagName("input"); if(allCheckBoxes[i].checked == true) ...



Things to improve


Improve Your Quiz Application From Earlier:
Add client-side data validation: make sure the user answers each question before proceeding to the next question.
Store the quiz questions in an external JSON file.
Add a “Back” button to allow the user to go back and change her answer. The user can go back up to the first question. For the questions that the user has answered already, be sure to show the radio button selected, so that the user is not forced to answer the questions again, which she has completed.
Use jQuery to add animation (fade out the current question and fade in the next question).
Test the quiz on IE 9, and fix any bugs. This will give you a good workout 😉

Add user authentication: allow users to log in, and save their login credentials to local storage (HTML5 browser storage).
Use cookies to remember the user, and show a “Welcome, ‘First Name'” message when the user returns to the quiz.



local vars from back()
    var currentChoice = allQuestions[qInd-2].choices[choiceInd]; // Display choices. Get the choice item. 
    var choiceSpan = document.createElement("span");             // create span element
    choiceSpan.setAttribute("id", "choiceId");
    var choiceText = document.createTextNode(currentChoice);   // create text node with choice item as text
    choiceSpan.appendChild(choiceText);                      // append text to the span 
    document.getElementById("choiceBlock").appendChild(choiceSpan);