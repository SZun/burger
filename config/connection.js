import mySQL from 'mysql';
// import dotenv from 'dotenv';

require('dotenv').config()

import passcode from '../keys';

console.log(passcode.PASSCODE_SETUP);

// dotenv.config();

// const connection = mySQL.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: `${passcode.PASSCODE_SETUP}`,
//     database: "burgers_db"
// });

// connection.connect(function(err) {
//     if (err) {
//       console.error("error connecting: " + err.stack);
//       return;
//     }
//     console.log("connected as id " + connection.threadId);
//   });
  
//   export default connection;