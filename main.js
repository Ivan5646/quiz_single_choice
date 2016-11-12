var allQuestions = [
  {sequence: 1, question: "0. Who is Prime Minister of the United Kingdom?", choices: ["Theresa May", "Winston Churchill", "Tony Blair"], 
  correctAnswer:"Theresa May", userAnswer: "Theresa May"},
  {sequence: 2, question: "1. What is the capital of the Great Britain?", choices: ["Paris", "Warsaw", "London", "Liverpool", "Budapest"], 
  correctAnswer:"London", userAnswer: "Paris"},
  {sequence: 3, question: "2. What is the capital of the Russian Federation?", choices: ["Prague", "Minsk", "Washington", "Moscow"], 
  correctAnswer:"Moscow", userAnswer: "Prague"},
  {sequence: 4, question: "3. Who was the first man in space", choices: ["Armstrong", "Leonov", "Titov", "Gagarin", "Gorbachev"], 
  correctAnswer:"Gagarin", userAnswer: "Gagarin"},
  {sequence: 5, question: "4. Who is the President of the USA", choices: ["Putin", "Psaki", "Clinton", "Obama"], correctAnswer:"Obama", 
  userAnswer: "Clinton"},
];

/*
for(var i=0; i<allQuestions.length; i++){  // Display navigation
  var seqSpan = document.createElement("span");
  seqSpan.setAttribute("class", "seqSpan");
  seqSpan.innerHTML = allQuestions[i].sequence;
  document.getElementById("navigation").appendChild(seqSpan);
}

var qInd;
if (qInd===null || qInd===undefined){ // initialize qInd
  qInd = 0;
}

getQuestion(); // call the function here to display the first question

function getQuestion(){

  if(qInd>0){ // prevent from goinf forward if no radio btn was checked
    if(allQuestions[qInd-1].userAnswer==undefined){
      alert("choose");
      return
    }
  }
  if(qInd<allQuestions.length){ // interates questions
      if(qInd>0){ // call remove() except the first time
        remove();
      }
    // Get and display question.
    var myP = document.createElement("p"); 
    myP.setAttribute("id", "myPId");
    document.getElementById("questionBlock").appendChild(myP); // appends empty paragraph
    document.getElementById("myPId").innerHTML = allQuestions[qInd].question; // inserts text from the array    
    // Get and display choices and radio btns.
    for(var choiceInd=0; choiceInd<allQuestions[qInd].choices.length; choiceInd++){ // iterates through choices
      var answer = allQuestions[qInd].userAnswer // save the user answer
      if(answer==allQuestions[qInd].choices[choiceInd]){ 
        // Display checked radio btns.
        var myRadio = document.createElement("input");
        myRadio.setAttribute("type", "radio");
        myRadio.setAttribute("id", "radioId");
        myRadio.setAttribute("name" + "qInd", "myBtns");
        var currentChoice = allQuestions[qInd].choices[choiceInd]; //  get the choice item. 
        myRadio.setAttribute("value", currentChoice);
        myRadio.checked = true // check the radio btn
        document.getElementById("choiceBlock").appendChild(myRadio);
      }else{ 
        // Display unchecked checkboxes.
        var myRadio = document.createElement("input");
        myRadio.setAttribute("type", "radio");
        myRadio.setAttribute("id", "radioId");
        myRadio.setAttribute("name"+ "qInd", "myBtns");
        var currentChoice = allQuestions[qInd].choices[choiceInd]; //  get the choice item. 
        myRadio.setAttribute("value", currentChoice);
        document.getElementById("choiceBlock").appendChild(myRadio);
      }
      // Display choices.
      var choiceSpan = document.createElement("span");  // create span element
      choiceSpan.setAttribute("id", "choiceId");
      choiceSpan.setAttribute("class", "choiceClass");
      var choiseValue = myRadio.getAttribute("value"); // get the choice item from radio btn value
      choiseValue = choiseValue.toString();
      var choiceText = document.createTextNode(choiseValue);
      choiceSpan.appendChild(choiceText); 
      document.getElementById("choiceBlock").appendChild(choiceSpan);
    } // iterates through choices   
    highlight(); // highlight current question number in naviagation
    qInd++;
    displayFinish();
  }else{ // qInd<allQuestions.length
    getResult();
    remove();
    document.getElementById("navigation").innerHTML = "";  
    document.getElementById("next").parentNode.removeChild(document.getElementById("next"));
    document.getElementById("next").parentNode.removeChild(document.getElementById("back"));
  }  
} // getQuestion()

function remove(){
  document.getElementById("questionBlock").innerHTML = "";
  document.getElementById("choiceBlock").innerHTML = "";
}
function getAnswer(){
  allQuestions[qInd-1].userAnswer = event.target.getAttribute("value");
  console.log(allQuestions[qInd-1].userAnswer);
  // css change cursor
  mySeqSpansAn = document.getElementsByClassName("seqSpan")
  for (var i=0; i<mySeqSpansAn.length; i++){
    if(allQuestions[qInd-1].userAnswer!=undefined && mySeqSpansAn[i].innerHTML == qInd){
      mySeqSpansAn[i].style.cursor = "pointer"; 
    }
  } 
}
function getResult(){
  var numOfCorAnswers = 0;
  var userAnswers = [];
  for(var i=0; i<allQuestions.length; i++){
    if(allQuestions[i].correctAnswer===allQuestions[i].userAnswer){
      numOfCorAnswers++
    }
    userAnswers.push(i + ". " + allQuestions[i].userAnswer);
  }
  console.log("correct answers " + numOfCorAnswers);
  console.log(userAnswers);
}

function navigate(){
  var mySeq = document.querySelectorAll("#seqSpan");
  var navSpan = event.target.innerHTML; // get the value of the clicked span
  if(allQuestions[navSpan-1].userAnswer){ // make user to navigate only to answered questions
    document.getElementById("choiceBlock").innerHTML = "";// remove choices and radio btns
    for(var choiceInd=0; choiceInd<allQuestions[navSpan-1].choices.length; choiceInd++){
      // display required question and stuff
      document.getElementById("myPId").innerHTML = allQuestions[navSpan-1].question; // inserts text from the array
      var answer = allQuestions[navSpan-1].userAnswer // save the user answer
      if(answer==allQuestions[navSpan-1].choices[choiceInd]){ 
        // Display checked radio btns
        var myRadio = document.createElement("input");
        myRadio.setAttribute("type", "radio");
        myRadio.setAttribute("id", "radioId");
        myRadio.setAttribute("name", "myBtns");
        var currentChoice = allQuestions[navSpan-1].choices[choiceInd]; //  get the choice item. 
        myRadio.setAttribute("value", currentChoice);
        myRadio.checked = true // check the radio btn
        document.getElementById("choiceBlock").appendChild(myRadio);
      }else{ 
        // display unchecked checkboxes
        var myRadio = document.createElement("input");
        myRadio.setAttribute("type", "radio");
        myRadio.setAttribute("id", "radioId");
        myRadio.setAttribute("name", "myBtns");
        var currentChoice = allQuestions[navSpan-1].choices[choiceInd]; //  get the choice item. 
        myRadio.setAttribute("value", currentChoice);
        document.getElementById("choiceBlock").appendChild(myRadio);
      }
      // Display choices.
      var choiceSpan = document.createElement("span");  // create span element
      choiceSpan.setAttribute("id", "choiceId");
      choiceSpan.setAttribute("class", "choiceClass");
      var choiseValue = myRadio.getAttribute("value"); // get the choice item from radio btn value
      choiseValue = choiseValue.toString();
      var choiceText = document.createTextNode(choiseValue);
      choiceSpan.appendChild(choiceText); 
      document.getElementById("choiceBlock").appendChild(choiceSpan);

      qInd = parseInt(navSpan); // for proper navigation 

    } // the end of for loop
    
    // test highlight
    var mySeqSpans = document.getElementsByClassName("seqSpan")
    for (var i=0; i<mySeqSpans.length; i++){
      if(mySeqSpans[i].innerHTML==qInd){
        mySeqSpans[i].style.color = "#ff1a1a";
      }else{
        mySeqSpans[i].style.color = "black";
      }
    } 

    if(navSpan==5){  // code repetition. Display "finsh" at the last question
      document.getElementById("next").innerHTML = "Finish"; console.log("change next to finish");
    }else{
      document.getElementById("next").innerHTML = "next";
    }
  } // the end of if condition allQuestions[navSpan-1].userAnswer
} // navigate()
function back(){ // nned to prevent from error when going back
  if(qInd<=1){
    return
  }
  remove();
  qInd = qInd-2;
  getQuestion();
}
function displayFinish(){
  if(qInd==5){
  document.getElementById("next").innerHTML = "Finish"; console.log("change next to finish");
  }else{
    document.getElementById("next").innerHTML = "next";
  }
}
function highlight(){
  var mySeqSpans = document.getElementsByClassName("seqSpan")
  for (var i=0; i<mySeqSpans.length; i++){
    if(mySeqSpans[i].innerHTML==qInd+1){
      mySeqSpans[i].style.color = "#ff1a1a";
    }else{
      mySeqSpans[i].style.color = "black";
    }
  } 
}
*/


function showResult(){
  document.getElementById("back").parentNode.removeChild( document.getElementById("back"));
  document.getElementById("next").parentNode.removeChild( document.getElementById("next"));
  for(var qIndex=0; qIndex<allQuestions.length; qIndex++){ // iterates questions 
    // create a questionDiv, append the question
    var wrapDiv = document.createElement("div"); // create a div for each question and its choices
    var questionP = document.createElement("p");  // create question p
    var questionText = document.createTextNode(allQuestions[qIndex].question); // save current question to the p
    questionP.appendChild(questionText); // appened, not diplayed yet
    var radioDiv  = document.createElement("div"); // div for radio btns and choices    
    for(var choiceInd=0; choiceInd<allQuestions[qIndex].choices.length; choiceInd++){ // iterates through choices
      var answer = allQuestions[qIndex].userAnswer // save the user answer
      if(answer==allQuestions[qIndex].choices[choiceInd]){ 
        // create checked radio btn, append it to question in the questionDiv
        var myRadio = document.createElement("input");
        myRadio.setAttribute("type", "radio");
        myRadio.setAttribute("id", "radioId");
        myRadio.setAttribute("name" + "qIndex", "myBtns");
        var currentChoice = allQuestions[qIndex].choices[choiceInd]; //  get the choice item. 
        myRadio.setAttribute("value", currentChoice);
        myRadio.checked = true // check the radio btn
      }else{ 
        // create unchecked radio btn, append it to question in the questionDiv
        var myRadio = document.createElement("input");
        myRadio.setAttribute("type", "radio");
        myRadio.setAttribute("id", "radioId");
        myRadio.setAttribute("name" + "qIndex", "myBtns");
        var currentChoice = allQuestions[qIndex].choices[choiceInd]; //  get the choice item. 
        myRadio.setAttribute("value", currentChoice);
      }
      // append radiobtn value as text to the radio btn 
      myRadio.disabled = "true"; // disable checking / unchecking
      var choiceSpan = document.createElement("span");  // create span element
      var choiceValue = myRadio.getAttribute("value"); // get the choice item from radio btn value
      choiceValue = choiceValue.toString();
      var choiceText = document.createTextNode(choiceValue);
      choiceSpan.appendChild(choiceText);
      radioDiv.appendChild(myRadio);
      radioDiv.appendChild(choiceSpan); //append choice to the radio btn. 
    } // iterates through choices   
    // display everything here
    wrapDiv.appendChild(questionP);
    wrapDiv.appendChild(radioDiv);
    var body = document.body;
    body.appendChild(wrapDiv);
  } // for loop iterate quetions qIndex<allQuestions.length
}

showResult();

/*
document.getElementById("next").addEventListener("click", getQuestion);
document.getElementById("navigation").addEventListener("click", navigate);
 
document.getElementById("back").addEventListener("click", back);

document.getElementById("choiceBlock").addEventListener("click", getAnswer);
*/

