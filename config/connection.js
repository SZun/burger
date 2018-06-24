import mySQL from 'mysql';
// import dotenv from 'dotenv';

// require('dotenv').config()

// import Passcode from '../keys';

// console.log(Passcode.PASSWORD);

// dotenv.config();

// const connection = mySQL.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "",
//     database: "burgers_db"
// });

// connection.connect(function(err) {
//     if (err) {
//       console.error("error connecting: " + err.stack);
//       return;
//     }
//     console.log("connected as id " + connection.threadId);
//   });

//   connection.query("SELECT * FROM ??",["burgers"],(err,res) => {
//       if(err) throw err;
//       console.log(res);
//       connection.end();
//   })
  
//   export default connection;