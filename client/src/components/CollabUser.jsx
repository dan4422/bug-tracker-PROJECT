import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Image,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useUnassignUserToProjectMutation } from '../redux/services/collab'

function CollabUser({ user }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [unassignUser] = useUnassignUserToProjectMutation()
  const unassign = (ProjectId, UserId) => {
    const unassignData = {
      ProjectId,
      UserId,
    }
    unassignUser(unassignData)
      .unwrap()
      .then((data) => {
        setSuccess(data.success)
      })
      .catch((error) => {
        setError(error.data.error)
        onOpen()
      })
  }

  return (
    <Box bg="rgba(213, 213, 213, 0.682)" borderRadius="20px" w={200} textAlign="center">
      <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Error
            </AlertDialogHeader>
            <AlertDialogBody>{error}</AlertDialogBody>
            <AlertDialogFooter>
              <Button colorScheme="red" onClick={onClose} ml={3}>
                OK
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      <Image
        maxW="70%"
        maxH={'50%'}
        width={120}
        height={120}
        borderRadius={'50%'}
        src={user.User.profileImage}
        alt=""
        m={'0 auto'}
        my={3}
      />
      <Text>{user.User.username}</Text>
      <Text fontSize={13}>{user.User.email}</Text>
      <Text fontSize={13} mb={2}>
        {user.User.city} {user.User.state}
      </Text>
      <hr></hr>
      <Text>{user.User.Issues.length} Issues Created</Text>
      <hr></hr>
      <Text>{user.position}</Text>
      <hr></hr>
      <Text mb={1}>{user.role}</Text>
      {user.role === 'Admin' ? (
        ''
      ) : (
        <Button
          alignContent={'center'}
          alignItems="center"
          textAlign={'center'}
          onClick={() => unassign(user.ProjectId, user.UserId)}
          size="xs"
          color={'white'}
          bg="#F02D3A"
          variant="ghost"
          mb={1}
        >
          Unassign
        </Button>
      )}
    </Box>
  )
}

export default CollabUser
