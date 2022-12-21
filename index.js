const { Client } = require('espn-fantasy-football-api/node');
const { Team } = require('espn-fantasy-football-api/node');
const { BoxScore } = require('espn-fantasy-football-api/node');
const { BaseObject } = require('espn-fantasy-football-api/node');

const leagueId = 1049926;






const myClient = new Client({ leagueId: leagueId });
myClient.getLeagueInfo({seasonId: 2022})
.then((data => console.log(data)))
