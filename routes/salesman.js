var express = require('express');
var router = express.Router();

router.get('/AddSalesman', function (req, res, next) {
    res.render('admin/salesman');
});

router.get('/viewProduct', function (req, res, next) {
    res.render('admin/viewProduct');
});

module.exports = router;