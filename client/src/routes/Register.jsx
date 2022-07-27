// CHAKRA:
import { Box, Text } from '@chakra-ui/react'
import SiteTitle from '../components/SiteTitle'

// COMPONENTS:
import FormRegister from '../components/FormRegister'

// REGISTER:
export default function Register() {
  return (
    <Box className="App" w="100%" h="100vh">
      <Box my={10} mx="auto" w="95%" maxW="400px">
        <FormRegister />
      </Box>
    </Box>
  )
}
