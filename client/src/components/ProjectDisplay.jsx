import { Box, Container, Flex, Wrap } from '@chakra-ui/react'
import React from 'react'
import { useGetProjectsQuery } from '../redux/services/projects'
import ProjectResult from './ProjectResult'

export default function ProjectDisplay() {
  const { data, isLoading, isError } = useGetProjectsQuery()

  if (isLoading || isError) return null
  return <Wrap spacing={10}>{data && data.map((project) => <ProjectResult key={project.id} project={project} />)}</Wrap>
}
