const express = require('express')
const db = require('./db')
const cors = require('cors')
const { adminRouter } = require('./routes/adminRoutes')
const { userRouter } = require('./routes/userRoutes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.use('/api/admin', adminRouter)
app.use('/api/user', userRouter)

const PORT = 5000;

app.listen(PORT, ()=>{
    console.log(`server is running ${PORT}`)
})
