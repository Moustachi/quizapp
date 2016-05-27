var numberCorrect = 0;
var currentQuestion = 0;
var questions = [
    {
        question: "Which character created the Matrix?",
        choices: ["Agent Smith", "The Oracle", "The Architect", "The Keymaker"],
        questionNum: 1,
        correct: 2,
    }, {
        question: "When the machines run the planet, for what purpose do they use the humans?",
        choices: ["Manual Labor", "Energy", "Experiments", "Circus acts"],
        questionNum: 2,
        correct: 1,
    }, {
        question: "What proverb is written in Latin over the Oracle’s kitchen door?",
        choices: ["Wisdom is Silence", "Know Thyself", "All is Vanity", "Carpe Diem"],
        questionNum: 3,
        correct: 1,
    }, {
        question: "Who makes a deal with Agent Smith to sell out Morpheus in The Matrix?",
        choices: ["Agent Smith", "Mouse", "Tank", "Cypher"],
        questionNum: 4,
        correct: 3,
    }, {
        question: "About what year is it in the ravaged real world?",
        choices: ["1999", "2199", "2060", "5416"],
        questionNum: 5,
        correct: 1,
    }]
$(document).ready(function() {
    $(".submitbuttondiv").hide();

    function evaluateChoice() {
        var answer = $("input[type='radio']:checked").val();
        if (answer == questions[currentQuestion].correct) {
            numberCorrect++;
            $(".scoreCount").text(numberCorrect);
            alert("Correct");
        } else {
            alert("Incorrect");
        };
        currentQuestion++;
    };

    function nextQuestion() {
        var newQuestion = '<span class="question">'+questions[currentQuestion].question+'</span>';
        $(".question").remove();
        $("li").remove();
        $(".questionsdiv").append(newQuestion);
        $(".choices").append(generateChoices());
        $(".questionCount").text(questions[currentQuestion].questionNum);
    };

    function generateChoices() {
        for (var i = 0; i < 4; i++) {
            $(".choices").append(
                '<li>'+
                '<input type = "radio" name="option" class="option" value="'+i+'">'+
                '<span class= appendedChoices>'+questions[currentQuestion].choices[i]+'</span>'+
                '</li>');
        }
    };

    function refresh() {
        numberCorrect = 0;
        currentQuestion = 0;
        var newQuestion = '<span class="question">'+
                                questions[currentQuestion].question+
                          '</span>'
        $(".scoreCount").text(0);
        $(".questionCount").text(questions[currentQuestion].questionNum);
        $(".question").remove();
        $("li").remove();
        $(".questionsdiv").append(newQuestion);
        $(".submitbuttondiv").show();
    };

    };
    //----------------------NEW GAME BUTTON-----------------------//
    $(".newgamediv").on("click", ".newgame", function() {
        refresh();
        generateChoices();
    });
    //----------------------SUBMIT BUTTON-----------------------//
    $(".submitButton").on("click", function() {
        evaluateChoice();
        nextQuestion();
    });
}); //document ready closing tag