import { Badge, Box, Divider, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetIssueByIDQuery } from '../redux/services/issues'

function priorityColor(priority) {
  switch (priority) {
    case 'Low':
      return 'green'
    case 'Medium':
      return 'yellow'
    case 'High':
      return 'red'
    default:
      return ''
  }
}

function statusColor(status) {
  switch (status) {
    case 'Open':
      return 'blue'
    case 'Closed':
      return 'green'
    default:
      return ''
  }
}

function IssuePage() {
  const { projectId, issueId } = useParams()
  const { data } = useGetIssueByIDQuery({ projectId, issueId })
  console.log(data)
  return (
    <>
      <Box bg="white">
        <Heading my={2} textAlign={'center'}>
          {data?.name.toUpperCase()}
        </Heading>
        <Heading size={'sm'} my={2} textAlign={'center'}>
          created by: {data?.User.username}
        </Heading>
        <Flex justifyContent={'center'} alignItems="center" gap={5}>
          <Badge rounded={16} my={2} alignItems={'center'} colorScheme={priorityColor(data?.priority)} fontSize="1.5em">
            {data?.priority}
          </Badge>
          <Badge rounded={16} my={2} alignItems={'center'} colorScheme={statusColor(data?.status)} fontSize="1.5em">
            {data?.status}
          </Badge>
        </Flex>
        <Text textAlign={'center'}>Last Updated: {new Date(data?.updatedAt).toDateString()}</Text>
        <Text textAlign={'center'}>Issue Opened: {new Date(data?.createdAt).toDateString()}</Text>
        <Flex flexDir={'column'} alignItems="center" justifyContent="center" border="1px" borderColor="red">
          <Heading mt={5} size="md">
            Description
          </Heading>
          <Divider />
          <Text mt={5}>{data?.description}</Text>
        </Flex>
      </Box>
    </>
  )
}

export default IssuePage
