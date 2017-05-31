var app = angular.module("nflArrestApp", ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/')

    $stateProvider
    .state('home', {
        url: '/',
        controller: 'footballCtrl',
        templateUrl: 'views/home.html'
    })
    .state('teams', {
        url: '/teams',
        controller: 'teamsCtrl',
        templateUrl: 'views/teams.html'
    })
    .state('eachTeam', {
        url: '/eachTeam/:team/:teamName',
        controller: 'eachTeamCtrl',
        templateUrl: 'views/eachTeam.html'
        })
    .state('playerStats', {
        url: '/playerStats/:player',
        controller: 'playerStatsCtrl',
        templateUrl: 'views/playerStats.html'
    })





})
