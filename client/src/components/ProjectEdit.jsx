import {
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
  const [form, setForm] = useState({
    name: project.name,
    description: project.description,
    status: project.status,
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
      .then(() => {})
      .catch((e) => {})
  }

  return (
    <>
      <Stack>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <Flex alignItems="center" flexDir={'column'} justifyContent="center" gap="1" w="100%">
            <FormLabel>Name</FormLabel>
            <Input id="text" type="text" value={form.name} onChange={(e) => updateField('name', e.target.value)} />
            <FormLabel>Description</FormLabel>
            <Input
              id="text"
              type="text"
              value={form.description}
              onChange={(e) => updateField('description', e.target.value)}
            />
            <FormLabel>Status</FormLabel>
            <Select id="status" value={form.status} onChange={(e) => updateField('status', e.target.value)}>
              <option value="Not Yet Started">Not Yet Started</option>
              <option value="In Progress">In Progress</option>
              <option value="Finished">Finished</option>
            </Select>
            <PopoverFooter border="0" display="flex" alignItems="center" justifyContent="space-between" pb={4}>
              <ButtonGroup size="sm">
                <Button colorScheme="blue" type="submit">
                  Save
                </Button>
              </ButtonGroup>
            </PopoverFooter>
          </Flex>
        </form>
      </Stack>
    </>
  )
}

export default ProjectEdit
