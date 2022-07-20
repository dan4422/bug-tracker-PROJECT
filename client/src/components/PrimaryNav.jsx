// CHAKRA:
import { Link as Anchor, Box, Container, Image, Text } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react'

// REACT ROUTER:
import { Link } from 'react-router-dom'

// IMGS:
import profileImg from '../imgs/profilePhoto.png'

// PRIMARY NAV:
export default function PrimaryNav() {
  const [navMediaQueryFlexed] = useMediaQuery('(max-width: 480px)')

  return (
    <Container
      border="1px"
      borderColor="red"
      margin={0}
      display="flex"
      flexDirection="column"
      minW={{ base: 150, lg: 220 }}
      maxW={{ base: 150, lg: 150 }}
      minH={'90vh'}
      p={0}
      bg="white"
      flexShrink="0"
    >
      <Box
        borderBottom="1px"
        borderColor="red"
        display="flex"
        justifyContent={'space-around'}
        alignItems={'center'}
        flexDirection={{ base: 'column', lg: 'row' }}
        textAlign={{ base: 'center', lg: 'left' }}
        py={2}
      >
        <Image width={70} maxW="50%" borderRadius="full" m={0} src={profileImg} alt="" />
        <Box maxW="100%" justifyContent={'center'}>
          <Text fontSize={17}>Myles D.</Text>
          <Text fontSize={13}>@DeBoer753</Text>
          <Text fontSize={13}>San Francisco, CA</Text>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" textAlign={'center'} maxW="100%">
        <Anchor as={Link} borderBottom="1px" borderColor="red" py={3} px={3} to="/">
          Home
        </Anchor>
        <Anchor as={Link} borderBottom="1px" borderColor="red" py={3} px={3} to="/projects">
          Projects
        </Anchor>
        <Anchor as={Link} borderBottom="1px" borderColor="red" py={3} px={3} to="/issues">
          Issues
        </Anchor>
        <Anchor as={Link} borderBottom="1px" borderColor="red" py={3} px={3} to="/collaborators">
          Collaborators
        </Anchor>
        <Anchor as={Link} borderBottom="1px" borderColor="red" py={3} px={3} to="/login">
          Login
        </Anchor>
        <Anchor as={Link} borderBottom="1px" borderColor="red" py={3} px={3} to="/register">
          Register
        </Anchor>
      </Box>
    </Container>
  )
}
