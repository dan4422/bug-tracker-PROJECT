import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Flex,
  Image,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useUnassignUserToProjectMutation } from '../redux/services/collab'

// IMGS:
import assignerIcon from '../imgs/assignerIcon.png'

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
        borderRadius="50%"
        border="4px"
        borderColor="rgba(178, 217, 100, 0.765)"
        maxW="70%"
        maxH={'50%'}
        width={120}
        height={120}
        src={user.User.profileImage}
        alt=""
        m={'0 auto'}
        my={3}
      />
      <Text>{user.User.username.charAt(0).toUpperCase() + user.User.username.slice(1)}</Text>
      <Text fontSize={13}>
        {user.User.first_name.charAt(0).toUpperCase() + user.User.first_name.slice(1)}{' '}
        {user.User.last_name.charAt(0).toUpperCase() + user.User.last_name.slice(1)}
      </Text>
      <Text fontSize={13} mb={2}>
        {user.User.city.charAt(0).toUpperCase() + user.User.city.slice(1)}, {''}
        {user.User.state.charAt(0).toUpperCase() + user.User.state.slice(1)}
      </Text>
      <Box>
        {user.role === 'Admin' ? (
          <Flex justifyContent="center">
            <Image mb={2} width={6} h={6} src={assignerIcon} alt="" />
          </Flex>
        ) : (
          <Box>
            <Button
              pt={1}
              mb={2}
              borderRadius="20px"
              size="xs"
              bg="rgba(178, 217, 100, 0.765)"
              _hover={{ bg: 'rgba(217, 199, 0, 0.487)' }}
              onClick={() => unassign(user.ProjectId, user.UserId)}
            >
              Unassign
            </Button>
          </Box>
        )}
      </Box>
      <Text borderBottom="1px" borderColor="white" w={'90%'} alignItems="center" margin={'0 auto'}></Text>
      <Text>
        Issues Posted: <span style={{ fontWeight: '800', color: 'navy' }}>{user.User.Issues.length}</span>
      </Text>
      <Text borderBottom="1px" borderColor="white" w={'90%'} alignItems="center" margin={'0 auto'}></Text>
      <Text>{user.position}</Text>
      <Text borderBottom="1px" borderColor="white" w={'90%'} alignItems="center" margin={'0 auto'}></Text>
      <Text mb={2}>{user.role}</Text>
    </Box>
  )
}

export default CollabUser
