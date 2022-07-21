import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetProjectsByIDQuery } from '../redux/services/projects'

function ProjectPage() {
  const { projectId } = useParams()
  const { data } = useGetProjectsByIDQuery(projectId)
  return <div>{data?.name}</div>
}

export default ProjectPage
