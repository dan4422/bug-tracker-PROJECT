// CHAKRA:
import { Box } from '@chakra-ui/react'

// COMPONENTS:
import { Project } from '../components/Project'

// PROJECTS:
export default function Projects() {
  return (
    <Box bg="white" borderRadius="5px" p={5} w="100%" h="100%">
      <Project />
    </Box>
  )
}
