angular.module('nflArrestApp')
.controller('teamsCtrl', function($scope, nflArrestService) {


    nflArrestService.getTeams()
    .then(function(teams){
        $scope.teams = teams;
    })




}); 
