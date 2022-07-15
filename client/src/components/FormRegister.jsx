import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react'

function FormRegister() {
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
      <Button type="submit" colorScheme="orange">
        Submit
      </Button>
    </form>
  )
}

export default FormRegister
