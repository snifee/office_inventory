const mysql = require('mysql');


let connectionDb = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: null,
    database: 'office_inventory_db'
  });
  
connectionDb.connect(function(err) {
if (err){
    throw err;
} 
console.log("Connected!");
});

module.exports = connectionDb;