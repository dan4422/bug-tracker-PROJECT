import { Button, Flex, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { useDeleteProjectMutation } from '../redux/services/projects'
import ProjectEdit from './ProjectEdit'

function ProjectResult({ project }) {
  const [deleteProject] = useDeleteProjectMutation()
  const [showEditForm, setShowEditForm] = useState(false)
  return (
    <Flex alignItems="center" mt="4" justifyContent="space-between">
      {showEditForm ? (
        <ProjectEdit project={project} onSuccess={() => setShowEditForm(false)} />
      ) : (
        <>
          <Flex alignItems="center">
            <Text>{project.name}</Text>
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
    </Flex>
  )
}

export default ProjectResult
