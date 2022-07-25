import { Box } from '@chakra-ui/react'
import React from 'react'
import { useGetProjectsByUserQuery } from '../redux/services/collab'
import CollabProject from './CollabProject'

function CollabProjects() {
  const { data } = useGetProjectsByUserQuery()
  return (
    <>
      {data?.map((data, i) => (
        <CollabProject key={i} project={data} />
      ))}
    </>
  )
}

export default CollabProjects
