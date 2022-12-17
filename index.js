import Client from 'espn-fantasy-football-api/node.js';
const myClient = new Client({ leagueId: 1049926 });
myClient.setCookies({ espnS2: 'AECG%2FYhUF3HPU7ui%2FBVJT0CvjLcAhS0XOnjPWJjRfsxx%2FNrQUz760mc5KV0NoaCAxXq4Le2hcPk8TU%2F39QkOoX09qb5k1ruPPDjGCZzrV7NZVsb9EN6MQL8qQUkJ4P5ZLx7pVu4BzMZy1Flrka6eU%2B2QY0jpnpK2M5XlLXl23fbszk5nKnJomL%2B78OOn%2BHBjP7OxdL6fnS1UDufAtrKzmtHA2nwJxRykHEaipGYFPNsMH2nKq%2BwcTNoMtrNkZAZYbEMJgMoeZxmOVhmOybF3Nqlh', SWID: '{08C1760D-A442-494F-9A73-815C47F25168}' })

if (typeof window !== 'undefined') {
  console.log('You are on the browser,You are good to go')
  } else {
  console.log('You are on the server, Cannot execute')
 }