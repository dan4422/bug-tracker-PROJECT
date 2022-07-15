// CHAKRA:
import { Box, Container, Text } from '@chakra-ui/react'

// LOGIN:
import React from 'react'
import FormLogin from '../components/FormLogin'

function Login() {
  return (
    <>
      <Text px={4} mt={10} textAlign="center" fontSize="3xl">
        Login
      </Text>
      <Box my={10} mx="auto" w="95%" maxW="400px">
        <FormLogin />
      </Box>
    </>
  )
}

export default Login
