const express = require("express")
const router = express.Router()
const user = require('./Users')
const property = require('./Property')
const blog = require('./Blogs')
const enquery = require('./Enquery')
const client = require('./Client')

router.use('/user', user)
router.use('/property', property)
router.use('/blog', blog)
router.use('/enquery', enquery)
router.use('/client', client)

module.exports = router