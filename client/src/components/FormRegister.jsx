import { Alert, AlertIcon, Box, Button, Flex, FormControl, FormLabel, Input, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useRegisterMutation } from '../redux/services/user'

function FormRegister() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    state: '',
    city: '',
    DOB: '',
  })

  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [register] = useRegisterMutation()

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    setSuccess('')
    register(form)
      .unwrap()
      .then((data) => {
        setIsLoading(false)
        setSuccess('Registered Successfully')
        setForm({
          username: '',
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          state: '',
          city: '',
          DOB: '',
        })
        navigate('/login')
      })
      .catch((error) => {
        setError(error.data.error)
        setForm({
          username: '',
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          state: '',
          city: '',
          DOB: '',
        })
        setIsLoading(false)
      })
  }

  // setting each specific form to each field
  const updateField = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    })
  }

  return (
    <Box m={'0 auto'} bg="white" borderRadius={'10px'} p={5} maxW={'90%'}>
      <Text textAlign="center" fontSize="30">
        Register
      </Text>
      <form onSubmit={handleSubmit}>
        {error && (
          <Alert status="error">
            <AlertIcon /> {error}
          </Alert>
        )}
        {success && (
          <Alert status="success">
            <AlertIcon /> {success}
          </Alert>
        )}
        <FormControl my="5">
          <FormLabel bg="rgba(213, 213, 213, 0.682)" borderRadius={'5px'} mb={5} pl={2} w={85} htmlFor="username">
            Username
          </FormLabel>
          <Input
            border="2px"
            borderColor="rgba(76, 209, 4, 0.649)"
            focusBorderColor="rgba(63, 180, 0, 0.906)"
            value={form.username}
            id="username"
            type="username"
            onChange={(e) => updateField('username', e.target.value)}
            required
          />
        </FormControl>
        <FormControl my="5">
          <FormLabel bg="rgba(213, 213, 213, 0.682)" borderRadius={'5px'} mb={5} pl={2} w={90} htmlFor="first_name">
            First Name
          </FormLabel>
          <Input
            border="2px"
            borderColor="rgba(76, 209, 4, 0.649)"
            focusBorderColor="rgba(63, 180, 0, 0.906)"
            value={form.first_name}
            id="first_name"
            type="first_name"
            onChange={(e) => updateField('first_name', e.target.value)}
            required
          />
        </FormControl>
        <FormControl my="5">
          <FormLabel bg="rgba(213, 213, 213, 0.682)" borderRadius={'5px'} mb={5} pl={2} w={87} htmlFor="last_name">
            Last Name
          </FormLabel>
          <Input
            border="2px"
            borderColor="rgba(76, 209, 4, 0.649)"
            focusBorderColor="rgba(63, 180, 0, 0.906)"
            value={form.last_name}
            id="last_name"
            type="last_name"
            onChange={(e) => updateField('last_name', e.target.value)}
            required
          />
        </FormControl>
        <FormControl my="5">
          <FormLabel bg="rgba(213, 213, 213, 0.682)" borderRadius={'5px'} mb={5} pl={2} w={110} htmlFor="email">
            Email address
          </FormLabel>
          <Input
            border="2px"
            borderColor="rgba(76, 209, 4, 0.649)"
            focusBorderColor="rgba(63, 180, 0, 0.906)"
            value={form.email}
            id="email"
            type="email"
            onChange={(e) => updateField('email', e.target.value)}
            required
          />
        </FormControl>
        <FormControl my="5">
          <FormLabel bg="rgba(213, 213, 213, 0.682)" borderRadius={'5px'} mb={5} pl={2} w={85} htmlFor="password">
            Password
          </FormLabel>
          <Input
            border="2px"
            borderColor="rgba(76, 209, 4, 0.649)"
            focusBorderColor="rgba(63, 180, 0, 0.906)"
            value={form.password}
            id="password"
            type="password"
            onChange={(e) => updateField('password', e.target.value)}
            required
          />
        </FormControl>
        <div>
          <FormControl my="5">
            <FormLabel bg="rgba(213, 213, 213, 0.682)" borderRadius={'5px'} mb={5} pl={2} w={45} htmlFor="city">
              City
            </FormLabel>
            <Input
              border="2px"
              borderColor="rgba(76, 209, 4, 0.649)"
              focusBorderColor="rgba(63, 180, 0, 0.906)"
              value={form.city}
              id="city"
              type="city"
              onChange={(e) => updateField('city', e.target.value)}
              required
            />
          </FormControl>
          <FormControl my="5">
            <FormLabel bg="rgba(213, 213, 213, 0.682)" borderRadius={'5px'} mb={5} pl={2} w={50} htmlFor="state">
              State
            </FormLabel>
            <Input
              border="2px"
              borderColor="rgba(76, 209, 4, 0.649)"
              focusBorderColor="rgba(63, 180, 0, 0.906)"
              value={form.state}
              id="state"
              type="state"
              onChange={(e) => updateField('state', e.target.value)}
              required
            />
          </FormControl>
          <FormControl my="5">
            <FormLabel bg="rgba(213, 213, 213, 0.682)" borderRadius={'5px'} mb={5} pl={2} w={110} htmlFor="date">
              Date of Birth
            </FormLabel>
            <Input
              border="2px"
              borderColor="rgba(76, 209, 4, 0.649)"
              focusBorderColor="rgba(63, 180, 0, 0.906)"
              value={form.DOB}
              id="date"
              type="date"
              onChange={(e) => updateField('DOB', e.target.value)}
              required
            />
          </FormControl>
        </div>
        <Flex alignItems={'center'} justifyContent={'space-evenly'}>
          <Button
            bg="rgba(178, 217, 100, 0.765)"
            _hover={{ bg: 'rgba(217, 199, 0, 0.487)' }}
            isLoading={isLoading}
            type="submit"
          >
            Submit
          </Button>
          <Link to="/login">
            <Button>Return To Login</Button>
          </Link>
        </Flex>
      </form>
    </Box>
  )
}

export default FormRegister
