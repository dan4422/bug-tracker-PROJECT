// CHAKRA:
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Select,
  Text,
  Textarea,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useAddNewIssueMutation } from '../redux/services/issues'
import { useGetProjectsQuery } from '../redux/services/projects'

// IMGS:
import issuesIcon from '../imgs/issuesBlack.png'

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
      <Box
        bg="rgba(213, 213, 213, 0.682)"
        borderRadius={'5px'}
        mb={5}
        pl={2}
        pr={2}
        display="flex"
        gap={2}
        alignItems="center"
      >
        <Image width={8} h={8} src={issuesIcon} alt="" />
        <Text fontSize={'25px'} pt={1} fontWeight="bold" fontFamily="Baloo Tamma 2', cursive">
          Report Issue
        </Text>
      </Box>
      <form onSubmit={handleSubmit}>
        <FormControl mb={5}>
          <FormLabel bg="rgba(213, 213, 213, 0.682)" borderRadius={'5px'} mb={5} pl={2} w={123} htmlFor="project">
            Current Project
          </FormLabel>
          <Select
            border="2px"
            borderColor="rgba(76, 209, 4, 0.649)"
            focusBorderColor="rgba(63, 180, 0, 0.906)"
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
          <FormLabel bg="rgba(213, 213, 213, 0.682)" borderRadius={'5px'} mb={5} pl={2} w={50} htmlFor="name">
            Title
          </FormLabel>
          <Input
            border="2px"
            borderColor="rgba(76, 209, 4, 0.649)"
            focusBorderColor="rgba(63, 180, 0, 0.906)"
            mb={5}
            id="name"
            type="name"
            placeholder="Enter a title for your issue"
            required
            value={issue.name}
            onChange={(e) => updateIssue('name', e.target.value)}
          ></Input>
          <FormLabel bg="rgba(213, 213, 213, 0.682)" borderRadius={'5px'} mb={5} pl={2} w={97} htmlFor="description">
            Description
          </FormLabel>
          <Textarea
            border="2px"
            borderColor="rgba(76, 209, 4, 0.649)"
            focusBorderColor="rgba(63, 180, 0, 0.906)"
            mb={5}
            id="description"
            required
            placeholder="Write a description for your issue"
            value={issue.description}
            onChange={(e) => updateIssue('description', e.target.value)}
          ></Textarea>
          <FormLabel bg="rgba(213, 213, 213, 0.682)" borderRadius={'5px'} mb={5} pl={2} w={59} htmlFor="status">
            Status
          </FormLabel>
          <Select
            border="2px"
            borderColor="rgba(76, 209, 4, 0.649)"
            focusBorderColor="rgba(63, 180, 0, 0.906)"
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
          <FormLabel bg="rgba(213, 213, 213, 0.682)" borderRadius={'5px'} mb={5} pl={2} w={68} htmlFor="priority">
            Priority
          </FormLabel>
          <Select
            border="2px"
            borderColor="rgba(76, 209, 4, 0.649)"
            focusBorderColor="rgba(63, 180, 0, 0.906)"
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
          <Flex alignItems={'center'} gap={2}>
            <Button
              type="submit"
              size="lg"
              bg="rgba(178, 217, 100, 0.765)"
              _hover={{ bg: 'rgba(217, 199, 0, 0.487)' }}
              alignItems="center"
            >
              Add Issue
            </Button>
            <Box w={'100%'}>
              {error && (
                <Alert borderRadius={10} status="error">
                  <AlertIcon /> {error}
                </Alert>
              )}
              {success && (
                <Alert borderRadius={10} status="success">
                  <AlertIcon /> {success}
                </Alert>
              )}
            </Box>
          </Flex>
        </FormControl>
      </form>
    </Box>
  )
}
