// CHAKRA:
import { Box, Container } from '@chakra-ui/react'

// COMPONENTS:
import Issue from '../components/Issue'

// ISSUES:
export default function Issues() {
  return (
    <>
      <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Container style={{ boxShadow: '0px 10px 10px gray' }}>
          <Box>
            <Issue />
          </Box>
        </Container>
      </div>
    </>
  )
}
