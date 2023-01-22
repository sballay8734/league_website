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

// routes WORKING!!
app.get('/ownerStats/:ownerName', (req, res) => {

  db.collection('ownerStats')
    .findOne( { ownerName: req.params.ownerName } )

    .then((owner) => {
      res.status(200).json(owner[2014].wins)
    })
    .catch((error) => {
      res.status(500).send('Error: ' + error)
    })

});





// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@