// CHAKRA:
import { Box, Text } from '@chakra-ui/react'

// COMPONENTS:
import FormRegister from '../components/FormRegister'

// REGISTER:
export default function Register() {
  return (
    <Box className="App" width="100%" h="150vh">
      <Box my={10} mx="auto" w="100%" maxW="400px">
        <FormRegister />
      </Box>
    </Box>
  )
}
