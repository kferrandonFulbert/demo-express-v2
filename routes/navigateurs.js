const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const navigateurs = ['Firefox', 'Brave', 'Chrome', 'Safari', 'Edge', 'Opera'];
    res.json(navigateurs);
});

module.exports = router;