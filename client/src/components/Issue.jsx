// CHAKRA:

import { Button, FormControl, FormLabel, Heading, Input, Select, StackDivider, VStack } from '@chakra-ui/react'

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
    <>
      <form onSubmit={handleSubmit}>
        <Heading style={{ textAlign: 'center', color: 'white' }}>Issues</Heading>
        <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4}>
          <FormControl>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              id="name"
              type="name"
              required
              value={issue.name}
              onChange={(e) => updateIssue('name', e.target.value)}
            ></Input>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              id="name"
              type="name"
              required
              value={issue.description}
              onChange={(e) => updateIssue('description', e.target.value)}
            ></Input>
            <FormLabel htmlFor="status">Status</FormLabel>
            <Select id="status" required value={issue.status} onChange={(e) => updateIssue('status', e.target.value)}>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </Select>
          </FormControl>
          <Button type="submit" h="2rem" size="lg">
            Add New Issue
          </Button>
        </VStack>
      </form>
    </>
  )
}
