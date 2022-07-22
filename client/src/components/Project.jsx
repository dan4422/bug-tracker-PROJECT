// CHAKRA:
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  StackDivider,
  Textarea,
  VStack,
  Wrap,
} from '@chakra-ui/react'

// REACT:
import { useState } from 'react'
import { useAddNewProjectMutation } from '../redux/services/projects'

import ProjectDisplay from './ProjectDisplay'

// PROJECT:
export function Project() {
  const [addNewProject] = useAddNewProjectMutation()
  const [form, setForm] = useState({
    name: '',
    description: '',
    status: '',
    position: '',
  })

  const updateProject = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addNewProject(form)
      .unwrap()
      .then(() => {
        setForm({
          name: '',
          description: '',
          status: '',
          position: '',
        })
      })
      .catch((e) => {})
  }
  return (
    <Box>
      <Box border="1px" borderColor="red" mb={5}>
        <Heading fontSize={25}>Projects</Heading>
      </Box>
      <form onSubmit={handleSubmit}>
        <FormControl border="1px" borderColor="red" mb={5}>
          <Heading fontSize={17}>Create a Project:</Heading>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            id="name"
            type="name"
            required
            value={form.name}
            placeholder="Project name here."
            onChange={(e) => updateProject('name', e.target.value)}
          />
          <FormLabel htmlFor="description">Description</FormLabel>
          <Textarea
            id="description"
            required
            value={form.description}
            onChange={(e) => updateProject('description', e.target.value)}
            placeholder="Write a description for your project here"
          />
          <FormLabel>Operational Status</FormLabel>
          <Select
            border="1px"
            borderColor="red"
            placeholder="Select progress"
            value={form.status}
            onChange={(e) => updateProject('status', e.target.value)}
          >
            <option value="Not Yet Started">Not Yet Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Finished">Finished</option>
          </Select>
          <FormLabel>Position</FormLabel>
          <Select
            border="1px"
            borderColor="red"
            placeholder="Select position"
            value={form.position}
            onChange={(e) => updateProject('position', e.target.value)}
          >
            <option value="Fullstack">Fullstack</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </Select>
        </FormControl>
        <Button type="submit" h="2rem" size="lg" bg="green" mb={5}>
          Submit
        </Button>
      </form>
      <Box border="1px" borderColor="red">
        <Heading fontSize={17}>Projects List:</Heading>
        <ProjectDisplay />
      </Box>
    </Box>
  )
}
