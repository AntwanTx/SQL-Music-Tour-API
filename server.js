// DEPENDENCIES
const express = require('express')
const app = express()
const {Sequelize} = require('sequelize')

// SEQUELIZE CONNECTION
const sequelize = new Sequelize({
    storage: process.env.PG_URI,
    dialect: 'postgres',
    username: 'postgres',
    password: 'Antjess5!'
  })
  


// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

//Band Route
const bandsController = require('./controllers/bands_controller')
app.use('/bands', bandsController)

// Stage Route
const stagesController = require('./controllers/stages_controller')
app.use('/stages', stagesController)

// Event Route
const eventsController = require('./controllers/events_controller')
app.use('/events', eventsController)


// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})