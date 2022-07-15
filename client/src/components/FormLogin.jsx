import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function FormLogin() {
  return (
    <form>
      <FormControl my="5">
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input id="email" type="email" required />
      </FormControl>
      <FormControl my="5">
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input id="password" type="password" required />
      </FormControl>
      <div>
        <Button type="submit" colorScheme="orange">
          Login
        </Button>
        <Link to="/Register">
          <Button>Register</Button>
        </Link>
      </div>
    </form>
  )
}

export default FormLogin
