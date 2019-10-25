var questionsArray = [
    "What is Earth's largest continent?",
    "In which state is Mount Rushmore located?",
    "Which is the largest country in the world by area?",
    "What is the name of Japan's main island?",
    "Which ocean is the largest?",
    "How many countries are in Europe?",
    "Which country has the largest population?",
    "Which is the longest river in the US?",

];
var answersArray = [
    ["Asia", "North-America", "Africa"],
    ["Nevada", "South Dakota", "Montana"],
    ["Russia", "China", "Brazil"],
    ["Honshu", "Kyushu", "Yakushima"],
    ["Pacific", "Atlantic", "Indian"],
    ["33", "44", "55"],
    ["India", "China", "Russia"],
    ["Mississippi River", "Yukon River", "Missouri River"]

];
var correctArray = [
    "Asia", "South Dakota", "Russia", "Honshu", "Pacific", "44", "China", "Mississippi River"

];

window.onload = function () {
    $("#startButton").on("click", start);

};

var intervalId;
var stopTime = (time = "00:00")
var clockRunning = false;
var time = 0;


function reset() {

    time = 0;
    $("#time").text("00:59");

}
function start() {
    if (!clockRunning) {
        intervalId = setInterval(count, 1000);
        clockRunning = true;
    }
}
function stop() {
    
    alert("Time's up!")
    clearInterval(intervalId);
    clockRunning = false;
}

function count() {

    
    time --;
    var converted = timeConverter(time);
    console.log(converted);
    $("#time").text(converted);
}
function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00";
    }
    else if (minutes < 10) {
        minutes = "0" - minutes;
    }

    return minutes + ":" + seconds;
}


$(document).ready(function () {
    for (i = 0; i < questionsArray.length; i++) {
        $("#quiz").append("<p>" + questionsArray[i] + "</p>");
        var currentAnswers = answersArray[i]
        $("#quiz").append("<input type='radio' name='q" + parseInt(i) + "' value='" + currentAnswers[0] + "'/>" + currentAnswers[0] + "<br/>");
        $("#quiz").append("<input type='radio' name='q" + parseInt(i) + "' value='" + currentAnswers[1] + "'/>" + currentAnswers[1] + "<br/>");
        $("#quiz").append("<input type='radio' name='q" + parseInt(i) + "' value='" + currentAnswers[2] + "'/>" + currentAnswers[2] + "<br/>");

        //alert("Press OK to begin!");

        // var time = $(".time").text();
        // var interval = setInterval(function() {
        //     var count = time.split(':');
        //     var hour = count[0];
        //     var minute = count[1];
        //     var second = count[2];
        //     var counter = $(".timer").find("span");
        //     counter.eq(0).text(hour);
        //     counter.eq(1).text(minute);
        //     counter.eq(2).text(second);
        //     if (hour === 0 && minute === 0) {
        //         alert("60 seconds remaining")
        //     }

        //     if (second === 0) {
        //         if (minute != 0) {
        //             counter.eq(1).text(minute--);
        //             second = 59;
        //         }
        //         else if (minute === 0 && second === 0)
        //             alert("times up!")
        //     }
        // })






        // input type='radio' name='q0' value='a1'>

    }

    // Now, append the button that calculates the score
    $("#quiz").append('<button class="btn btn-info btn-lg" onclick="calculate_score();">Get Score</button>');





})


function calculate_score() {


    var numCorrect = 0;
    for (i = 0; i < questionsArray.length; i++) {
        if ($("input[name='q" + parseInt(i) + "']:checked").val() == correctArray[i]) {
            numCorrect++;
        }


        // This returns the user answer for the first question (question with name q0)
        // $("input[name='q0']:checked").val()

    }
    console.log("score: " + numCorrect + " out of 8 ")
    alert("score: " + numCorrect + " out of 8 ");
}