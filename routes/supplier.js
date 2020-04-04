var express = require('express');
var router = express.Router();

router.get('/AddSupplier', function (req, res, next) {
    res.render('admin/supplier');
});

router.get('/viewProduct', function (req, res, next) {
    res.render('admin/viewProduct');
});

module.exports = router;