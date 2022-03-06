var express = require("express");
var router = express.Router();

const cryptoController = require("../controllers").crypto;

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("error", { message: "Access Restricted", error: { status: 403, stack: 'Forbidden' } });
});

/* User Router */
router.get("/cryptocoin/list", cryptoController.list);
router.get("/cryptocoin/add", cryptoController.bulkAdd);

module.exports = router;