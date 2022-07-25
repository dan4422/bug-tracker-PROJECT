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
    include: models.Issue,
  })

  res.json(project)
})

// api/v1/projects/:id - gets specific projects
router.get('/:id', checkAuth, async (req, res) => {
  const id = Number(req.params.id)
  if (isNaN(id)) {
    res.status(400).json({ error: 'cannot find project' })
    return
  }
  const project = await models.Project.findByPk(id)
  if (!project || project.UserId !== req.session.user.id) {
    res.status(400).json({ error: 'cannot find project' })
    return
  }
  res.json(project)
})

// /api/v1/projects/create
router.post('/create', checkAuth, async (req, res) => {
  const user = await models.User.findByPk(req.session.user.id)
  const { name, description, status, position } = req.body
  if (!name) {
    return res.status(400).json({ error: 'Missing Name of Project' })
  }

  const project = await user.createProject({
    name,
    description,
    status: status || 'In Progress',
  })

  const collab = await models.Collab.create({
    UserId: req.session.user.id,
    ProjectId: project.id,
    role: 'Admin',
    position: position || 'Full Stack',
  })

  res.json(project)
})

// api/v1/projects/:id - deletes projects
router.delete('/:id', checkAuth, async (req, res) => {
  const [collabProject] = await models.Collab.findAll({
    where: {
      ProjectId: req.params.id,
    },
  })
  await collabProject?.destroy()

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
