let express = require('express')
let router = express.Router()

let { GetControllers } = require('../controllers')

router.get('/getAllOradores', GetControllers.getAllOradores)

module.exports = router