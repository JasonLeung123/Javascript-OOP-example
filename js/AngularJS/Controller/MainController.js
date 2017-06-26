OOPApp.controller("MainController", 
                  ["$scope", "MultipleChoicesService", function($scope, MultipleChoicesService){
    MultipleChoicesService.AskQuestion($scope);
    MultipleChoicesService.AnswerQuestion($scope);
}]);