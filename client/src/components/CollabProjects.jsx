import { Box } from '@chakra-ui/react'
import React from 'react'
import { useGetAllCollabProjectsQuery } from '../redux/services/collab'
import CollabProject from './CollabProject'

function CollabProjects() {
  const { data } = useGetAllCollabProjectsQuery()
  return (
    <>
      {data?.map((data, i) => (
        <CollabProject key={i} project={data} />
      ))}
    </>
  )
}

export default CollabProjects
