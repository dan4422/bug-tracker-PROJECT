import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import { useLoginMutation } from '../redux/services/user'

function FormLogin() {
  const navigate = useNavigate()
  const [login] = useLoginMutation()
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
    <form onSubmit={handleSubmit}>
      <FormControl my="5">
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => updateField('email', e.target.value)}
          required
        />
      </FormControl>
      <FormControl my="5">
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          id="password"
          type="password"
          value={form.password}
          onChange={(e) => updateField('password', e.target.value)}
          required
        />
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
