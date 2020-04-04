var express = require('express');
var router = express.Router();

router.get('/AddCustomer', function (req, res, next) {
    res.render('admin/customer');
});

router.get('/viewProduct', function (req, res, next) {
    res.render('admin/viewProduct');
});

module.exports = router;