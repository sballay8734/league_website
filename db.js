const { MongoClient } = require('mongodb')

let dbConnection

modules.exports = {
  connectToDb: (callBack) => {
    MongoClient.connect('mongodb://localhost:27017/leagueWebsite')

      .then((client) => {
        dbConnection = client.db()
        return callBack()
      })
      .catch((error) => {
        console.log(error)
        return callBack(error)
      });
  },

  getDb: () => dbConnection

}