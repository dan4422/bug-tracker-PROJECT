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

function ProjectPage() {
  const { projectId } = useParams()
  const { data } = useGetProjectsByIDQuery(projectId)
  return (
    <>
      <Box bg="white">
        <Heading my={2} textAlign={'center'}>
          {data?.name.toUpperCase()}
        </Heading>
        <Heading my={5} textAlign={'center'}>
          Position: {data?.position}
        </Heading>
        <Flex justifyContent={'center'} alignItems="center" gap={5}>
          <Badge rounded={16} my={2} alignItems={'center'} fontSize="1.5em">
            {data?.description}
          </Badge>
          <Badge rounded={16} my={2} alignItems={'center'} colorScheme={statusColor(data?.status)} fontSize="1.5em">
            {data?.status}
          </Badge>
        </Flex>
        <Text textAlign={'center'}>Last Updated: {new Date(data?.updatedAt).toDateString()}</Text>
        <Text textAlign={'center'}>Issue Opened: {new Date(data?.createdAt).toDateString()}</Text>
        <Flex flexDir={'column'} alignItems="center" justifyContent="center">
          <Heading mt={5} size="md">
            Description:
          </Heading>
          <Text fontSize={25} mt={5}>
            {data?.description}
          </Text>
          <Divider />
        </Flex>
      </Box>
    </>
  )
}

export default ProjectPage
