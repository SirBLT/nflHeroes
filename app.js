angular.module("nflArrestApp", ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
    
    $urlRouterProvider.otherwise('/')
    
    $stateProvider
    .state('home', {
        url: '/',
        controller: 'footballCtrl',
        templateUrl: 'home/home.html'
    })
    .state('teams', {
        url: '/teams',
        controller: 'teamsCtrl',
        templateUrl: 'teams/teams.html'
    })
    .state('eachTeam', {
        url: '/eachTeam/:team/:teamName',
        controller: 'eachTeamCtrl',
        templateUrl: 'eachTeam/eachTeam.html'
        })
    .state('playerStats', {
        url: '/playerStats/:player',
        controller: 'playerStatsCtrl',
        templateUrl: 'playerStats/playerStats.html'
    })





})