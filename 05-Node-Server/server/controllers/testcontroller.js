let express = require('express');
// const sequelize = require('sequelize');
let router = express.Router();
let TestModel = require('../models/test');

/*************************
 *Controller Method #1: Simple Response
*************************/
router.post('/one', function(req, res){
    res.send("Got a post request.")
});

/***************************
 * Controller Method #2: Persisting Data
***************************/
router.post('/two', function (req, res) {
    let testData = "Test data for endpoint two";

    TestModel
    .create({
        testdata: testData
    }).then(dataFromDatabase => {
        res.send("Test two went through!")
    })
});

/***************************
 * Controller Method #3: req.body
***************************/
router.post('/three', function(req, res) {
    let testData = req.body.testdata.item;

    TestModel
    .create({
        testdata: testData
    })
    res.send("Test three went through!")
    console.log("Test three went throught!")
});

module.exports = router;