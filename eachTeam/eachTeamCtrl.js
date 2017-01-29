angular.module('nflArrestApp')
    .controller('eachTeamCtrl', function ($scope, nflArrestService, $stateParams) {
    

        nflArrestService.getTeamPlayers($stateParams.team)
        .then(function(players){
            $scope.players = players;
        })

        $scope.teamName = $stateParams.teamName;
}); 
