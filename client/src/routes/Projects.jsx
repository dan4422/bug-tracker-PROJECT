// CHAKRA:
import { Box, Container } from '@chakra-ui/react'

// COMPONENTS:
import { Project } from '../components/Project'

// PROJECTS:
export default function Projects() {
  return (
    <>
      <div style={{ margin: '30px', justifyContent: 'center', alignItems: 'center' }}>
        <Container style={{ boxShadow: '0px 10px 10px gray' }}>
          <Box>
            <Project />
          </Box>
        </Container>
      </div>
    </>
  )
}
