// CHAKRA:
import { Alert, AlertIcon, Box, Button, Flex, FormControl, FormLabel, Heading, Input, Text } from '@chakra-ui/react'

// REACT:
import { useState } from 'react'

// REACT ROUTER:
import { Link, useNavigate } from 'react-router-dom'

// REDUX:
import { useLoginMutation } from '../redux/services/user'

// FORM LOGIN:
export default function FormLogin() {
  const navigate = useNavigate()
  const [login, { isLoading, isError, error }] = useLoginMutation()
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const updateField = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    login(form)
      .unwrap()
      .then(() => {
        navigate('/')
      })
      .catch(() => {})
  }
  return (
    <Box m={'0 auto'} bg="white" borderRadius={'10px'} p={5} maxW={'70%'}>
      <Text fontSize={30} textAlign="center">
        BUGSLY
      </Text>
      <Text textAlign="center">"Where problems are squashed."</Text>
      <form onSubmit={handleSubmit}>
        {isError && (
          <Alert status="error">
            <AlertIcon /> {error.data.error}
          </Alert>
        )}
        <FormControl my="5">
          <FormLabel bg="rgba(213, 213, 213, 0.682)" borderRadius={'5px'} mb={5} pl={2} w={113} htmlFor="email">
            Email address
          </FormLabel>
          <Input
            border="2px"
            borderColor="rgba(76, 209, 4, 0.649)"
            focusBorderColor="rgba(63, 180, 0, 0.906)"
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => updateField('email', e.target.value)}
            required
          />
        </FormControl>
        <FormControl my="5">
          <FormLabel bg="rgba(213, 213, 213, 0.682)" borderRadius={'5px'} mb={5} pl={2} w={82} htmlFor="password">
            Password
          </FormLabel>
          <Input
            border="2px"
            borderColor="rgba(76, 209, 4, 0.649)"
            focusBorderColor="rgba(63, 180, 0, 0.906)"
            id="password"
            type="password"
            value={form.password}
            onChange={(e) => updateField('password', e.target.value)}
            required
          />
        </FormControl>
        <Flex alignItems={'center'} justifyContent={'space-evenly'}>
          <Button
            bg="rgba(178, 217, 100, 0.765)"
            _hover={{ bg: 'rgba(217, 199, 0, 0.487)' }}
            type="submit"
            isLoading={isLoading}
          >
            Login
          </Button>
          <Link to="/register">
            <Button>Register</Button>
          </Link>
        </Flex>
      </form>
    </Box>
  )
}
