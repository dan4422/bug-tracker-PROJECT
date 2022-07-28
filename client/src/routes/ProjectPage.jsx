import {
  Alert,
  AlertIcon,
  Badge,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
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
      <Box borderRadius={'5px'} bg="white">
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
        <Text my={2} pt={2} fontSize={30} textAlign={'center'}>
          {data?.name.toUpperCase()}
        </Text>
        <Text
          fontSize={'17px'}
          mb={4}
          mx={10}
          pl={2}
          borderBottom="1px"
          borderColor="lightgray"
          fontWeight="bold"
          fontFamily="Baloo Tamma 2', cursive"
        ></Text>
        <Text mt={3} size="md" textAlign={'center'} fontSize={15}>
          Description
        </Text>
        <Text fontSize={'22px'} mt={2} mx={5} textAlign="center">
          {data?.description}
        </Text>
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
                })
            }
            aria-label="icon"
          >
            <Image width={5} h={5} src={trashIcon} alt="" />
          </Button>
        </Flex>
        <Text
          fontSize={'17px'}
          mt={3}
          mb={2}
          mx={10}
          pl={2}
          borderBottom="1px"
          borderColor="lightgray"
          fontWeight="bold"
          fontFamily="Baloo Tamma 2', cursive"
        ></Text>
        <Flex justifyContent={'center'} alignItems="center" mt={2}>
          <Badge
            borderRadius={'20px'}
            my={2}
            px={4}
            pt={1}
            alignItems={'center'}
            colorScheme={statusColor(data?.status)}
            fontSize={13}
          >
            {data?.status}
          </Badge>
          <div></div>
        </Flex>
        <Text textAlign={'center'}>Last Updated: {new Date(data?.updatedAt).toDateString()}</Text>
        <Text textAlign={'center'} pb={2}>
          Issue Opened: {new Date(data?.createdAt).toDateString()}
        </Text>
        <Flex flexDir={'column'} alignItems="center" justifyContent="center"></Flex>
      </Box>
    </>
  )
}

export default ProjectPage
