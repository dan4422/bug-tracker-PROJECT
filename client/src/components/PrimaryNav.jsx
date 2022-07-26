// CHAKRA:
import { Link as Anchor, Box, Container, Image, Skeleton, SkeletonCircle, SkeletonText, Text } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react'

// REACT ROUTER:
import { Link } from 'react-router-dom'
import { issuesApiSlice } from '../redux/services/issues'
import { projectsApiSlice } from '../redux/services/projects'

// IMGS:
import profileImg from '../imgs/profilePhoto.png'
import homeIcon from '../imgs/homeBlack.png'
import projectsIcon from '../imgs/projectsBlack.png'
import issuesIcon from '../imgs/issuesBlack.png'
import collabIcon from '../imgs/collaboratorsBlack.png'
import logoutIcon from '../imgs/logoutBlack.png'

// REDUX
import { useGetCurrentUserQuery, useLogoutMutation } from '../redux/services/user'

// PRIMARY NAV:
export default function PrimaryNav() {
  const [logout] = useLogoutMutation()
  const { data, isLoading } = useGetCurrentUserQuery()
  const handleLogout = () => {
    logout()
      .unwrap()
      .then((data) => {
        if (data.success) {
          window.location.reload()
          // projectsApiSlice.util.invalidateTags(['Project'])
          // issuesApiSlice.util.invalidateTags(['Issue'])
        }
      })
  }

  return (
    <Container
      margin={0}
      display="flex"
      flexDirection="column"
      minW={{ base: 150, lg: 220 }}
      maxW={{ base: 150, lg: 150 }}
      maxH={'100%'} // why does the navbar effect the main home container and not just nav
      h={'100%'}
      p={0}
      flexShrink="0"
      flexGrow={'0'}
    >
      <Box
        bg="white"
        borderRadius="5px"
        mb={3}
        display="flex"
        justifyContent={'space-around'}
        alignItems={'center'}
        flexDirection={{ base: 'column', lg: 'row' }}
        textAlign={{ base: 'center', lg: 'left' }}
        py={2}
      >
        {isLoading ? (
          <>
            <SkeletonCircle size="70" width={70} maxW="50%" />
            <SkeletonText noOfLines={3} spacing="4" width={'50%'} />
          </>
        ) : (
          <>
            <ProfileImage />
            <Box maxW="100%" justifyContent={'center'}>
              <Text fontSize={17}>{data?.username}</Text>
              <Text fontSize={13}>
                {data?.first_name} {data?.last_name}
              </Text>
              <Text fontSize={13}>
                {data?.city}
                {data ? ', ' : ''}
                {data?.state}
              </Text>
            </Box>
          </>
        )}
      </Box>
      <Box bg="white" borderRadius="5px" display="flex" flexDirection="column" textAlign={'center'} maxW="100%">
        <Anchor
          as={Link}
          _hover={{ bg: 'rgba(209, 255, 118, 0.64)' }}
          m={1}
          borderRadius="10px"
          color="black"
          display="flex"
          justifyContent={'flex-start'}
          gap={2}
          alignItems="center"
          py={3}
          px={3}
          to="/"
        >
          <Image width={5} h={5} src={homeIcon} alt="" />
          Home
        </Anchor>
        <Anchor
          as={Link}
          _hover={{ bg: 'rgba(209, 255, 118, 0.64)' }}
          m={1}
          borderRadius="10px"
          color="black"
          display="flex"
          justifyContent={'flex-start'}
          gap={2}
          alignItems="center"
          py={3}
          px={3}
          to="/projects"
        >
          <Image width={5} h={5} src={projectsIcon} alt="" />
          Create Project
        </Anchor>
        <Anchor
          as={Link}
          _hover={{ bg: 'rgba(209, 255, 118, 0.64)' }}
          m={1}
          borderRadius="10px"
          color="black"
          display="flex"
          justifyContent={'flex-start'}
          gap={2}
          alignItems="center"
          py={3}
          px={3}
          to="/issues"
        >
          <Image width={5} h={5} src={issuesIcon} alt="" />
          Report Issue
        </Anchor>
        <Anchor
          as={Link}
          _hover={{ bg: 'rgba(209, 255, 118, 0.64)' }}
          m={1}
          borderRadius="10px"
          color="black"
          display="flex"
          justifyContent={'flex-start'}
          gap={2}
          alignItems="center"
          py={3}
          px={3}
          to="/collaborators"
        >
          <Image width={5} h={5} src={collabIcon} alt="" />
          Collaborators
        </Anchor>
        <Anchor
          _hover={{ bg: 'rgba(209, 255, 118, 0.64)' }}
          m={1}
          borderRadius="10px"
          color="black"
          display="flex"
          justifyContent={'flex-start'}
          gap={2}
          alignItems="center"
          onClick={() => handleLogout()}
          py={3}
          px={3}
        >
          <Image width={5} h={5} src={logoutIcon} alt="" />
          Logout
        </Anchor>
        {/* <Anchor
          as={Link}
          _hover={{ bg: 'green' }}
          m={1}
          borderRadius="10px"
          color="black"
          display="flex"
          justifyContent={'flex-start'}
          gap={2}
          py={3}
          px={3}
          to="/comment"
        >
          Comments
        </Anchor> */}
      </Box>
    </Container>
  )
}
