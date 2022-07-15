// CHAKRA:
import { Container } from '@chakra-ui/react'

// LOGIN:
export default function Login() {
  return <Container>Login</Container>
import { Box, Text } from '@chakra-ui/react'
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
