var allQuestions = [
  {sequence: 1, question: "Who is Prime Minister of the United Kingdom?", choices: ["Theresa May", "Winston Churchill", "Tony Blair"], 
  correctAnswer:"Theresa May"},
  {sequence: 2, question: "What is the capital of the Great Britain?", choices: ["Paris", "Warsaw", "London", "Liverpool", "Budapest"], 
  correctAnswer:"London"},
  {sequence: 3, question: "What is the capital of the Russian Federation?", choices: ["Prague", "Minsk", "Washington", "Moscow"], 
  correctAnswer:"Moscow"},
  {sequence: 4, question: "Who was the first man in space", choices: ["Armstrong", "Leonov", "Titov", "Gagarin", "Gorbachev"], 
  correctAnswer:"Gagarin"},
  {sequence: 5, question: "Who is the President of the USA", choices: ["Putin", "Psaki", "Clinton", "Obama"], correctAnswer:"Obama"},
];


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
      alert("please, make a choice");
      return
    }
  }
  if(qInd<allQuestions.length){ // interates questions
      if(qInd>0){ // call remove() except the first time
        remove();
      }
    // Get and display question.
    //var numSpan = document.createElement("span"); 

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
    showResult();
  }  
} // getQuestion()

function remove(){
  document.getElementById("questionBlock").innerHTML = "";
  document.getElementById("choiceBlock").innerHTML = "";
}
function getAnswer(event){
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
  numOfCorAnswers = 0;
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

function navigate(event){
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

function showResult(){
  // remove buttons
  document.getElementById("back").parentNode.removeChild( document.getElementById("back"));
  document.getElementById("next").parentNode.removeChild( document.getElementById("next"));
  // calculate and display the result 
  var body = document.body;
  var result = numOfCorAnswers / allQuestions.length * 100;
  // save the result to localStorage for the current user
  if(localStorage.getItem("loggedOut")=="In"){ 
    var user = localStorage.getItem(currentUser + "Credentials");
    user = JSON.parse(user);
    if(user!=null){
      user.result = result + "%";
      localStorage.setItem(currentUser + "Credentials", JSON.stringify(user));
    }
  } 
  // display result
  document.getElementById("userResult").innerHTML = "You score is: " + result + " out of 100";

  /*var resultP = document.createElement("p");
  resultP.setAttribute("id", "resultPId");
  resultText = document.createTextNode("You score is: " + result + " out of 100");
  resultP.appendChild(resultText);
  body.appendChild(resultP); */
  for(var qIndex=0; qIndex<allQuestions.length; qIndex++){ // iterates questions 
    // create a questionDiv, append the question
    var wrapDiv = document.createElement("div"); // create a div for each question and its choices
    var questionP = document.createElement("p");  // create question p
    questionP.setAttribute("class", "questions");
    var questionText = document.createTextNode(allQuestions[qIndex].sequence + ". " + allQuestions[qIndex].question); // save current question to the p
    questionP.appendChild(questionText); // appended, not diplayed yet
    var radioDiv  = document.createElement("div"); // div for radio btns and choices  
    radioDiv.setAttribute("class", "choices"); // for further styling
    for(var choiceInd=0; choiceInd<allQuestions[qIndex].choices.length; choiceInd++){ // iterates through choices
      var choiceSpan = document.createElement("span");  // create span element
      var answer = allQuestions[qIndex].userAnswer; // save the user answer
      if(answer==allQuestions[qIndex].choices[choiceInd]){ 
        // create checked radio btn, append it to question in the questionDiv
        var myRadio = document.createElement("input");
        myRadio.setAttribute("type", "radio");
        myRadio.setAttribute("id", "radioId");
        myRadio.setAttribute("name" + "qIndex", "myBtns");
        var currentChoice = allQuestions[qIndex].choices[choiceInd]; //  get the choice item. 
        myRadio.setAttribute("value", currentChoice);
        myRadio.checked = true // check the radio btn
        //color answer
        if(answer==allQuestions[qIndex].correctAnswer){
          choiceSpan.style.color = "#00e600";
        }else{
          choiceSpan.style.color = "red";
        }
      }else{ 
        // create unchecked radio btn, append it to question in the questionDiv
        var myRadio = document.createElement("input");
        myRadio.setAttribute("type", "radio");
        myRadio.setAttribute("id", "radioId");
        myRadio.setAttribute("name" + "qIndex", "myBtns");
        var currentChoice = allQuestions[qIndex].choices[choiceInd]; //  get the choice item. 
        myRadio.setAttribute("value", currentChoice);
        // make green correct answer thaw was not checked
        if(allQuestions[qIndex].choices[choiceInd]==allQuestions[qIndex].correctAnswer){ 
          choiceSpan.style.color = "#00e600";
        }
      }
      // append radiobtn value as text to the radio btn 
      myRadio.disabled = "true"; // disable checking / unchecking
      
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
    body.appendChild(wrapDiv);
  } // for loop iterate quetions qIndex<allQuestions.length
}



document.getElementById("next").addEventListener("click", getQuestion);
document.getElementById("navigation").addEventListener("click", navigate);
 
document.getElementById("back").addEventListener("click", back);

document.getElementById("choiceBlock").addEventListener("click", getAnswer);

//display registration log in forms
document.getElementById("signIn").addEventListener("click", function(){
  document.getElementById("logIn").style.display = "block";
});
/*document.getElementById("signUp").addEventListener("click", function(){
  document.getElementById("register").style.display = "block";
});*/

document.getElementById("regBtn").addEventListener("click", registration); 
document.getElementById("signInBtn").addEventListener("click", signIn); 


// check if the first password marches the second
var match = false;
$("#confirmedPassword").on('keyup', function(){
  if ($(this).val() == $('#password').val()){
     $('#message').html('matching').css('color', 'green');
     match = true;
  }else{
    $('#message').html('not matching').css('color', 'red');
    match = false;
  }
});

var now = new Date(); // get the current date
// register user, get the form data and validate it
function registration(){
  var userName = $("#register input[name=uName]").val(); 
  var userPass = $("#register input[name=uPass]").val();
  var userConfirmedPass = $("#register input[name=uConfirmedPass]").val();
  if(userPass!=userConfirmedPass){
    alert("passwords do not match");
  }else{
    // store an object in Localstorage with username, password and date 
    expDate = new Date();
    expDate.setMonth(expDate.getMonth() + 6); // set the date + 6 months
    // function to create an obejct for localStorage
    function storeUser(nameArg, passwordArg, expDateArg){
      var userOne = {name: nameArg, password: passwordArg, expDate: expDateArg};
      userOne = JSON.stringify(userOne);
      localStorage.setItem(userName + "Credentials", userOne);  // save to localStorage
    }
    // cal the function
    storeUser(userName, userConfirmedPass, expDate);
    //clear fields
    document.querySelector("input[name=uName]").value = "";
    document.querySelector("input[name=uPass]").value = "";
    document.querySelector("input[name=uConfirmedPass]").value = "";
    document.getElementById("register").style.display = "none";
    alert("thanks for signing up");
    document.getElementById("regLog").removeChild(document.getElementById("signUp")); // remove  "sign up"
    modal.style.display = "none";
    document.getElementById("signIn").innerHTML = userName; // display user instead of "sign in"
    LogOutSpan();
    localStorage.setItem("loggedOut", "In");
    currentUser = userName; // get the current user name to use it later for assocating quiz result with it
    localStorage.setItem("lastSignedIn", userName); // save last signed in user name
  }
}
function signIn(){
  var singInName = $("#logIn input[name=uname]").val();
  var singInPass = $("#logIn input[name=upass]").val();
  // compare against localStorage data
  var storedUser = JSON.parse(localStorage.getItem(singInName + "Credentials")); // get the stored obj first

  if(singInPass==storedUser.password){
  currentUser = singInName; // get the current user name to use it later for assocating quiz result with it
  alert("you are signed in as " + singInName);
  document.getElementById("signIn").innerHTML = singInName; // display user instead of "sign in"
  document.querySelector("#logIn input[name=uname]").value = "";
  document.querySelector("#logIn input[name=upass]").value = "";
  document.getElementById("logIn").style.display = "none";
  // show previous result
  if(storedUser.result!=undefined){
    document.getElementById("userResult").innerHTML = "Your previous result is " + storedUser.result; 

    /*var resultP = document.createElement("p");
    resultP.innerHTML = "Your previous result is " + storedUser.result; 
    document.body.appendChild(resultP);*/
  }
  if(document.getElementById("signUp")){ // remove  "sign up". (TypeError: Argument 1 of Node.removeChild is not an object.)
    var signUpSpan = document.getElementById("signUp");
    document.getElementById("regLog").removeChild(signUpSpan);
  }
  localStorage.setItem("loggedOut", "In");
  localStorage.setItem("lastSignedIn", singInName); // save last signed in user name
 }else{
  alert("user name or password is incorrect");
 }
}

// sing in user automatically
function rememberUser(){
  if(localStorage.getItem("loggedOut")=="In"){
    var lastUser = localStorage.getItem("lastSignedIn"); // get the previously 
    var user = localStorage.getItem(lastUser + "Credentials"); // signed in user
    if(user!=null){
      user = JSON.parse(user);
      document.getElementById("signIn").innerHTML = user.name; // display user instead of "sign in"
      document.getElementById("regLog").removeChild(document.getElementById("signUp")); // remove "sign up"
      LogOutSpan();
      // display result if any
      if(user.result!=undefined){
        document.getElementById("userResult").innerHTML = "your previous result is: " + user.result;
      }
    }
  }
}

rememberUser();

function LogOutSpan(){
  var logout = document.createElement("span");
  logout.setAttribute("id", "logout");
  var text = document.createTextNode("Log out");
  logout.appendChild(text);
  document.getElementById("logoutDiv").appendChild(logout);
}


// modal windows
var modal = document.getElementById("myModal")
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var logIn = document.getElementById("logIn");
var register = document.getElementById("register");
var signInBtn = document.getElementById("signInBtn");

if(document.getElementById("signUp")){ // seems like this condition won't work... returnung false anyway
  document.getElementById("signUp").addEventListener("click", function(){ 
    modal.style.display = "block";
    register.style.display = "block";
    logIn.style.display = "none";
  })
}
document.getElementById("signIn").addEventListener("click", function(){
  modal.style.display = "block";
  logIn.style.display = "block";
  register.style.display = "none";
})

signInBtn.onclick = function() {
    modal.style.display = "none";
}
span.onclick = function() {
    modal.style.display = "none";
}
span2.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event){ // When the user clicks anywhere outside of the modal, close it
    if (event.target == modal){
        modal.style.display = "none";
    }
}

//log user out. 1) remove the username text 2) do not run rememberUser() and do not save his results
if(document.getElementById("logout")){
  document.getElementById("logout").addEventListener("click", function(){ // giving an error as no logout
    console.log("clicked logout");
    localStorage.setItem("loggedOut", "Out");
    document.getElementById("signIn").innerHTML = "Sign in";  // instead of username
    document.getElementById("userResult").innerHTML = ""; // delete user result

    document.getElementById("logout").remove(); // delete "log out" 
    // add "sing up". The modal does no work with it
    /*var signUpSpanNew = document.createElement("span");
    signUpSpanNew.setAttribute("id", "signUp");
    var signUpText = document.createTextNode("Sign up");
    signUpSpanNew.appendChild(signUpText);
    document.getElementById("regLog").appendChild(signUpSpanNew);*/

  });
}
