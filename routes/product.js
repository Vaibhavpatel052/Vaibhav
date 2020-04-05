var express = require('express');
var router = express.Router();

router.get('/AddProduct', function (req, res, next) {
    res.render('admin/product');
});

router.get('/viewProduct', function (req, res, next) {
    res.render('admin/viewProduct');
});

module.exports = router;