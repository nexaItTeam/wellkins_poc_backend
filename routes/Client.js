const express = require("express")
const router = express.Router()
const clientController = require('../controllers/Client')
const verify = require("../middleware/JWT")

router.post('/create-client', clientController.createClient)
router.post('/client-login', clientController.clientLogin)

module.exports = router
