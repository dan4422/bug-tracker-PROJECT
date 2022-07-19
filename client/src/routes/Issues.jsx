// CHAKRA:
import { Box, Container } from '@chakra-ui/react'
import Issue from '../components/Issue'

// COMPONENTS:
import Issue from '../components/Issue'

// ISSUES:
export default function Issues() {
  return (

    <>
      <Box border="1px" borderColor="red" w="100%" h="100%">
        Issues
      </Box>

      <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Container style={{ boxShadow: '0px 10px 10px gray' }}>
          <Box>
            <Issue />
          </Box>
        </Container>
      </div>
    </>

    <Box p={5} w="100%" h="100%">
      <Issue />
    </Box>

  )
}
