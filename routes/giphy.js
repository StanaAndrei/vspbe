const giphyController = require('../controllers/giphy');
const { Router } = require('express');
const router = Router();


router.get('/giphs', giphyController.getGiphs);

module.exports = router;