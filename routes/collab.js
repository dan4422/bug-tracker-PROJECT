const express = require('express')
const router = express.Router()
const { Op } = require('sequelize')
const checkAuth = require('../middleware/checkAuth')
const models = require('../models')

router.get('/getProjectsByUser', checkAuth, async (req, res) => {
  const project = await models.Project.findAll({
    include: [
      {
        model: models.Collab,
        where: { UserId: req.session.user.id },
        include: [models.User],
      },
    ],
  })
  res.json(project)
})

// POST api/v1/collab/assign
router.post('/assign', checkAuth, async (req, res) => {
  const user = await models.User.findByPk(req.session.user.id, {
    include: [
      {
        model: models.Collab,
        include: [models.Project],
      },
    ],
  })
  const { ProjectId, UserId, position } = req.body
  if (UserId === req.session.user.id || !UserId) {
    res.status(400).json({ error: 'Please select a different user' })
    return
  }
  const findCollabProject = user.Collabs.find((collab) => collab.ProjectId === Number(ProjectId))
  if (findCollabProject?.role === 'Admin') {
    const [collab] = await models.Collab.findOrCreate({
      where: {
        UserId,
        ProjectId: findCollabProject.ProjectId,
      },
    })
    collab.update({
      role: 'Teammate',
      position: position || 'Fullstack',
    })
    res.json(collab)
  } else {
    res.status(400).json({ error: 'You are not an Admin for this project' })
  }
})

// DELETE api/v1/collab/assign
router.delete('/unassign', checkAuth, async (req, res) => {
  const user = await models.User.findByPk(req.session.user.id, {
    include: [
      {
        model: models.Collab,
        include: [models.Project],
      },
    ],
  })
  const { ProjectId, UserId } = req.body
  const findCollabProject = user.Collabs.find((collab) => collab.ProjectId === Number(ProjectId))
  if (findCollabProject?.role === 'Admin') {
    const collab = await models.Collab.findOne({
      where: {
        UserId,
        ProjectId: findCollabProject.ProjectId,
      },
      include: [
        {
          model: models.User,
        },
        {
          model: models.Project,
        },
      ],
    })
    await collab?.destroy()
    res.status(200).json({ success: `${collab.User.username} has been unassigned from ${collab.Project.name}` })
  } else {
    res.status(400).json({ error: 'You are not an Admin for this project' })
  }
})

router.get('/getAllCollabProjects', checkAuth, async (req, res) => {
  const id = Number(req.session.user.id)
  const project = await models.Project.findAll({
    include: [
      {
        model: models.Collab,
        where: { UserId: id },
      },
      {
        model: models.Collab,
        as: 'members',
        include: [
          {
            model: models.User,
            include: [models.Issue],
          },
        ],
      },
      {
        model: models.Issue,
        include: [models.User],
      },
    ],
  })
  res.json(project)
})
module.exports = router
