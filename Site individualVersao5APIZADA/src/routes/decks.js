var express = require("express");
var router = express.Router();

var deckControllers = require("../controllers/deckControllers");


router.post("/cadastrar", function (req, res) {
    deckControllers.cadastrar(req, res);
});
router.post("/analisarDeck", function (req, res) {
    deckControllers.analiseDeck(req, res);
});

module.exports = router;