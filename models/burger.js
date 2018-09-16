var orm = require("../config/orm.js");

var burger = {
    // Return all entries from the table
    selectAll: function(cb) {
        orm.selectAll("burgers", function(result) {
            cb(result);
        });
    },
    // cols and vals are arrays
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(results) {
            cb(results);
        });
    },
    // Update an entry based on certain conditions
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(results) {
            cb(results);
        });
    }
};

module.exports = burger;