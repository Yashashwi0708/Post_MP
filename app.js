require('dotenv').config()
require('express-async-errors')
const port = 5000
const express = require('express')
const app = express()
const connectDB = require('./db/connect')
const comproute = require('./routes/comp')

//async errors
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
const { connect } = require('mongoose')

//middleware
app.use(express.json())

//routes`
app.get('/', (req, res)=>{
    res.send('<h1>Hey Everyone</h1>')
})

app.use('/api/v1/compname', comproute)
//products route
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const start = async()=>{
    try {
        await connectDB(process.env.mongo_uri);
        app.listen(port, console.log(`server is listening to ${port}`))
    } catch (error) {
        console.log(error);
    }
}

start()