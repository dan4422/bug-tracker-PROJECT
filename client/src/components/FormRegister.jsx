import { Button, Flex, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function FormRegister() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    state: '',
    city: '',
    DOB: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/api/v1/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => {})
  }

  // setting each specific form to each field
  const updateField = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl my="5">
        <FormLabel htmlFor="username">Username</FormLabel>
        <Input
          value={form.username}
          id="username"
          type="username"
          onChange={(e) => updateField('username', e.target.value)}
          required
        />
      </FormControl>
      <FormControl my="5">
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input
          value={form.email}
          id="email"
          type="email"
          onChange={(e) => updateField('email', e.target.value)}
          required
        />
      </FormControl>
      <FormControl my="5">
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          value={form.password}
          id="password"
          type="password"
          onChange={(e) => updateField('password', e.target.value)}
          required
        />
      </FormControl>
      <div>
        <FormControl my="5">
          <FormLabel htmlFor="state">State</FormLabel>
          <Input
            value={form.state}
            id="state"
            type="state"
            onChange={(e) => updateField('state', e.target.value)}
            required
          />
        </FormControl>
        <FormControl my="5">
          <FormLabel htmlFor="city">City</FormLabel>
          <Input
            value={form.city}
            id="city"
            type="city"
            onChange={(e) => updateField('city', e.target.value)}
            required
          />
        </FormControl>
        <FormControl my="5">
          <FormLabel htmlFor="date">Date of Birth</FormLabel>
          <Input value={form.DOB} id="date" type="date" onChange={(e) => updateField('DOB', e.target.value)} required />
        </FormControl>
      </div>

      <Flex alignItems={'center'} justifyContent={'space-evenly'}>
        <Button type="submit" colorScheme="orange">
          Submit
        </Button>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      </Flex>
    </form>
  )
}

export default FormRegister
