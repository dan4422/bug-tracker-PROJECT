// CHAKRA:
import { Box, Text } from '@chakra-ui/react'
import SiteTitle from '../components/SiteTitle'

// COMPONENTS:
import FormRegister from '../components/FormRegister'
import SiteTitleLogin from '../components/SiteTitleLogin'

// REGISTER:
export default function Register() {
  return (
    <Box className="App" width="100%">
      <SiteTitleLogin />
      <Text px={4} pt={10} textAlign="center" fontSize="3xl">
        Register
      </Text>
      <Box mx="auto" w="100%" maxW="400px">
        <FormRegister />
      </Box>
    </Box>
  )
}

// ;<Box className="App" w="100%" h="100vh">
//   <SiteTitleLogin />
//   <Text px={4} pt={10} textAlign="center" fontSize="3xl">
//     Register
//   </Text>
//   <Box my={10} mx="auto" w="95%" maxW="400px">
//     <FormRegister />
//   </Box>
// </Box>
