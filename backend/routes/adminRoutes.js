const express = require('express')
const {addRoomController, getBookingsController} = require('../controllers/adminController')

const adminRouter = express.Router()

adminRouter.post('/add-room', addRoomController)
adminRouter.get('/fetch-bookings', getBookingsController)

module.exports = {adminRouter}