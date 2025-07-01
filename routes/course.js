const express = require('express');
const router = express.Router();


router.post('/', async function(req, res) {
    const userid = req.body;
    const { coursename, coursedescription, courseprice, } = req.body;


})

module.export = router;