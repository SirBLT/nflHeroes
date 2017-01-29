angular.module("nflArrestApp")
.controller("footballCtrl", function($scope, nflArrestService) {
    
   

    nflArrestService.getPlayer()
        .then(function(response) {
            $scope.players = response;
         
        });    

    


})