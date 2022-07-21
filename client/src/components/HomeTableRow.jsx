import { Link as Anchor, Button, Flex, Td, Text, Tr } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDeleteIssueMutation, useGetIssuesQuery } from '../redux/services/issues'
import IssuesEdit from './IssuesEdit'

function HomeTableRow({ issue }) {
  const [deleteIssue] = useDeleteIssueMutation()
  const [showEditForm, setShowEditForm] = useState(false)

  return (
    <>
      {showEditForm ? (
        <Tr key={issue.id}>
          <Td>
            <IssuesEdit issue={issue} onSuccess={() => setShowEditForm(false)} />
          </Td>
        </Tr>
      ) : (
        <Tr key={issue.id}>
          <Td>
            <Anchor as={Link} to={`/projects/${issue.ProjectId}`}>
              {issue.Project.name}
            </Anchor>
          </Td>
          <Td>
            {issue.name}: {issue.description}
          </Td>
          <Td>{issue.User.username}</Td>
          <Td>{new Date(issue.createdAt).toDateString()}</Td>
          <Td>
            <Flex justifyContent={'flex-end'} gap={3} alignItems="center">
              <Text>red</Text>
              <Button size="sm" onClick={() => setShowEditForm(true)}>
                📝
              </Button>
              <Button size="sm" onClick={() => deleteIssue({ projectId: issue.ProjectId, issueId: issue.id })}>
                ❌
              </Button>
            </Flex>
          </Td>
        </Tr>
      )}
    </>
  )
}

export default HomeTableRow
