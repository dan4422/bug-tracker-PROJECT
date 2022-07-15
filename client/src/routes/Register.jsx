// CHAKRA:
import { Box, Container, Text } from '@chakra-ui/react'

// REGISTER:
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
