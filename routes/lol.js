// router.get('/getProjectsByUser', checkAuth, async (req, res) => {
//   const project = await models.Collab.findAll({
//     where: { UserId: req.session.user.id },
//     include: [
//       {
//         model: models.Project,
//         include: [
//           {
//             model: models.Collab,
//             include: [models.User],
//           },
//         ],
//       },
//     ],
//   })
//   res.json(project)
// })
