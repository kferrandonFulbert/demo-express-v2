const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {h1: "Choisir votre navigateur préféré"} );
});

module.exports = router;
