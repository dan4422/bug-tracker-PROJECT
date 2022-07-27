const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const models = require('../models')
const checkAuth = require('../middleware/checkAuth')

// GET /api/v1/users/register
router.post('/register', async (req, res) => {
  const { email, password, first_name, last_name, username, state, city, DOB } = req.body
  // if required fields missing, send error
  if (!email || !password) {
    return res.status(400).json({ error: 'missing email and/or password' })
  }
  const existingUser = await models.User.findOne({
    where: { email: req.body.email },
  })
  if (existingUser) {
    res.status(400).json({ error: 'Email already in use' })
    return
  }
  const hash = await bcrypt.hash(password, 10)
  // create new user in database and send success message
  const user = await models.User.create({
    email,
    first_name,
    last_name,
    password: hash,
    username,
    state,
    city,
    DOB,
    profileImage: `${first_name.charAt(0).toUpperCase()}${last_name.charAt(0).toUpperCase()}`,
  })
  res.json({ success: 'registered successfully' })
})

// GET /api/v1/users/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body
  // if required fields missing, send error
  if (!email || !password) {
    return res.status(400).json({ error: 'missing email and/or password' })
  }
  // find user in database
  const user = await models.User.findOne({ where: { email } })
  // if no user found, send error
  if (!user) {
    return res.status(400).json({ error: 'email incorrect' })
  }
  // if password is invalid, send error
  const passwordValid = bcrypt.compare(password, user.password)
  if (!passwordValid) {
    return res.status(400).json({ error: 'invalid password' })
  }
  // add user to session
  req.session.user = user
  res.status(201).json({ success: 'logged in successfully' })
})

// GET /api/v1/users/logout
router.get('/logout', async (req, res) => {
  req.session.user = null
  res.json({ success: 'logged out successfully' })
})

// GET /api/v1/users/current
router.get('/current', checkAuth, async (req, res) => {
  const user = await models.User.findOne({
    where: { id: req.session.user.id },
    include: [
      {
        model: models.Project,
      },
      {
        model: models.Issue,
      },
    ],
  })
  res.json(user)
})

router.get('/all', checkAuth, async (req, res) => {
  const users = await models.User.findAll()
  res.json(users)
})

// PATCH /api/v1/users/update - Update User Data
router.patch('/update', checkAuth, async (req, res) => {
  const user = await models.User.findByPk(req.session.user.id)
  await user.update({
    email: req.body.email || user.email,
    password: req.body.password || user.password,
    username: req.body.username || user.username,
    state: req.body.state || user.state,
    city: req.body.city || user.city,
    DOB: req.body.DOB || user.DOB,
    profileImage: req.body.profileImage || user.profileImage,
  })
  res.status(200).json(user)
})

// PATCH /api/v1/users/addProfileImage - add/update profile image
router.patch('/addProfileImage', checkAuth, async (req, res) => {
  const user = await models.User.findByPk(req.session.user.id)
  await user.update({
    profileImage: req.body.profileImage || user.profileImage,
  })
  res.status(200).json(user)
})

// DELETE /api/v1/users/delete
router.delete('/delete', checkAuth, async (req, res) => {
  const user = await models.User.findByPk(req.session.user.id)
  await user.destroy()
  res.status(200).json({ success: 'deleted user' })
})

module.exports = router
