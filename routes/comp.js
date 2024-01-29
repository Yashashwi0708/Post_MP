const express = require('express')
const router = express.Router()

const {createComp} = require('../controllers/comp')

router.route('/').post(createComp)

module.exports = router