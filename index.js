const express = require('express')
const app = express()

const eventRouter = require('./router/event')
const authRoute = require("./router/auth")
const connectDB = require('./config/db')

const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(eventRouter)
app.use(authRoute)
connectDB()

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})