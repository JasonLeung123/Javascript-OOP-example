// Create the DragDropQuestion
function DragDropQuestion(theQuestion, theChoices, theCorrectAnswer) {
    Question.call(this, theQuestion, theChoices, theCorrectAnswer);
}

// inherit the methods and properties from Question
inheritPrototype(DragDropQuestion, Question);

DragDropQuestion.prototype.displayQuestion = function(){
    return this.question;
}

