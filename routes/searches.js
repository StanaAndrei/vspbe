const { Router } = require('express');
const router = Router();
const searchesController = require('../controllers/searches');

router.get('/searches', searchesController.getSearches);

module.exports = router;