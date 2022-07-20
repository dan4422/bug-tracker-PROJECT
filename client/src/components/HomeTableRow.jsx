import { Button, Flex, Td, Text, Tr } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDeleteIssueMutation, useGetIssuesQuery } from '../redux/services/issues'
import IssuesEdit from './IssuesEdit'

function HomeTableRow() {
  const { data } = useGetIssuesQuery()
  const [deleteIssue] = useDeleteIssueMutation()
  const [showEditForm, setShowEditForm] = useState(false)

  return (
    <>
      {data &&
        data.map((data, i) => (
          <>
            {showEditForm ? (
              <Tr key={data.id}>
                <Td>
                  <IssuesEdit Issues={data} onSuccess={() => setShowEditForm(false)} />
                </Td>
              </Tr>
            ) : (
              <Tr key={data.id}>
                <Td>{data.Project.name}</Td>
                <Td>
                  {data.name}: {data.description}
                </Td>
                <Td>{data.User.username}</Td>
                <Td>{new Date(data.createdAt).toDateString()}</Td>
                <Td>
                  <Flex justifyContent={'flex-end'} gap={3} alignItems="center">
                    <Text>red</Text>
                    <Button size="sm" onClick={() => setShowEditForm(true)}>
                      📝
                    </Button>
                    <Button size="sm">❌</Button>
                  </Flex>
                </Td>
              </Tr>
            )}
          </>
        ))}
    </>
  )
}

export default HomeTableRow
