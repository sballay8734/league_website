const { walkBlockDeclarations } = require('@vue/compiler-core');
const express = require('express');
const { connectToDb, getDb } = require('./db')

// init app & middleware
const app = express();

// db connection
let db
connectToDb((error) => {
  if (!error) {
    app.listen(3000, () => {
      console.log('App listening on port 3000')
    })
    db = getDb()
  }

})
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// routes
app.get('/ownerStats', (req, res) => {
  let owners = [];

  db.collection('ownerStats')
    .find()
    .forEach(owner => owners.push(owner))

    .then(() => {
      res.status(200).json(owners)
    })
    .catch((error) => {
      res.status(500).send('Error: ' + error)
    })

  res.json({message: 'Welcome to the API!'})
});





// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// // Stats breakdown dropdown ****************************************************
// let profileButton = document.querySelector('.profile-dropdown')
// let dropdownButton = document.querySelector('.stats-dropdown-btn');
// let arrow = document.querySelector('.down-arrow')

// dropdownButton.addEventListener('click', () => {
//   profileButton.classList.toggle('is-visible');
//   // Need below to toggle
//   if (arrow.innerText === '▼') {
//     arrow.innerText = '▲';
//   } else {
//     arrow.innerText = '▼'
//   }
// });