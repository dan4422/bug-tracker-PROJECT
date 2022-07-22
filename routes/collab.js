const express = require('express')
const router = express.Router()
const checkAuth = require('../middleware/checkAuth')
const models = require('../models')

router.get('/getProjectsByUser', checkAuth, async (req, res) => {
  const project = await models.Project.findAll({
    where: { UserId: req.session.user.id },
    include: [
      {
        model: models.Collab,
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
  const findCollabProject = user.Collabs.find((collab) => collab.ProjectId === Number(ProjectId))
  // res.json(findCollabProject)
  if (findCollabProject.role === 'Admin') {
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

module.exports = router
