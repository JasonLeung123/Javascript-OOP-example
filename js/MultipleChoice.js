"use strict"
// Create the MultipleChoiceQuestion
function MultipleChoiceQuestion(theQuestion, theChoices, theCorrectAnswer) {
    // For MultipleChoiceQuestion to properly inherit from Question, here inside the MultipleChoiceQuestion constructor, we have to explicitly call the Question constructor
    // passing MultipleChoiceQuestion as the this object, and the parameters we want to use in the Question constructor:
    Question.call(this, theQuestion, theChoices, theCorrectAnswer);
};

// inherit the methods and properties from Question
inheritPrototype(MultipleChoiceQuestion, Question);