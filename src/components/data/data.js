import Request from 'request';
import _ from 'lodash';

const baseUri = 'http://api.football-data.org/v1/';

let leagueData = {};
let teamPlayers;
let teamFixtures;

let selectedLeague;
let selectedTeam;

const Data = {

    // return request(
    //     {
    //         method: 'GET',
    //         uri: baseURI + ''
    //     }, function (err, data) {
    //
    //     }
    // );

    // League Level
    getLeagueTable: function(id) {
        console.log('get league table hit');
        if (_.isEmpty(leagueData)) {
            console.log('getting league data');
            Request(
                {
                    method: 'GET',
                    uri: baseUri + 'competitions/' + id + '/leagueTable',
                    headers: {
                        'X-Auth-Token': 'c686861cae884c8596fad08aea92403c'
                    }
                }, function (err, data) {
                    if (err) {
                        console.error(err)
                    }
                    leagueData[id] = JSON.parse(data.body);
                    console.log('ahhhhh', leagueData[id]);
                }
            );
        }
        console.log('return league data', leagueData);
        return leagueData;
        // http://api.football-data.org/v1/competitions/competitionId/leagueTable
    },

    // Team Level
    getTeamData: function(id) {
        console.log('getting team data ...', id);
        
    },
    getTeamPlayers: function(id) {
        console.log('getting team roster ...', id);
        return Request(
            {
                method: 'GET',
                uri: baseUri + 'teams/' + id + '/players',
                headers: {
                    'X-Auth-Token': 'c686861cae884c8596fad08aea92403c'
                }
            }, function (err, data) {
                if (err) {
                    console.error(err)
                }
                teamPlayers = JSON.parse(data.body);
                console.log('data return hit', teamPlayers);
            }
        );
        // http://api.football-data.org/v1/teams/teamId/players
    },
    getTeamMatches: function(id) {
        console.log('getting team matches ...', id);
        return Request(
            {
                method: 'GET',
                uri: baseUri + 'teams/' + id + '/fixtures',
                headers: {
                    'X-Auth-Token': 'c686861cae884c8596fad08aea92403c'
                }
            }, function (err, data) {
                if (err) {
                    console.error(err)
                }
                teamFixtures = JSON.parse(data.body);
                console.log('data return hit', teamFixtures);
            }
        );
        // http://api.football-data.org/v1/teams/teamId/fixtures
    },

    setSelectedLeague: function(id) {
        console.log('setting league id ... ', id);
        if (leagueData[id]){
            selectedLeague = leagueData[id];
        } else {
            console.error('League ID Error: SET');
        }
    },
    getSelectedLeague: function(id) {
        console.log('getting league data ...', id);
        if (leagueData[id]) {
            return leagueData[id];
        } else {
            console.error('League ID Error: GET');
        }
    },
    setSelectedTeam: function(id) {
        console.log('setting team id ... ', id);
        selectedTeam = id;
    },
    getSelectedTeam: function() {
        return selectedTeam;
    }
};

export {Data};