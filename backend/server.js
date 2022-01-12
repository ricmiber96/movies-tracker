const express = require('express')
const cors = require('cors')

const db = require('./db/index.js')
const movieRouter = require('../backend/routes/movie-router.js')

const app = express()
const apiPort = 5000



app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(express.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/',(req,res)=>{res.send('Hello world')})

app.use('/api', movieRouter)


app.listen(apiPort, ()=> console.log(`Server is running on port ${apiPort} `))