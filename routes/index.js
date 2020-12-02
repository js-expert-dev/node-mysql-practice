const express = require('express');
const router = express.Router();


function routes() {
    const category = require('./categoryRoutes');
    router.use('/category', category);
    return router;
}

module.exports = routes();