const express = require('express')
const {fetchRoomController, bookingController} = require('../controllers/userController')

const userRouter = express.Router()

userRouter.get('/fetch-rooms', fetchRoomController)
userRouter.post('/bookings', bookingController)

module.exports = {userRouter}