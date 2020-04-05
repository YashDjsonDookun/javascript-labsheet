var currentPage = document.location.pathname;
var myDate = new Date();
var btn = document.createElement('button');
var btn2 = document.createElement('button');
var btn3 = document.createElement('button');

function Start() {
    document.location = "question1.html";
    SwitchQuestions();
}

function SwitchQuestions() {
    if (currentPage.includes("index.html") || currentPage == "/") {
        alert("The time is " + myDate.getHours() + ":" + myDate.getMinutes());
    } else if (currentPage.includes("question1.html")) {
        document.write('<pre>');
        document.writeln("<FONT color=blue size=6>The time is " +
            myDate.getHours() + ":" + myDate.getMinutes() +
            "<FONT>");
        btn.innerHTML = "Question 2 pt.2";
        btn.setAttribute("id", "question3");
        btn.setAttribute("onClick", "Question2pt2()");
        document.body.appendChild(btn)
        btn.style.cssText = "height: 15vh; width: 35vh; font-size: 3em; border-radius: 1.4vh;border: solid .6vh #000; position: absolute; top: 50%; left: 50%;transform: translate(-50%,-50%);"
    }
}

function Question2pt2() {
    document.write('<pre>');
    if (myDate.getHours() < 12 && myDate.getHours() > 0) {
        document.writeln("<FONT color= blue size = 6 > Good Morning, \nThe time is " +
            myDate.getHours() + ":" + myDate.getMinutes() +
            "<FONT>");
    } else {
        document.writeln("<FONT color= blue size = 6 > Good Afternoon, \nThe time is " +
            myDate.getHours() + ":" + myDate.getMinutes() +
            "<FONT>");
    }
    btn.style.display = "none";
    btn2.innerHTML = "Question2 pt3";
    btn2.setAttribute("id", "question2pt2");
    btn2.setAttribute("onClick", "Question2pt3()");
    document.body.appendChild(btn2)
    btn2.style.cssText = "height: 15vh; width: 35vh; font-size: 3em; border-radius: 1.4vh;border: solid .6vh #000; position: absolute; top: 50%; left: 50%;transform: translate(-50%,-50%);"
}

function Question2pt3() {
    var i = 1;
    document.write("<pre>");
    do {
        document.writeln("<h" + i + " style='color: #000'>" + "This is header " + i);
        i++;
    }
    while (i < 7);

    btn2.style.display = "none";
    btn3.innerHTML = "Question3 - EventHandling";
    btn3.setAttribute("id", "question3");
    btn3.setAttribute("onClick", "MoveToEventHandling()");
    document.body.appendChild(btn3)
    btn3.style.cssText = "height: 15vh; width: 40vh; font-size: 3em; border-radius: 1.4vh;border: solid .6vh #000; position: absolute; top: 50%; left: 50%;transform: translate(-50%,-50%);"
}

function MoveToEventHandling() {
    document.location = "./question3.html";
}

function validateLogin() {
    var username = document.querySelector("#username").value;
    var password = document.querySelector("#password").value;

    if (username == "" || username == null) {
        alert("Username cannot be blank");
    } else if (password == "" || password == null) {
        alert("Password cannot be blank");
    } else {
        if (!(password.includes('@'))) {
            alert("Password should contain the '@' character!");
        } else {
            alert("Validation successful...");
        }
    }
}