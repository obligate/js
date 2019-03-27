const express = require('express')
const router = express.Router()
const path = require('path')
const handler = require('./handler.js')


router.get('/', handler.index);

router.use('resources',express.static(path.join(__dirname,'resources')));

module.exports = router;