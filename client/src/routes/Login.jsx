// CHAKRA:
import { Box, Text } from '@chakra-ui/react'
import FormLogin from '../components/FormLogin'

// LOGIN:
export default function Login() {
  return (
    <Box border="1px" borderColor="red" w="100%" h="100%">
      <Text px={4} mt={10} textAlign="center" fontSize="3xl">
        Login
      </Text>
      <Box my={10} mx="auto" w="95%" maxW="400px">
        <FormLogin />
      </Box>
    </Box>
  )
}
