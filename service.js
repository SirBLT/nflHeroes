angular.module("nflArrestApp")
    .service("nflArrestService", function ($http) {
        var playerLink = "http://www.NflArrest.com/api/v1/player"

        this.getPlayer = function() {
            return $http({
                method: 'GET',
                url: playerLink
            })
            .then(function(response) {
             if(response.status != 200){
                return "You broke something you nooob";
            }
            console.log(response.data);
           return response.data; 
            });
        } 
        
        this.getTeams = function() {
            return $http({
                method: 'GET',
                url: "http://nflarrest.com/api/v1/team/"
            })
            .then(function(teams) {
             if (teams.status != 200) {
                 return "You're goin' to jail, son!";
             }
             console.log(teams.data);
             return teams.data;   
            });
        }
        this.getTeamPlayers = function (Team) {
            var teamUrl = Team.toLowerCase();
            console.log(teamUrl)
            return $http({
                method: 'GET',
                url: "http://nflarrest.com/api/v1/team/topPlayers/" + teamUrl
            })
            .then(function(teamPlayer){
            if (teamPlayer.status != 200) {
            return "Jail Time";
            }
            console.log(teamPlayer.data) 
            return teamPlayer.data;    
            });
        }

        this.getPlayerStats = function (player) {
            return $http({
                method: 'GET',
                url: 'http://nflarrest.com/api/v1/player/topCrimes/' + player
            })
        }





})