import { Alert, AlertIcon, Button, Flex, FormLabel, Input, Select, Stack } from '@chakra-ui/react'

import { useState } from 'react'
import { useUpdateIssueMutation } from '../redux/services/issues'

function IssuesEdit({ issue }) {
  const [updateIssues] = useUpdateIssueMutation()
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const [form, setForm] = useState({
    name: issue.name,
    description: issue.description,
    status: issue.status,
    priority: issue.priority,
  })
  const updateField = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateIssues({ projectId: issue.ProjectId, issueId: issue.id, updatedIssue: form })
      .unwrap()
      .then((data) => {
        setSuccess(data.success)
      })
      .catch((e) => {
        setError(e.data.error)
      })
  }

  return (
    <>
      <Stack>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <Flex alignItems="center" flexDir={'column'} justifyContent="center" gap="1" w="100%">
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
            <FormLabel>Issue Name</FormLabel>
            <Input
              id="name"
              type="name"
              value={form.name}
              onChange={(e) => updateField('name', e.target.value)}
              required
            />
            <FormLabel>Issue Description</FormLabel>
            <Input
              id="description"
              type="description"
              value={form.description}
              onChange={(e) => updateField('description', e.target.value)}
              required
            />
            <FormLabel>Issue Status</FormLabel>
            <Select
              placeholder="Status?"
              id="status"
              value={form.status}
              onChange={(e) => updateField('status', e.target.value)}
            >
              <option value="Closed">Closed</option>
              <option value="Open">Open</option>
            </Select>
            <FormLabel>Issue Priority</FormLabel>
            <Select
              placeholder="Priority?"
              id="priority"
              value={form.priority}
              onChange={(e) => updateField('priority', e.target.value)}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </Select>
            <Button mt={5} type="submit" colorScheme="blue">
              Save
            </Button>
          </Flex>
        </form>
      </Stack>
    </>
  )
}

export default IssuesEdit
