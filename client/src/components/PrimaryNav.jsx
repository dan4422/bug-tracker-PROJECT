import { Link } from 'react-router-dom'
import { Box, Container, Text } from '@chakra-ui/react'

export default function PrimaryNav() {
  return (
    <Container>
      <Box>
        <img src="" alt="" />
        <Box>
          <Text>Name</Text>
          <Text>Username</Text>
          <Text>Location</Text>
        </Box>
      </Box>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/issues">Issues</Link>
      <Link to="/collaborators">Collaborators</Link>
    </Container>
  )
}
