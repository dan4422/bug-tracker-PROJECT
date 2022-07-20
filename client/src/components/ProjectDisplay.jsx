import { Flex } from '@chakra-ui/react'
import React from 'react'
import { useGetProjectsQuery } from '../redux/services/projects'
import ProjectResult from './ProjectResult'

function ProjectDisplay() {
  const { data, isLoading, isError } = useGetProjectsQuery()

  if (isLoading || isError) return null
  return (
    <Flex flexDirection="column">
      {data.map((project) => (
        <ProjectResult key={project.id} project={project} />
      ))}
    </Flex>
  )
}

export default ProjectDisplay
