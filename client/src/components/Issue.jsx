// CHAKRA:

import {
  Alert,
  AlertIcon,
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
  Textarea,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAddNewIssueMutation } from '../redux/services/issues'
import { useGetProjectsQuery } from '../redux/services/projects'

// ISSUE:
export default function Issue() {
  const { data } = useGetProjectsQuery()
  const [addIssue] = useAddNewIssueMutation()
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [isLoading, setIsLoading] = useState(false)
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
    e.preventDefault()
    addIssue({ projectId: project, newIssue: issue })
      .unwrap()
      .then((data) => {
        setIsLoading(false)
        if (data.error) {
          setError(data.error)
        } else {
          setSuccess('Issue Submitted')
        }
      })
      .then(() => {
        setIssue({
          name: '',
          description: '',
          status: '',
          priority: '',
        })
        setProject('')
      })
      .catch((e) => {})
  }
  return (
    <Box>
      <Box border="1px" borderColor="red" mb={5}>
        <Text fontSize={'25px'} fontWeight="bold" fontFamily="Baloo Tamma 2', cursive">
          Issues
        </Text>
      </Box>
      <form onSubmit={handleSubmit}>
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

        <FormControl border="1px" borderColor="red" mb={5}>
          <Text fontSize={'17px'} fontWeight="bold" fontFamily="Baloo Tamma 2', cursive">
            Create an Issue
          </Text>
          <FormLabel htmlFor="project">Current Project</FormLabel>
          <Select
            border="1px"
            borderColor="red"
            mb={5}
            id="project"
            required
            color={project ? 'black' : 'gray'}
            placeholder="Select a project"
            value={project}
            onChange={(e) => setProject(e.target.value)}
          >
            {data?.map((project, i) => (
              <option key={i} value={project.id}>
                {project.name}
              </option>
            ))}
          </Select>
          <FormLabel htmlFor="name">Title</FormLabel>
          <Input
            border="1px"
            borderColor="red"
            id="name"
            type="name"
            placeholder="Enter a title for your issue"
            required
            value={issue.name}
            onChange={(e) => updateIssue('name', e.target.value)}
          ></Input>
          <FormLabel htmlFor="description">Description</FormLabel>
          <Textarea
            border="1px"
            borderColor="red"
            id="description"
            required
            placeholder="Write a description for your issue"
            value={issue.description}
            onChange={(e) => updateIssue('description', e.target.value)}
          ></Textarea>
          <FormLabel htmlFor="status">Status</FormLabel>
          <Select
            border="1px"
            borderColor="red"
            mb={5}
            id="status"
            placeholder="Select status"
            color={issue.status ? 'black' : 'gray'}
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
            color={issue.priority ? 'black' : 'gray'}
            value={issue.priority}
            placeholder="Select priority"
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
      </form>
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
