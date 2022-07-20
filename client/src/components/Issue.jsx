// CHAKRA:

import { Box, Button, FormControl, FormLabel, Heading, Input, Select, Text, Textarea } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// ISSUE:
export default function Issue() {
  const navigate = useNavigate()
  const [issue, setIssue] = useState({
    name: '',
    description: '',
    status: '',
    userId: '',
  })

  const updateIssue = (name, value) => {
    setIssue({
      ...issue,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/api/v1/projects/:projectId/issues/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(issue),
    })
      .then((res) => res.json())
      .then(() => {
        navigate('/')
      })
      .catch(() => {})
  }
  return (
    <Box>
      <Box border="1px" borderColor="red" mb={5}>
        <Heading fontSize={25}>Issues</Heading>
      </Box>
      <FormControl onSubmit={handleSubmit} border="1px" borderColor="red" mb={5}>
        <Heading fontSize={17}>Create an Issue:</Heading>
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
        <FormLabel htmlFor="name">Description</FormLabel>
        <Textarea
          border="1px"
          borderColor="red"
          id="name"
          type="name"
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
