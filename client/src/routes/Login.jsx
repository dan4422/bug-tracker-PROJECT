// CHAKRA:
import { Box, Text } from '@chakra-ui/react'
import FormLogin from '../components/FormLogin'
import SiteTitle from '../components/SiteTitle'

// LOGIN:
export default function Login() {
  return (
    <Box className="App" w="100%" h="100vh">
      <SiteTitle />
      <Text px={4} pt={10} textAlign="center" fontSize="3xl">
        Login
      </Text>
      <Box my={10} mx="auto" w="95%" maxW="400px">
        <FormLogin />
      </Box>
    </Box>
  )
}
