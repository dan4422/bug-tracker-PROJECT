// CHAKRA:
import { Box, Container } from '@chakra-ui/react'

import { Project } from '../components/Project'

// COMPONENTS:
import Project from '../components/Project'

// PROJECTS:
export default function Projects() {
  return (

    <>
      <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Container style={{ boxShadow: '0px 10px 10px gray' }}>
          <Box>
            <Project />
          </Box>
        </Container>
      </div>
    </>

    <Box p={5} w="100%" h="100%">
      <Project />
    </Box>

  )
}
