var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send({"Error" : "Please Use the AngularJS Code to navigate through this API or use postman to send request to this API"});
});

module.exports = router;
