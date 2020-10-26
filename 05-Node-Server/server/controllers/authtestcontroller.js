let router = require('express').Router();
let sequelize = require('../db');
let User = require('../models/user');//!dif
let AuthTestModel = require('../models/authtest') //!dif

/***************************
* GET ALL ITEMS FOR INDIVIDUAL USER
***************************/
router.get('/getall', function(req,res){
    let userid = req.user.id;

    AuthTestModel
        .findAll({
            where: {owner: userid}
        })
        .then(
            function findAllSuccess(data){
                res.json(data);
            },
            function findAllError(err) {
                res.send(500, err.message);
            }
        );
});

/***************************
* POST SINGLE ITEM FOR INDIVIDUAL USER
***************************/
router.post('/create', (req, res) => {
    let owner = req.user.id;
    let authTestData = req.body.authtestdata.item;

    AuthTestModel
        .create({
            authtestdata: authTestData,
            owner: owner
        })
        .then(
            function createSuccess(authtestdata) {
                res.json({
                    authtestdata: authtestdata
                });
            },
            function createError(err) {
                res.send(500, err.message);
            }
        );
});

/***************************
* GET SINGLE ITEM FOR INDIVIDUAL USER
***************************/
router.get('/:id', (req, res) => {
    let data = req.params.id;
    let userid = req.user.id;

    AuthTestModel
        .findOne({
            where: { id: data, owner: userid} 
        }).then(
            function findOneSuccess(data) {
                res.json(data);
            },
            function findOneError(err) {
                res.send(500, err.message);
            }
        );
})

/***************************
* DELETE ITEM FOR INDIVIDUAL USER
***************************/
router.delete('/delete/:id', (req, res) => {
    let data = req.params.id;
    let userid = req.user.id;

    AuthTestModel
        .destroy({
            where: { id: data, owner: userid}
        }).then(
            function deleteLogSuccess(data){
                res.send("you removed a log");
            },
            function deleteLogError(err){
                res.send(500, err.message);
            }
        )
})

/***************************
* UPDATE ITEM FOR INDIVIDUAL USER
***************************/
router.put('/update/:id', (req, res) => {
    let data = req.params.id;
    let authtestdata = req.body.authtestdata.item;

    AuthTestModel
        .update({
            authtestdata: authtestdata
        },
        {where: {id: data}}
        ).then(
            function updateSuccess(updateLog) {
                res.json({
                    authtestdata: authtestdata
                });
            },
            function updateError(err){
                res.send(500, err.message)
            }
        )
});

module.exports = router;