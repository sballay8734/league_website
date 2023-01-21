import fetch from 'node-fetch';
// import data from '../data.json' assert {type: 'JSON'};
// console.log(data)

fetch('./public/data.json')
  .then((response) => response.json())
  .then((data) => console.log(data));