// CHAKRA:
import { Container } from '@chakra-ui/react'

// REGISTER:
export default function Register() {
  return <Container>Register</Container>
import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import FormRegister from '../components/FormRegister'

function Register() {
  return (
    <>
      <Text px={4} mt={10} textAlign="center" fontSize="3xl">
        Register
      </Text>
      <Box my={10} mx="auto" w="95%" maxW="400px">
        <FormRegister />
      </Box>
    </>
  )
}

export default Register
