// CHAKRA:
import { Box, Heading, Text } from '@chakra-ui/react'
import CollabProjects from './CollabProjects'

// COLLABORATORS:
export default function Collaborators() {
  return (
    <Box bg="white" p={5} w="100%" h="100%">
      <Box border="1px" borderColor="red" mb={5}>
        <Text fontSize={'25px'} fontWeight="bold" fontFamily="Baloo Tamma 2', cursive">
          Collaborators
        </Text>
      </Box>
      <CollabProjects />
    </Box>
  )
}
