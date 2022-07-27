// CHAKRA:
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Select,
  StackDivider,
  Text,
  Textarea,
  VStack,
  Wrap,
} from '@chakra-ui/react'

// REACT:
import { useState } from 'react'
import { useAddNewProjectMutation } from '../redux/services/projects'

// IMGS:
import projectsIcon from '../imgs/projectsBlack.png'

// COMPONENTS:
import ProjectDisplay from './ProjectDisplay'

// PROJECT:
export function Project() {
  const [addNewProject] = useAddNewProjectMutation()
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    description: '',
    status: '',
    position: '',
  })

  const updateProject = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addNewProject(form)
      .unwrap()
      .then(() => {
        setIsLoading(false)
        if (error) {
          setError(error)
        } else {
          setSuccess('Project Submitted')
        }
        setForm({
          name: '',
          description: '',
          status: '',
          position: '',
        })
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
        <Image width={8} h={8} src={projectsIcon} alt="" />
        <Text fontSize={'25px'} pt={1} fontWeight="bold" fontFamily="Baloo Tamma 2', cursive">
          Create Project
        </Text>
      </Box>
      <form onSubmit={handleSubmit}>
        <FormControl mb={5}>
          <FormLabel bg="rgba(213, 213, 213, 0.682)" borderRadius={'5px'} mb={5} pl={2} w={55} htmlFor="name">
            Name
          </FormLabel>
          <Input
            border="2px"
            borderColor="rgba(76, 209, 4, 0.649)"
            focusBorderColor="rgba(63, 180, 0, 0.906)"
            mb={5}
            id="name"
            type="name"
            required
            value={form.name}
            placeholder="Enter the name of your project"
            onChange={(e) => updateProject('name', e.target.value)}
          />
          <FormLabel bg="rgba(213, 213, 213, 0.682)" borderRadius={'5px'} mb={5} pl={2} w={100} htmlFor="description">
            Description
          </FormLabel>
          <Textarea
            border="2px"
            borderColor="rgba(76, 209, 4, 0.649)"
            focusBorderColor="rgba(63, 180, 0, 0.906)"
            mb={5}
            id="description"
            required
            value={form.description}
            onChange={(e) => updateProject('description', e.target.value)}
            placeholder="Write a description for your project"
          />
          <FormLabel bg="rgba(213, 213, 213, 0.682)" borderRadius={'5px'} mb={5} pl={2} w={150}>
            Operational Status
          </FormLabel>
          <Select
            border="2px"
            borderColor="rgba(76, 209, 4, 0.649)"
            focusBorderColor="rgba(63, 180, 0, 0.906)"
            mb={5}
            placeholder="Select Status"
            color={form.status ? 'black' : 'gray'}
            value={form.status}
            onChange={(e) => updateProject('status', e.target.value)}
          >
            <option value="Not Yet Started">Not Yet Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Finished">Finished</option>
          </Select>
          <FormLabel bg="rgba(213, 213, 213, 0.682)" borderRadius={'5px'} mb={5} pl={2} w={73}>
            Position
          </FormLabel>
          <Select
            border="2px"
            borderColor="rgba(76, 209, 4, 0.649)"
            focusBorderColor="rgba(63, 180, 0, 0.906)"
            mb={5}
            placeholder="Select position"
            color={form.position ? 'black' : 'gray'}
            value={form.position}
            onChange={(e) => updateProject('position', e.target.value)}
          >
            <option value="Fullstack">Fullstack</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </Select>
          <Flex alignItems={'center'} gap={2}>
            <Button type="submit" size="lg" bg="rgba(178, 217, 100, 0.765)" _hover={{ bg: 'rgba(217, 199, 0, 0.487)' }}>
              Add Project
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
      <Text
        fontSize={'17px'}
        mb={4}
        mx={2}
        pl={2}
        borderBottom="1px"
        borderColor="lightgray"
        fontWeight="bold"
        fontFamily="Baloo Tamma 2', cursive"
      >
        Projects List
      </Text>
      <ProjectDisplay />
    </Box>
  )
}
