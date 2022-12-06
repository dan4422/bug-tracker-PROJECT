const path = require('path')
require('dotenv').config()
const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const session = require('express-session')
const store = require('./lib/session-store')
const serialize = require('./middleware/serialize')
const models = require('./models')

// router imports
const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const projectsRouter = require('./routes/projects')
const issuesRouter = require('./routes/issues')
const collabRouter = require('./routes/collab')

// configure express app
const app = express()

// add middleware
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// configure sequelize sessions
app.use(
  session({
    secret: 'pancakes',
    resave: false,
    saveUninitialized: false,
    store: store,
  })
)
// serialize database user from session if present
app.use(serialize())

// load react client build files in production
app.use(express.static(path.join(__dirname, 'client/build')))

// api routes
app.use('/api/v1', indexRouter)
app.use('/api/v1/users', usersRouter)
app.use('/api/v1/collab', collabRouter)
app.use('/api/v1/projects/', issuesRouter)
app.use('/api/v1/projects', projectsRouter)

// redirect all other routes to react client so that react-router can handle them
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'))
})

module.exports = app
