
import express from 'express'
import cors from 'cors'
import usersRouter from './routes/users.router.js'
import ordersRouter from './routes/orders.router.js'
import businessRouter from './routes/business.router.js'
import mongoose from 'mongoose'

const app = express()
const PORT = 8080

const connection = mongoose.connect('MONGO_URL')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Routes
app.use('/api/users', usersRouter)
app.use('/api/business', businessRouter)
app.use('/api/orders', ordersRouter)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})