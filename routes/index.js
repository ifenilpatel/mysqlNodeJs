var express = require('express');
var router = express.Router();
const dbConnect = require("../shared/dbConnection");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/apiData', function (req, res, next) {
  let strQuery = "Select * from tblName where 1=1";
  dbConnect.query(strQuery, (err, result, fields) => {
    if (err) {
      console.log("error log");
    } else {
      res.send(result);
    }
  });
});

module.exports = router;