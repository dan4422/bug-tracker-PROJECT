import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { useDeleteProjectMutation } from '../redux/services/projects'
import ProjectEdit from './ProjectEdit'

function ProjectResult({ project }) {
  const [deleteProject] = useDeleteProjectMutation()
  const [showEditForm, setShowEditForm] = useState(false)
  return (
    <Box border="1px" borderColor="red">
      {showEditForm ? (
        <ProjectEdit project={project} onSuccess={() => setShowEditForm(false)} />
      ) : (
        <>
          <Flex alignItems="center">
            <Text mr="1">{project.name}</Text>
            <Text mr="1">{project.description}</Text>
            <Text>{project.status}</Text>
          </Flex>
          <Flex alignItems="center" gap="2">
            <Button size="sm" aria-label="icon" onClick={() => setShowEditForm(true)}>
              📝
            </Button>

            <Button size="sm" onClick={() => deleteProject(project.id)} aria-label="icon">
              ❌
            </Button>
          </Flex>
        </>
      )}
    </Box>
  )
}

export default ProjectResult
