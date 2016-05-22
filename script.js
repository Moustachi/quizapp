$( document ).ready(function() {
    console.log( "ready!" )

    $(".question1").hide();
    $(".question2").hide();
    $(".question3").hide();
    $(".question4").hide();
    $(".question5").hide();
    
    $(".question1c").hide();
    $(".question2c").hide();
    $(".question3c").hide();
    $(".question4c").hide();
    $(".question5c").hide();
});

//What do we need to do first?
//Let's explain how the quiz app works first:
//The quiz app asks the user 5 questions.
//Let's come up with 5 guestions
//while we're at it, let's style the questions
//section
//step: 1. come up with the questions
// 2. as you create the questions, style them,
//and hide them.
//3. style the checkboxes, then add answers.
//4. style the answers and hide them.