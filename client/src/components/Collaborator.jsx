// CHAKRA:
import { Box, Image, Text } from '@chakra-ui/react'
// IMGS:
import collabIcon from '../imgs/collaboratorsBlack.png'

// COMPONENTS:
import CollabProjects from './CollabProjects'

// COLLABORATORS:
export default function Collaborators() {
  return (
    <Box bg="white" borderRadius="5px" p={5} w="100%" h="100%">
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
        <Image width={8} h={8} src={collabIcon} alt="" />
        <Text fontSize={'25px'} pt={1} fontWeight="bold" fontFamily="Baloo Tamma 2', cursive">
          Collaborators
        </Text>
      </Box>
      <CollabProjects />
    </Box>
  )
}
