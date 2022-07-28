import {
  Alert,
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
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import IssuesEdit from '../components/IssuesEdit'
import trashIcon from '../imgs/trashIcon.png'
import editIcon from '../imgs/editIcon.png'
import { useDeleteIssueMutation, useGetIssueByIDQuery } from '../redux/services/issues'

function priorityColor(priority) {
  switch (priority) {
    case 'Low':
      return 'green'
    case 'Medium':
      return 'yellow'
    case 'High':
      return 'red'
    default:
      return ''
  }
}

function statusColor(status) {
  switch (status) {
    case 'Open':
      return 'blue'
    case 'Closed':
      return 'green'
    default:
      return ''
  }
}

function IssuePage() {
  const { projectId, issueId } = useParams()
  const { data } = useGetIssueByIDQuery({ projectId, issueId })
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const [deleteIssue] = useDeleteIssueMutation()
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

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
        <Text my={2} pt={2} fontSize={30} textAlign={'center'}>
          {data?.name.toUpperCase()}
        </Text>
        <Text size={'sm'} my={2} textAlign={'center'}>
          Issue posted by {data?.User.username}
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
        <Flex mt={2} justifyContent={'center'} gap={2}>
          <Button size="sm">
            <Image width={5} h={5} src={editIcon} alt="" onClick={onOpen} ref={btnRef} />
          </Button>
          <Button
            size="sm"
            onClick={() =>
              deleteIssue({ projectId: data?.ProjectId, issueId: data?.id })
                .unwrap()
                .then((data) => {
                  setSuccess(data.success)
                })
                .catch((error) => {
                  setError(error.data.error)
                })
            }
          >
            <Image width={5} h={5} src={trashIcon} alt="" />
          </Button>
        </Flex>
        <Flex flexDir={'column'} alignItems="center" justifyContent="center" mb={3}></Flex>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Edit {data?.name}</DrawerHeader>
            <DrawerBody>
              <IssuesEdit issue={data} />
            </DrawerBody>
            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
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
        <Flex justifyContent={'center'} alignItems="center" gap={2}>
          <Badge
            borderRadius={'20px'}
            fontSize={13}
            my={2}
            px={4}
            pt={1}
            alignItems={'center'}
            colorScheme={priorityColor(data?.priority)}
          >
            {data?.priority}
          </Badge>
          <Badge
            borderRadius={'20px'}
            fontSize={13}
            my={2}
            px={4}
            pt={1}
            alignItems={'center'}
            colorScheme={statusColor(data?.status)}
          >
            {data?.status}
          </Badge>
        </Flex>
        <Text textAlign={'center'}>Last Updated: {new Date(data?.updatedAt).toDateString()}</Text>
        <Text textAlign={'center'} pb={2}>
          Issue Opened: {new Date(data?.createdAt).toDateString()}
        </Text>
      </Box>
    </>
  )
}

export default IssuePage
