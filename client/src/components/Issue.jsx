// CHAKRA:

import { Box, Button, FormControl, FormLabel, Heading, Input, Select, Text, Textarea } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAddNewIssueMutation } from '../redux/services/issues'
import { useGetProjectsQuery } from '../redux/services/projects'

// ISSUE:
export default function Issue() {
  const navigate = useNavigate()
  const { data } = useGetProjectsQuery()
  const [addIssue] = useAddNewIssueMutation()
  const [project, setProject] = useState('')
  const [issue, setIssue] = useState({
    name: '',
    description: '',
    status: '',
    priority: '',
  })

  const updateIssue = (name, value) => {
    setIssue({
      ...issue,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    console.log('hey')
    e.preventDefault()
    console.log(issue)
    addIssue({ projectId: project, newIssue: issue })
      .unwrap()
      .then(() => {
        setIssue({
          name: '',
          description: '',
          status: '',
          priority: '',
        })
      })
      .catch((e) => {})
    console.log('hi')
  }
  return (
    <Box>
      <Box border="1px" borderColor="red" mb={5}>
        <Heading fontSize={25}>Issues</Heading>
      </Box>
      <FormControl onSubmit={handleSubmit} border="1px" borderColor="red" mb={5}>
        <Heading fontSize={17}>Create an Issue:</Heading>
        <FormLabel htmlFor="project">Project Name</FormLabel>
        <Select
          border="1px"
          borderColor="red"
          mb={5}
          id="project"
          required
          value={project}
          onChange={(e) => setProject(e.target.value)}
        >
          {data?.map((project, i) => (
            <option key={i} value={project.id}>
              {project.name}
            </option>
          ))}
        </Select>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input
          border="1px"
          borderColor="red"
          id="name"
          type="name"
          required
          value={issue.name}
          onChange={(e) => updateIssue('name', e.target.value)}
        ></Input>
        <FormLabel htmlFor="description">Description</FormLabel>
        <Textarea
          border="1px"
          borderColor="red"
          id="description"
          type="description"
          required
          value={issue.description}
          onChange={(e) => updateIssue('description', e.target.value)}
        ></Textarea>
        <FormLabel htmlFor="status">Status</FormLabel>
        <Select
          border="1px"
          borderColor="red"
          mb={5}
          id="status"
          required
          value={issue.status}
          onChange={(e) => updateIssue('status', e.target.value)}
        >
          <option value="Open">Open</option>
          <option value="Closed">Closed</option>
        </Select>
        <FormLabel htmlFor="priority">Priority</FormLabel>
        <Select
          border="1px"
          borderColor="red"
          mb={5}
          id="priority"
          required
          value={issue.priority}
          onChange={(e) => updateIssue('priority', e.target.value)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </Select>
        <Button type="submit" h="2rem" size="lg" bg="green">
          Add New Issue
        </Button>
      </FormControl>
      <Box border="1px" borderColor="red">
        <Heading fontSize={17}>Issue Selected:</Heading>
        <Box>
          <Text>PetMates</Text>
          <Text>PetMates</Text>
        </Box>
      </Box>
    </Box>
  )
}
