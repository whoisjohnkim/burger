// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
    selectAll: function(tableName, cb){
        var queryString = `SELECT * FROM ${tableName};`;
        console.log(queryString)
        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
        });
    },
    //INSERT INTO burgers (burger_name) VALUES(burgername here)
    insertOne: function(tableName, col, val, cb){
        var queryString = `INSERT INTO ${tableName} (${col}) VALUES (?);`
        console.log(queryString)
        connection.query(queryString, val, function(err, result){
            if (err) throw err;

            cb(result);
        })
    },
    //UPDATE burgers SET (devoured = true) WHERE id = ?
    updateOne: function(tableName, condition, cb){
        var queryString = `UPDATE ${tableName} SET devoured=true WHERE ${condition}`
        console.log(queryString)
        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;