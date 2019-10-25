var questionsArray = ["What is Earth's largest continent?", "sampleQuestion2"];
var answersArray = [["a1", "a2", "a3"],
["a4", "a5", "a6"]];
var correctArray = ["a1", "a4"];

$(document).ready(function(){
for(i = 0; i < questionsArray.length; i++)
{
    $("#quiz").append("<p>" + questionsArray[i]+ "</p>");
    var currentAnswers = answersArray[i]
    $("#quiz").append("<input type='radio' name='q" + parseInt(i) + "' value='" + currentAnswers[0] + "'/>" + currentAnswers[0] + "<br/>");
    $("#quiz").append("<input type='radio' name='q" + parseInt(i) + "' value='" + currentAnswers[1] + "'/>" + currentAnswers[1] + "<br/>");
    $("#quiz").append("<input type='radio' name='q" + parseInt(i) + "' value='" + currentAnswers[2] + "'/>" + currentAnswers[2] + "<br/>");

    
    
    
    
    // input type='radio' name='q0' value='a1'>

}

// Now, append the button that calculates the score
    $("#quiz").append('<button class="btn btn-info btn-lg" onclick="calculate_score();">Get Score</button>');




})


function calculate_score()
{


    var numCorrect = 0; 
  for(i = 0; i < questionsArray.length; i++)
    {
        if ($("input[name='q" + parseInt(i) + "']:checked").val() == correctArray[i]) 
        {
            numCorrect++;
        }


        // This returns the user answer for the first question (question with name q0)
        // $("input[name='q0']:checked").val()

    } 
     console.log(numCorrect)
}