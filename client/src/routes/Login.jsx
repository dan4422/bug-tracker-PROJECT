// CHAKRA:
import { Box, Image, Text } from '@chakra-ui/react'

import FormLogin from '../components/FormLogin'

// IMGS:
import logo from '../imgs/logoAndShadow.png'

// LOGIN:
export default function Login() {
  return (
    <Box className="App" w="100%" h="100vh">
      <Box my={10} mx="auto" w="95%" maxW="400px">
        <Image width={'100%'} src={logo} alt="" />
        <FormLogin />
      </Box>
    </Box>
  )
}
