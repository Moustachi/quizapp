$( document ).ready(function() {
    console.log( "ready!" )

//----------------------NEW GAME BUTTON-----------------------//
    $(".newgamediv").on("click", ".newgame", function() {
    	var newQuestion = '<span class="question">'+questions[currentQuestion].question+'</span>'
    	var newChoice ='<li>'+'<input type = "radio" name="option" class="option" value="0">'
    		+" "+questions[currentQuestion].choices[0]+'</li>'+
    		'<li>'+'<input type = "radio" name="option" class="option" value="0">'
    		+" "+questions[currentQuestion].choices[1]+'</li>'+
    		'<li>'+'<input type = "radio" name="option" class="option" value="0">'
    		+" "+questions[currentQuestion].choices[2]+'</li>'+
    		'<li>'+'<input type = "radio" name="option" class="option" value="0">'
    		+" "+questions[currentQuestion].choices[3]+'</li>'
    	numberCorrect = 0; //set numberCorrect back to 0
    	currentQuestion = 0; //set currentQuestion back to 0
    	$(".scorefeedback").text("Score: 0/5"); //changes .scorefeeback string to "Score 0/5"
    	$(".questionsdiv").html(newQuestion); //changes the contents of .questionsdiv to var newQuestion
    	$(".choices").html(newChoice);
    });

//----------------------SUBMIT BUTTON-----------------------//
	$(".submitbuttondiv").on("click", ".submitbuttondiv", function() {
		//evaluate the choice selected for correctness
		//move on to the next question
		//change question number
		//change score number depending on evaluation results

	});

//-------------Stored the questions and choices--------------//
//-------------in var questions.------------------------------//
    var questions = [{
    		question: "Which character created the Matrix?",
    		choices: ["Agent Smith", "The Oracle", "The Architect", "The Keymaker"],
    		questionNum: 0,
    		correct: 3,
    	},
    	{
    		question: "When the machines run the planet, for what purpose do they use the humans?",
    		choices: ["Manual Labor", "Energy", "Experiments", "Circus acts"],
    		questionNum: 1,
    		correct: 2,
    	},
    	{
    		question: "What proverb is written in Latin over the Oracle’s kitchen door?",
    		choices: ["Wisdom is Silence", "Know Thyself", "All is Vanity", "Carpe Diem"],
    		questionNum: 2,
    		correct: 2,
    	},
    	{
    		question: "Who makes a deal with Agent Smith to sell out Morpheus in The Matrix?",
    		choices: ["Agent Smith", "Mouse", "Tank", "Cypher"],
    		questionNum: 3,
    		correct: 4,
    	},
    	{
    		question: "About what year is it in the ravaged real world?",
    		choices: ["1999", "2199", "2060", "5416"],
    		questionNum: 4,
    		correct: 2,
    	}]
});

//---------------------Global Variables-----------------------//
var numberCorrect = 0;
var currentQuestion = 0;
//---------------------Global Variables-----------------------//