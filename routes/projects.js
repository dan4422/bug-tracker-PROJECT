const express = require('express')
const router = express.Router()
const checkAuth = require('../middleware/checkAuth')
const models = require('../models')

// /api/v1/projects
router.get('/', checkAuth, async (req, res) => {
  const project = await models.Project.findAll({
    include: [
      {
        model: models.Collab,
        where: { UserId: req.session.user.id },
        include: [models.User],
      },
      {
        model: models.Issue,
      },
      {
        model: models.User,
      },
    ],
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
  if (!project) {
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
    position: position || 'Fullstack',
  })

  res.json(project)
})

// api/v1/projects/:id - deletes projects
router.delete('/:id', checkAuth, async (req, res) => {
  const checkIfAdmin = await models.Collab.findOne({
    where: {
      ProjectId: req.params.id,
      UserId: req.session.user.id,
    },
  })

  if (checkIfAdmin?.role !== 'Admin' || checkIfAdmin === null) {
    res.status(400).json({ error: 'Must be the Admin to delete this project' })
    return
  }

  const collabProject = await models.Collab.findAll({
    where: {
      ProjectId: req.params.id,
    },
  })
  for (let i = 0; i < collabProject.length; i++) {
    await collabProject[i].destroy()
  }

  const issue = await models.Issue.findAll({
    where: {
      ProjectId: req.params.id,
    },
  })
  for (let i = 0; i < issue.length; i++) {
    await issue[i].destroy()
  }

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
  res.status(200).json({ success: 'Updated Project', project })
})

module.exports = router
