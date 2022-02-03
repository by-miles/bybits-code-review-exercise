const express = require('express');
const router = express.Router();



router.get(
    '/health',
    require('./controllers/health/get')
);

router.post('/payments',
    require('./controllers/payments/post')
);


module.exports = router;