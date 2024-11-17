const mongo = require("mongoose");
// const dotenv = require("dotenv");
// const path = require('path')
// dotenv.config();

function database() {
	console.log("URL", process.env.mongourl);
	
  mongo.connect(process.env.mongourl).then((con) => {
    console.log(`Connection Successful: ${con.connection.host}`);
  });
}

module.exports = database;
