// CRUD = Create, blank, blank, Delete
// Puspose:
    // Crud for LISTS
    // Crud for ITEMS
    // Crud for USERS

// index.js is the collection point for all controllers
// index.js is the outlet point for all controllers

// Current Goal: Test Controller

const testController = require("./TestController"); //imports this particular test to the index which allows it to be one of the values in the export object. 

module.exports = {
    test: testController,
}