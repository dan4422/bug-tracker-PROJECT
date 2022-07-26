import {
  Link as Anchor,
  Button,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Td,
  Text,
  Tr,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDeleteIssueMutation, useGetIssuesQuery } from '../redux/services/issues'
import IssuesEdit from './IssuesEdit'
import ProjectEdit from './ProjectEdit'

function HomeTableRow({ issue }) {
  const [deleteIssue] = useDeleteIssueMutation()

  return (
    <>
      <Tr key={issue.id}>
        <Td borderBottom="2px">
          <Anchor as={Link} to={`/projects/${issue.ProjectId}`}>
            {issue.Project.name}
          </Anchor>
        </Td>
        <Td borderBottom="2px">
          <Anchor as={Link} to={`/projects/${issue.ProjectId}/issues/${issue.id}`}>
            {issue.name}: {issue.description}
          </Anchor>
        </Td>
        <Td borderBottom="2px">{issue.User.username}</Td>
        <Td borderBottom="2px">{new Date(issue.createdAt).toDateString()}</Td>
        <Td borderBottom="2px">
          <Flex justifyContent={'flex-end'} gap={3} alignItems="center">
            <Text>{issue.priority}</Text>
            <Popover placement="right">
              <PopoverTrigger>
                <Button size="sm">📝</Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverCloseButton />
                <PopoverArrow />
                <PopoverHeader textAlign={'center'}>Edit {issue.name}</PopoverHeader>
                <PopoverBody>
                  <IssuesEdit issue={issue} />
                </PopoverBody>
              </PopoverContent>
            </Popover>
            <Button size="sm" onClick={() => deleteIssue({ projectId: issue.ProjectId, issueId: issue.id })}>
              ❌
            </Button>
          </Flex>
        </Td>
      </Tr>
    </>
  )
}

export default HomeTableRow
