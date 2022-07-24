const express = require('express')
const mongoose = require('mongoose')

const url = 'mongodb://127.0.0.1:27017/assignmentDB'
const app = express()

mongoose.connect(url, {useNewUrlParser: true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected')
})

app.use(express.json())

const dataRouter = require('./routes/user_router')
const jobRouter = require('./routes/job_router')
app.use('/user', dataRouter)
app.use('/job', jobRouter)

app.listen(5000, () => {
    console.log('server start')
})