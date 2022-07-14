// CHAKRA:
import { Link as Anchor, Box, Container, Image, Text } from '@chakra-ui/react'

// REACT ROUTER:
import { Link } from 'react-router-dom'

// IMGS:
import profileImg from '../imgs/profilePhoto.png'

// PRIMARY NAV:
export default function PrimaryNav() {
  return (
    <Container
      border="1px"
      borderColor="red"
      margin={0}
      display="flex"
      flexDirection="column"
      maxW={220}
      minH={'100vh'}
      p={0}
    >
      <Box
        borderBottom="1px"
        borderColor="red"
        display="flex"
        justifyContent={'space-around'}
        alignItems={'center'}
        py={2}
      >
        <Image width={90} borderRadius="full" m={0} src={profileImg} alt="" />
        <Box justifyContent={'center'}>
          <Text>Name</Text>
          <Text>Username</Text>
          <Text>Location</Text>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" textAlign={'center'}>
        <Anchor as={Link} borderBottom="1px" borderColor="red" py={3} to="/">
          Home
        </Anchor>
        <Anchor as={Link} borderBottom="1px" borderColor="red" py={3} to="/login">
          Login
        </Anchor>
        <Anchor as={Link} borderBottom="1px" borderColor="red" py={3} to="/register">
          Register
        </Anchor>
        <Anchor as={Link} borderBottom="1px" borderColor="red" py={3} to="/projects">
          Projects
        </Anchor>
        <Anchor as={Link} borderBottom="1px" borderColor="red" py={3} to="/issues">
          Issues
        </Anchor>
        <Anchor as={Link} borderBottom="1px" borderColor="red" py={3} to="/collaborators">
          Collaborators
        </Anchor>
      </Box>
    </Container>
  )
}
