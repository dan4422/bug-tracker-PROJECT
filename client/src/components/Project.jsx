// CHAKRA:
import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
  StackDivider,
  Textarea,
  VStack,
} from '@chakra-ui/react'

// REACT:
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// PROJECT:

export function Project() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    description: '',
    status: '',
  })

  const updateProject = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/api/v1/projects/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then(() => {
        navigate('/')
      })
      .catch(() => {})
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Heading style={{ textAlign: 'center', color: 'white' }}>Project Dashboard</Heading>
        <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4}>
          <FormControl>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              id="name"
              type="name"
              required
              value={form.name}
              placeholder="Project name here."
              onChange={(e) => updateProject('name', e.target.value)}
            />
            <Stack spacing={5}></Stack>
            <FormLabel htmlFor="description">Description</FormLabel>
            <Input
              id="description"
              type="description"
              required
              value={form.description}
              onChange={(e) => updateProject('description', e.target.value)}
              placeholder="Write a description for your project here"
            />
            <FormLabel>Operational Status</FormLabel>
            <Select placeholder="Select progress">
              <option value="option1">Progress</option>
              <option value="option2">Finish</option>
            </Select>
          </FormControl>
          <Button type="submit" h="2rem" size="lg">
            Submit
          </Button>
        </VStack>
      </form>
    </>
  )
}
