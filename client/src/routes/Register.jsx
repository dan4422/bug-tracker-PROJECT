// CHAKRA:
import { Box, Container, Text } from '@chakra-ui/react'
import FormRegister from '../components/FormRegister'

// REGISTER:
export default function Register() {
  return (
    <Box border="1px" borderColor="red" w="100%" h="100%">
      <Text px={4} mt={10} textAlign="center" fontSize="3xl">
        Register
      </Text>
      <Box my={10} mx="auto" w="95%" maxW="400px">
        <FormRegister />
      </Box>
    </Box>
  )
}
