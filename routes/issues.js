const express = require('express')
const router = express.Router()
const checkAuth = require('../middleware/checkAuth')
const models = require('../models')

router.get('/issues', checkAuth, async (req, res) => {
  const issues = await models.Issue.findAll({
    where: {
      UserId: req.session.user.id,
    },
    include: [
      {
        model: models.Project,
      },
      {
        model: models.User,
      },
    ],
  })

  res.json(issues)
})

router.get('/getAllIssues', checkAuth, async (req, res) => {
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
        include: [models.User],
      },
      {
        model: models.Issue,
        include: [models.User, models.Project],
      },
    ],
  })
  res.json(project)
})

// /api/v1/projects/:projectId/issues/:issueId - gets specific issue
router.get('/:projectId/issues/:issueId', checkAuth, async (req, res) => {
  const { projectId, issueId } = req.params

  const project = await models.Project.findByPk(projectId, {
    include: [
      {
        model: models.Issue,
        include: [models.User],
      },
    ],
  })
  if (!project || project.UserId !== req.session.user.id) {
    res.status(400).json({ error: 'cannot find project' })
    return
  }
  const specificIssue = project.Issues.find((issue) => (issue.id = Number(issueId)))
  res.json(specificIssue)
})

// /api/v1/projects/:projectId/issues
router.get('/:projectId/issues', checkAuth, async (req, res) => {
  const { projectId } = req.params
  const user = await models.User.findByPk(req.session.user.id, {
    include: models.Project,
  })
  // finds project id based on user
  const specificProject = user.Projects.find((project) => project.id === Number(projectId))
  const issues = await models.Issue.findAll({
    where: {
      ProjectId: specificProject.id,
    },
  })
  res.json(issues)
})

// /api/v1/projects/:projectId/issues/create
router.post('/:projectId/issues/create', checkAuth, async (req, res) => {
  const projectId = Number(req.params.projectId)
  const user = await models.User.findByPk(req.session.user.id, {
    include: models.Project,
  })
  const specificProject = user.Projects.find((project) => project.id === Number(projectId))
  if (!specificProject) {
    res.status(400).json({ error: 'No project with id ' + projectId })
    return
  }
  const project = await models.Project.findOne({
    where: {
      id: specificProject.id,
    },
  })

  const { name, description, priority, status } = req.body
  if (!name) {
    return res.status(400).json({ error: 'Missing Name of Issue' })
  }

  const issue = await project.createIssue({
    name,
    description,
    priority: priority || 'Low',
    status: status || 'Open',
    UserId: user.id,
  })

  res.json(issue)
})

// /api/v1/projects/:projectId/issues/:issueId - deletes issue
router.delete('/:projectId/issues/:issueId', checkAuth, async (req, res) => {
  const { projectId, issueId } = req.params

  const project = await models.Project.findByPk(projectId, {
    include: models.Issue,
  })
  if (!project || project.UserId !== req.session.user.id) {
    res.status(400).json({ error: 'cannot find project' })
    return
  }
  const specificIssue = project.Issues.find((issue) => issue.id === Number(issueId))
  await specificIssue.destroy()
  res.status(200).json({ success: 'deleted issue' })
})

// api/v1/projects/:projectId/issues/:issueId -updates projects
router.patch('/:projectId/issues/:issueId', checkAuth, async (req, res) => {
  const { projectId, issueId } = req.params

  const project = await models.Project.findByPk(projectId, {
    include: models.Issue,
  })
  if (!project || project.UserId !== req.session.user.id) {
    res.status(400).json({ error: 'cannot find project' })
    return
  }
  const specificIssue = project.Issues.find((issue) => (issue.id = Number(issueId)))
  if (!specificIssue) {
    res.status(400).json({ error: 'cannot find issue' })
    return
  }
  await specificIssue.update({
    name: req.body.name || specificIssue.name,
    description: req.body.description || specificIssue.description,
    priority: req.body.priority || specificIssue.priority,
    status: req.body.status || specificIssue.status,
  })
  res.status(200).json(specificIssue)
})

module.exports = router
