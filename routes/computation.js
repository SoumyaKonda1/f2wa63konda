var express = require('express');
var router = express.Router();

/* GET computation page. */
router.get('/', function (req, res, next) {
    var rdm_value = Math.random();
    var x;
    x = req.query.x;
    if (x == undefined || x == null) {
        x = rdm_value;
    }
    res.render('computation', { computation_values: `Math.cbrt(${x}) is ${Math.cbrt(x)} , \n Math.atanh(${x}) is ${Math.atanh(x)}` });
    res.end();
});


module.exports = router;