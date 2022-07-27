import {
  Alert,
  AlertIcon,
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  PopoverFooter,
  Select,
  Stack,
} from '@chakra-ui/react'

import { useState } from 'react'
import { useUpdateProjectMutation } from '../redux/services/projects'

function ProjectEdit({ project }) {
  const [updateProject] = useUpdateProjectMutation()
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [form, setForm] = useState({
    name: project?.name,
    description: project?.description,
    status: project?.status,
  })
  const updateField = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateProject({ id: project.id, updatedProject: form })
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
            <FormLabel>Project Name</FormLabel>
            <Input id="text" type="text" value={form.name} onChange={(e) => updateField('name', e.target.value)} />
            <FormLabel>Project Description</FormLabel>
            <Input
              id="text"
              type="text"
              value={form.description}
              onChange={(e) => updateField('description', e.target.value)}
            />
            <FormLabel>Project Status</FormLabel>
            <Select
              id="status"
              placeholder="Select Status"
              value={form.status}
              onChange={(e) => updateField('status', e.target.value)}
            >
              <option value="Not Yet Started">Not Yet Started</option>
              <option value="In Progress">In Progress</option>
              <option value="Finished">Finished</option>
            </Select>
            <Button colorScheme="blue" type="submit">
              Save
            </Button>
          </Flex>
        </form>
      </Stack>
    </>
  )
}

export default ProjectEdit
