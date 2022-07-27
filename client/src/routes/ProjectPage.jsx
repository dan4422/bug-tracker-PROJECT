import { Badge, Box, Divider, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetProjectsByIDQuery } from '../redux/services/projects'

function statusColor(status) {
  switch (status) {
    case 'Finished':
      return 'green'
    case 'In Progress':
      return 'yellow'
    case 'Not Yet Started':
      return 'red'
    default:
      return ''
  }
}

function positionColor(position) {
  switch (position) {
    case 'FullStack':
      return 'Blue'
    case 'FrontEnd':
      return 'Red'
    case 'Backend':
      return 'Green'
    default:
      return ''
  }
}

function ProjectPage() {
  const { projectId } = useParams()
  const { data } = useGetProjectsByIDQuery(projectId)
  console.log(data)
  return (
    <>
      <Box bg="white">
        <Heading my={2} textAlign={'center'}>
          {data?.name.toUpperCase()}
        </Heading>
        <Flex justifyContent={'center'} alignItems="center" gap={5}>
          <Heading>Status:</Heading>
          <Badge rounded={16} my={3} alignItems={'center'} colorScheme={statusColor(data?.status)} fontSize="1.5em">
            {data?.status}
          </Badge>
          <div></div>
        </Flex>
        <Text textAlign={'center'}>Last Updated: {new Date(data?.updatedAt).toDateString()}</Text>
        <Text textAlign={'center'}>Issue Opened: {new Date(data?.createdAt).toDateString()}</Text>
        <Flex flexDir={'column'} alignItems="center" justifyContent="center">
          <Heading mt={5} size="md" textDecoration={'underline'} textDecorationColor={'red'} fontSize={'35px'}>
            Description
          </Heading>
          <Text fontSize={'22px'} mt={5} textAlign="center">
            {data?.description}
          </Text>
        </Flex>
      </Box>
    </>
  )
}

export default ProjectPage
