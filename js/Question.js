"use strict";
// The Question function is the parent for all other question objects;
// All question objects will inherit from this Question constructor
function Question(theQuestion, theChoices, theCorrectAnswer) {
    // Initialize the instance properties
    this.question = theQuestion;
    this.choices = theChoices;
    this.correctAnswer = theCorrectAnswer;
    this.userAnswer = "";

    // private properties: these cannot be changed by instances
    var newDate = new Date(),
        // Constant variable: available to all instances through the instance method below. This is also a private property.
        QUIZ_CREATED_DATE = newDate.toLocaleDateString(); // This is the only way to access the private QUIZ_CREATED_DATE variable
    // This is an example of a privilege method: it can access private properties and it can be called publicly
    this.getQuizDate = function () {
            return QUIZ_CREATED_DATE;
        } // A confirmation message that the question was created
    console.log("Quiz Created On: " + this.getQuizDate());
}

// Define the prototype methods that will be inherited
Question.prototype.getCorrectAnswer = function () {
    return this.correctAnswer;
};

Question.prototype.getUserAnswer = function () {
    return this.userAnswer;
};

Question.prototype.displayQuestion = function () {
    var questionToDisplay = "<div class='question'>" + this.question + "</div><ul>";
    var choiceCounter = 0;

    this.choices.forEach(function (eachChoice) {
        questionToDisplay += '<li><input type="radio" name="choice" value="' + choiceCounter + '">' + eachChoice + '</li>';
        choiceCounter++;
    });
    questionToDisplay += "</ul>";
    return questionToDisplay;
};