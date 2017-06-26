"use strict";
function QuestionService(){
    this.question = "Base Question";
    this.AskQuestion = function($scope){
        $scope.question = this.question;
    }
    
    this.GetAnswer = function(){
        return "Answer Basic Question";
    }
    
    this.AnswerQuestion = function($scope){
        $scope.answer = this.GetAnswer();
    }
}

function MultipleChoicesService(QuestionService){
    angular.extend(MultipleChoicesService.prototype, QuestionService);
    this.question = "Multiple Choices";
    this.GetAnswer = function(){
        return "Answer Multiple Questions";
    }
}

OOPApp.service("QuestionService", QuestionService);
OOPApp.service("MultipleChoicesService", ["QuestionService", MultipleChoicesService]);
