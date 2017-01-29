angular.module('nflArrestApp')
.controller('playerStatsCtrl', function($scope, nflArrestService, $stateParams) {
    

    nflArrestService.getPlayerStats($stateParams.player)
    .then(function(teamPlayer){
        $scope.teamPlayer = teamPlayer.data;
        console.log(teamPlayer)
    })
    
    $scope.playerTitle = $stateParams.player
        
}); 
