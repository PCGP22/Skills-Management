const express = require('express')
const controllers = require('../controllers/index')

const router = express.Router()

router.get("/getAllData", controllers.getAllParticipants)
router.post("/addParticipant",controllers.addParticipant)
router.put("/updateParticipant", controllers.updateParticipant)

module.exports = {router};