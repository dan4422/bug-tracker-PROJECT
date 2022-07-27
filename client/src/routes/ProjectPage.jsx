import {
  Alert,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertIcon,
  Badge,
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import ProjectEdit from '../components/ProjectEdit'
import { useDeleteProjectMutation, useGetProjectsByIDQuery } from '../redux/services/projects'
import trashIcon from '../imgs/trashIcon.png'
import editIcon from '../imgs/editIcon.png'

function statusColor(status) {
  switch (status) {
    case 'Finished':
      return 'green'
    case 'In Progress':
      return 'yellow'
    case 'Not Yet Started':
      return 'red'
    default:
      return ''
  }
}

function positionColor(position) {
  switch (position) {
    case 'FullStack':
      return 'Blue'
    case 'FrontEnd':
      return 'Red'
    case 'Backend':
      return 'Green'
    default:
      return ''
  }
}

function ProjectPage() {
  const { projectId } = useParams()
  const [deleteProject] = useDeleteProjectMutation()
  const { data } = useGetProjectsByIDQuery(projectId)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Box bg="white">
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
        <Heading my={2} textAlign={'center'}>
          {data?.name.toUpperCase()}
        </Heading>
        <Flex justifyContent={'center'} alignItems="center" gap={5}>
          <Heading>Status:</Heading>
          <Badge rounded={16} my={3} alignItems={'center'} colorScheme={statusColor(data?.status)} fontSize="1.5em">
            {data?.status}
          </Badge>
          <div></div>
        </Flex>
        <Text textAlign={'center'}>Last Updated: {new Date(data?.updatedAt).toDateString()}</Text>
        <Text textAlign={'center'}>Issue Opened: {new Date(data?.createdAt).toDateString()}</Text>
        <Flex flexDir={'column'} alignItems="center" justifyContent="center">
          <Flex gap="2" mt="2" justifyContent={'center'}>
            <Button size="sm" aria-label="icon">
              <Image width={5} h={5} src={editIcon} alt="" onClick={onOpen} />
            </Button>
            <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Edit {data?.name}</DrawerHeader>
                <DrawerBody>
                  <ProjectEdit project={data} />
                </DrawerBody>
                <DrawerFooter>
                  <Button variant="outline" mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
            <Button
              size="sm"
              onClick={() =>
                deleteProject(data?.id)
                  .unwrap()
                  .then((data) => {
                    setSuccess(data.success)
                  })
                  .catch((error) => {
                    setError(error.data.error)
                    onOpen()
                    onClose()
                    // setIsOpen(!isOpen)
                    // setOnClose(!onClose)
                  })
              }
              aria-label="icon"
            >
              <Image width={5} h={5} src={trashIcon} alt="" />
            </Button>
          </Flex>
          <Heading mt={3} size="md" textDecoration={'underline'} textDecorationColor={'red'} fontSize={'35px'}>
            Description
          </Heading>
          <Text fontSize={'22px'} mt={5} textAlign="center">
            {data?.description}
          </Text>
        </Flex>
      </Box>
    </>
  )
}

export default ProjectPage
