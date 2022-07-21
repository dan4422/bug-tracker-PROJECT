const express = require('express')
const router = express.Router()
const checkAuth = require('../middleware/checkAuth')
const models = require('../models')

// /api/v1/projects
router.get('/', checkAuth, async (req, res) => {
  const project = await models.Project.findAll({
    where: {
      UserId: req.session.user.id,
    },
  })

  res.json(project)
})

// // api/v1/projects/:id - gets specific projects
// router.get('/:id', checkAuth, async (req, res) => {
//   const project = await models.Project.findByPk(req.params.id)
//   if (!project || project.UserId !== req.session.user.id) {
//     res.status(400).json({ error: 'cannot find project' })
//     return
//   }
//   res.json(project)
// })

// /api/v1/projects/create
router.post('/create', checkAuth, async (req, res) => {
  const user = await models.User.findByPk(req.session.user.id)
  const { name, description, status } = req.body
  if (!name) {
    return res.status(400).json({ error: 'Missing Name of Project' })
  }

  const project = await user.createProject({
    name,
    description,
    status: status || 'in progress',
  })

  res.json(project)
})

// api/v1/projects/:id - deletes projects
router.delete('/:id', checkAuth, async (req, res) => {
  const project = await models.Project.findByPk(req.params.id)
  if (!project || project.UserId !== req.session.user.id) {
    res.status(400).json({ error: 'cannot find project' })
    return
  }
  await project.destroy()
  res.status(200).json({ success: 'deleted project' })
})

// api/v1/projects/:id - updates projects
router.patch('/:id', checkAuth, async (req, res) => {
  const project = await models.Project.findByPk(req.params.id)
  if (!project || project.UserId !== req.session.user.id) {
    res.status(400).json({ error: 'cannot find project' })
    return
  }
  await project.update({
    name: req.body.name || project.name,
    description: req.body.description || project.description,
    status: req.body.status || project.status,
  })
  res.status(200).json(project)
})

module.exports = router
