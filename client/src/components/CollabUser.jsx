import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

function CollabUser({ data }) {
  return (
    <Box border="1px" borderColor="red" w={200} textAlign="center">
      <Image w={150} maxW="80%" borderRadius="full" src={''} alt="" m={'0 auto'} mt={2} mb={2} />
      <Text>{data.User.username}</Text>
      <Text fontSize={13}>{data.User.email}</Text>
      <Text fontSize={13} mb={2}>
        {data.User.city} {data.User.state}
      </Text>
      <hr></hr>
      <Text>4 contributions</Text>
      <hr></hr>
      <Text>{data.position}</Text>
      <hr></hr>
      <Text mb={2}>{data.role}</Text>
    </Box>
  )
}

export default CollabUser
