// KotH Logic ********************************************************************

// let kingOfTheHill = (week, teamObject) => {
// }

let teamsObject = {
  donnie: 
    {
      pointsFor: 148.94,
      wins: 12,
      losses: 3,
      ties: 0,
    },
  shawn: 
    {
      pointsFor: 184.31,
      wins: 8,
      losses: 6,
      ties: 0,
    },
  aaron: 
    {
      pointsFor: 157.62,
      wins: 5,
      losses: 9,
      ties: 0,
    },
  steve: 
    {
      pointsFor: 122.72,
      wins: 6,
      losses: 8,
      ties: 0,
    },
}

function generateKotHList(teamObject) {
  let teamPointsList = [];
  for (const owner in teamObject) {
    teamPointsList.push({[owner]: teamObject[owner].pointsFor})
  };
  console.log(teamPointsList);
  return teamPointsList;
};

generateKotHList(teamsObject);

// Create list from teamsObject, Sort teams by points for for the week;

let testList = [
  {shawn: 1209},
  {donnie: 1093},
  {steve: 1933},
  {aaron: 1093},
  {marvin: 1128}
];

// rank league points
let rankedList = testList.sort((a,b) => (a > b));
console.log(rankedList);

// take bottom 4 teams from list