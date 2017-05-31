'use strict';

angular.module("nflArrestApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url: '/',
        controller: 'footballCtrl',
        templateUrl: 'views/home.html'
    }).state('teams', {
        url: '/teams',
        controller: 'teamsCtrl',
        templateUrl: 'views/teams.html'
    }).state('eachTeam', {
        url: '/eachTeam/:team/:teamName',
        controller: 'eachTeamCtrl',
        templateUrl: 'views/eachTeam.html'
    }).state('playerStats', {
        url: '/playerStats/:player',
        controller: 'playerStatsCtrl',
        templateUrl: 'views/playerStats.html'
    });
});
"use strict";

angular.module("nflArrestApp").controller("footballCtrl", function ($scope, nflArrestService) {

    nflArrestService.getPlayer().then(function (response) {
        $scope.players = response;
    });

    nflArrestService.getTeams().then(function (teams) {
        $scope.teams = teams;
    });
});
'use strict';

angular.module('nflArrestApp').controller('eachTeamCtrl', function ($scope, nflArrestService, $stateParams) {

    nflArrestService.getTeamPlayers($stateParams.team).then(function (players) {
        $scope.players = players;
    });

    $scope.teamName = $stateParams.teamName;
});
'use strict';

angular.module('nflArrestApp').controller('playerStatsCtrl', function ($scope, nflArrestService, $stateParams) {

    nflArrestService.getPlayerStats($stateParams.player).then(function (teamPlayer) {
        $scope.teamPlayer = teamPlayer.data;
        console.log(teamPlayer);
    });

    $scope.playerTitle = $stateParams.player;
});
"use strict";

angular.module("nflArrestApp").service("nflArrestService", function ($http) {
    var playerLink = "http://www.NflArrest.com/api/v1/player";

    this.getPlayer = function () {
        return $http({
            method: 'GET',
            url: playerLink
        }).then(function (response) {
            if (response.status != 200) {
                return "You broke something you nooob";
            }
            console.log(response.data);
            return response.data;
        });
    };

    this.getTeams = function () {
        return $http({
            method: 'GET',
            url: "http://nflarrest.com/api/v1/team/"
        }).then(function (teams) {
            if (teams.status != 200) {
                return "You're goin' to jail, son!";
            }
            console.log(teams.data);
            return teams.data;
        });
    };
    this.getTeamPlayers = function (Team) {
        var teamUrl = Team.toLowerCase();
        console.log(teamUrl);
        return $http({
            method: 'GET',
            url: "http://nflarrest.com/api/v1/team/topPlayers/" + teamUrl
        }).then(function (teamPlayer) {
            if (teamPlayer.status != 200) {
                return "Jail Time";
            }
            console.log(teamPlayer.data);
            return teamPlayer.data;
        });
    };

    this.getPlayerStats = function (player) {
        return $http({
            method: 'GET',
            url: 'http://nflarrest.com/api/v1/player/topCrimes/' + player
        });
    };
});
'use strict';

angular.module('nflArrestApp').controller('teamsCtrl', function ($scope, nflArrestService) {

    nflArrestService.getTeams().then(function (teams) {
        $scope.teams = teams;
    });
});
//# sourceMappingURL=bundle.js.map
