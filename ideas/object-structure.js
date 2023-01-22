// https://pokeapi.co/api/v2/pokemon -- EXAMPLE
// Your end point would look something like -- leagueapi.co/api/teams

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
let leagueMembers = {
  shawnB: 
    {
      pointsFor: 1648.94,
      wins: 12,
      losses: 3,
      ties: 0,
    },
  teamTwo: 
    {
      pointsFor: 1804.00,
      wins: 8,
      losses: 6,
      ties: 0,
    },
  teamThree: 
    {
      pointsFor: 1567.62,
      wins: 5,
      losses: 9,
      ties: 0,
    },
  teamFour: 
    {
      pointsFor: 1622.72,
      wins: 6,
      losses: 8,
      ties: 0,
    },
}

console.log(leagueMembers.shawnB.pointsFor)

// should always add up to 2 (if two games where played)
// teamOne.teamTwo + teamTwo.teamOne === 2;
let headToHead = {
  teamOne: {
    teamTwo: 1,  // Tie (if 2 games were played between teams)
    teamThree: 2, // Team one wins tie breaker
    teamFour: 0, // Team four wins tie breaker
  },
  teamTwo: {
    teamOne: 1,
    teamThree: 1,
    teamFour: 0
  },
  teamThree: {
    teamOne: 0, // should be the opposite of teamOne/teamThree
    teamTwo: 1,
    teamFour: 2
  },
  teamFour: {
    teamOne: 2,
    teamTwo: 2,
    teamThree: 0
  }
}