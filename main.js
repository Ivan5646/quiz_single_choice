var allQuestions = [
  {sequence: 1, question: "0. Who is Prime Minister of the United Kingdom?", choices: ["Theresa May", "Winston Churchill", "Tony Blair"], 
  correctAnswer:"Theresa May"},
  {sequence: 2, question: "1. What is the capital of the Great Britain?", choices: ["Paris", "Warsaw", "London", "Liverpool", "Budapest"], correctAnswer:"London"},
  {sequence: 3, question: "2. What is the capital of the Russian Federation?", choices: ["Prague", "Minsk", "Washington", "Moscow"], correctAnswer:"Moscow"},
  {sequence: 4, question: "3. Who was the first man in space", choices: ["Armstrong", "Leonov", "Titov", "Gagarin", "Gorbachev"], correctAnswer:"Gagarin"},
  {sequence: 5, question: "4. Who is the President of the USA", choices: ["Putin", "Psaki", "Clinton", "Obama"], correctAnswer:"Obama"},
];

for(var i=0; i<allQuestions.length; i++){  // Display navigation
  var seqSpan = document.createElement("span");
  seqSpan.setAttribute("class", "seqSpan");
  seqSpan.innerHTML = allQuestions[i].sequence;
  document.getElementById("navigation").appendChild(seqSpan);
}

getQuestion(); // call the function here to display the first question

var qInd;
function getQuestion(){
  if (qInd===null || qInd===undefined){ // initialize qInd
    qInd = 0;
  }
  if(qInd<allQuestions.length){ // interates questions
    // Get and display question.
    var myP = document.createElement("p"); 
    myP.setAttribute("id", "myPId");
    document.getElementById("questionBlock").appendChild(myP); // appends empty paragraph
    document.getElementById("myPId").innerHTML = allQuestions[qInd].question; // inserts text from the array    
    // Get and display choices and radio btns.
    for(var choiceInd=0; choiceInd<allQuestions[qInd].choices.length; choiceInd++){ // iterates through choices
      var answer = allQuestions[qInd].userAnswer // save the user answer
      if(answer==allQuestions[qInd].choices[choiceInd]){ 
        // Display checked radio btns
        var myRadio = document.createElement("input");
        myRadio.setAttribute("type", "radio");
        myRadio.setAttribute("id", "radioId");
        myRadio.setAttribute("name", "myBtns");
        var currentChoice = allQuestions[qInd].choices[choiceInd]; //  get the choice item. 
        myRadio.setAttribute("value", currentChoice);
        myRadio.checked = true // check the radio btn
        document.getElementById("choiceBlock").appendChild(myRadio);
      }else{ 
        // display unchecked checkboxes
        var myRadio = document.createElement("input");
        myRadio.setAttribute("type", "radio");
        myRadio.setAttribute("id", "radioId");
        myRadio.setAttribute("name", "myBtns");
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

    qInd++;
  }else{ // qInd<allQuestions.length
    getResult();   
  }  
} // getQuestion()



function remove(){
  document.getElementById("questionBlock").innerHTML = "";
  document.getElementById("choiceBlock").innerHTML = "";
}
function getAnswer(){
  var myRadios = document.getElementsByTagName("input");
  console.log(myRadios.length);
  for (var i = 0; i < myRadios.length; i++) {
    if(myRadios[i].checked){
      allQuestions[qInd-1].userAnswer = myRadios[i].getAttribute("value").toString();
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

      qInd = navSpan; // for proper navigation        
    } // the end of for loop
    if(navSpan==5){  // code repetition. Display "finsh" at the last question
      document.getElementById("next").innerHTML = "Finish"; console.log("change next to finish");
    }else{
      document.getElementById("next").innerHTML = "next";
    }
  } // the end of if condition allQuestions[navSpan-1].userAnswer
} // navigate()
function back(){
  qInd = qInd-2;
  getQuestion();
}

document.getElementById("next").addEventListener("click", getAnswer);
document.getElementById("next").addEventListener("click", remove);
document.getElementById("next").addEventListener("click", getQuestion);
document.getElementById("navigation").addEventListener("click", navigate);
 
document.getElementById("back").addEventListener("click", getAnswer);
document.getElementById("back").addEventListener("click", remove);
document.getElementById("back").addEventListener("click", back);