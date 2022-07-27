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
} from '@chakra-ui/react'
import { useUnassignUserToProjectMutation } from '../redux/services/collab'

// IMGS:
import assignerIcon from '../imgs/assignerIcon.png'

function CollabUser({ data }) {
  const [unassignUser] = useUnassignUserToProjectMutation()
  const unassign = (ProjectId, UserId) => {
    const unassignData = {
      ProjectId,
      UserId,
    }
    unassignUser(unassignData)
      .unwrap()
      .then(() => {})
      .catch((error) => {})
  }

  return (
    <Box bg="rgba(213, 213, 213, 0.682)" borderRadius="20px" w={200} textAlign="center">
      <Image
        borderRadius="50%"
        border="4px"
        borderColor="rgba(178, 217, 100, 0.765)"
        maxW="70%"
        maxH={'50%'}
        width={120}
        height={120}
        src={data.User.profileImage}
        alt=""
        m={'0 auto'}
        my={3}
      />
      <Text>{data.User.username}</Text>
      <Text fontSize={13}>{data.User.email}</Text>
      <Text fontSize={13} mb={2}>
        {data.User.city}, {data.User.state}
      </Text>
      <Box>
        {data.role === 'Admin' ? (
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
              onClick={() => unassign(data.ProjectId, data.UserId)}
            >
              Unassign
            </Button>
          </Box>
        )}
      </Box>
      <Text borderBottom="1px" borderColor="white" w={'90%'} alignItems="center" margin={'0 auto'}></Text>
      <Text>4 contributions</Text>
      <Text borderBottom="1px" borderColor="white" w={'90%'} alignItems="center" margin={'0 auto'}></Text>
      <Text>{data.position}</Text>
      <Text borderBottom="1px" borderColor="white" w={'90%'} alignItems="center" margin={'0 auto'}></Text>
      <Text mb={2}>{data.role}</Text>
    </Box>
  )
}

export default CollabUser
