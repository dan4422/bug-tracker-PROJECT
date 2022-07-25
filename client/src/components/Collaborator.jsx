// CHAKRA:
import { Box, Heading } from '@chakra-ui/react'
import CollabProjects from './CollabProjects'

// COLLABORATORS:
export default function Collaborators() {
  return (
    <Box bg="white" p={5} w="100%" h="100%">
      <Box border="1px" borderColor="red" mb={5}>
        <Heading fontSize={25}>Collaborators</Heading>
      </Box>
      <CollabProjects />
    </Box>
  )
}
