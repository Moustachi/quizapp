//---------------------Global Variables-----------------------//
var numberCorrect = 0;
var currentQuestion = 0;
//---------------------Global Variables-----------------------//

$(document).ready(function() {

    //-------------Stored the questions and choices--------------//
    //-------------in var questions.------------------------------//
    var questions = [{
        question: "Which character created the Matrix?",
        choices: ["Agent Smith", "The Oracle", "The Architect", "The Keymaker"],
        questionNum: 0,
        correct: 2,
    }, {
        question: "When the machines run the planet, for what purpose do they use the humans?",
        choices: ["Manual Labor", "Energy", "Experiments", "Circus acts"],
        questionNum: 1,
        correct: 1,
    }, {
        question: "What proverb is written in Latin over the Oracle’s kitchen door?",
        choices: ["Wisdom is Silence", "Know Thyself", "All is Vanity", "Carpe Diem"],
        questionNum: 2,
        correct: 1,
    }, {
        question: "Who makes a deal with Agent Smith to sell out Morpheus in The Matrix?",
        choices: ["Agent Smith", "Mouse", "Tank", "Cypher"],
        questionNum: 3,
        correct: 3,
    }, {
        question: "About what year is it in the ravaged real world?",
        choices: ["1999", "2199", "2060", "5416"],
        questionNum: 4,
        correct: 1,
    }]

    function evaluateChoice() {
        var answer = $("input[type='radio']:checked").val();
        if (answer == questions[currentQuestion].correct) {
            numberCorrect++;
            $(".currentCorrect").text(numberCorrect);
            alert("Correct");
        } else {
            alert("Incorrect");
        };
    }

    function nextQuestion() {
        var newQuestion = '<span class="question">' + questions[currentQuestion].question + '</span>'
        var newChoice = '<li>' + '<input type = "radio" name="option" class="option" value="0">' +
            " " + questions[currentQuestion].choices[0] + '</li>' +
            '<li>' + '<input type = "radio" name="option" class="option" value="1">' +
            " " + questions[currentQuestion].choices[1] + '</li>' +
            '<li>' + '<input type = "radio" name="option" class="option" value="2">' +
            " " + questions[currentQuestion].choices[2] + '</li>' +
            '<li>' + '<input type = "radio" name="option" class="option" value="3">' +
            " " + questions[currentQuestion].choices[3] + '</li>'
        $(".question").remove();
        $("li").remove();
        $(".questionsdiv").html(newQuestion);
        $(".choices").html(newChoice);
    }

    function generateChoices() {
        for (var i = 0; i < 4; i++) {
            $(".choices").append(
                '<li>'+
                '<input type = "radio" name="option" class="option" value="'+i+'">'+
                '<span class= appendedChoices>'+questions[currentQuestion].choices[i]+'</span>'+
                '</li>');
        }
    }


    function incrementQuestion() {
        if (currentQuestion == 0) {
            $(".questionfeedback").text("Question: 1/5")
        } else if (currentQuestion == 1) {
            $(".questionfeedback").text("Question: 2/5")
        } else if (currentQuestion == 2) {
            $(".questionfeedback").text("Question: 3/5")
        } else if (currentQuestion == 3) {
            $(".questionfeedback").text("Question: 4/5")
        } else if (currentQuestion == 4) {
            $(".questionfeedback").text("Question: 5/5")
        }
    }

    //----------------------NEW GAME BUTTON-----------------------//
    $(".newgamediv").on("click", ".newgame", function() {
        numberCorrect = 0; //set currentCorrect back to 0
        currentQuestion = 0; //set currentQuestion back to 0
        $(".currentCorrect").text("0");
        $(".questionfeedback").text("Question: 1/5");
        $(".question").remove();
        $("li").remove();
        var newQuestion = '<span class="question">'+questions[0].question+'</span>'
        $(".questionsdiv").append(newQuestion); //changes the contents of .questionsdiv to var newQuestion
        generateChoices();
    }); //new game button closing tag

    //----------------------SUBMIT BUTTON-----------------------//
    $(".submitbuttondiv").on("click", ".submitButton", function() {
        //evaluate the choice selected for correctness
        //change score number depending on evaluation results
        evaluateChoice();
        //move on to the next question
        currentQuestion++;
        nextQuestion();
        //change question number
        incrementQuestion();
    }); //submit button

}); //document ready closing tag