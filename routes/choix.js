const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const navigateur = req.body.navigateur;
  res.render('choix', { navigateur });
});

module.exports = router;
