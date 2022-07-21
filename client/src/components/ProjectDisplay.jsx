import { Flex } from '@chakra-ui/react'
import React from 'react'
import { useGetProjectsQuery } from '../redux/services/projects'
import ProjectResult from './ProjectResult'

export default function ProjectDisplay() {
  const { data, isLoading, isError, error } = useGetProjectsQuery()
  return (
    <Flex flexDirection="column">
      {isLoading ? <div>loading</div> : data?.map((project) => <ProjectResult key={project.id} project={project} />)}
    </Flex>
  )
}
