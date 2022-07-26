import { Box, Button, Image, Text } from '@chakra-ui/react'
import { useUnassignUserToProjectMutation } from '../redux/services/collab'

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
  }

  return (
    <Box bg="rgba(213, 213, 213, 0.682)" borderRadius="20px" w={200} textAlign="center">
      <Image w={150} maxW="80%" borderRadius="full" src={''} alt="" m={'0 auto'} mt={2} mb={2} />
      <Text>{data.User.username}</Text>
      <Text fontSize={13}>{data.User.email}</Text>
      <Text fontSize={13} mb={2}>
        {data.User.city} {data.User.state}
      </Text>
      <hr></hr>
      <Text>4 contributions</Text>
      <hr></hr>
      <Text>{data.position}</Text>
      <hr></hr>
      <Text mb={2}>{data.role}</Text>
      {data.role === 'Admin' ? (
        ''
      ) : (
        <Button onClick={() => unassign(data.ProjectId, data.UserId)} size="xs" bg="red">
          Unassign
        </Button>
      )}
    </Box>
  )
}

export default CollabUser
