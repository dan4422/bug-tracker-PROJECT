// CHAKRA:
import { Box, Flex } from '@chakra-ui/react'

// REACT ROUTER:
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Login from './routes/Login'
import Register from './routes/Register'
import Projects from './routes/Projects'
import Issues from './routes/Issues'
import Collaborators from './routes/Collaborators'

// COMPONENTS:
import PrimaryNav from './components/PrimaryNav'
import SiteTitle from './components/SiteTitle'

// STYLING
import './App.css'

// APP:
export default function App() {
  return (
    <div className="App">
      <PrimaryNav />
      <Flex flexDirection={'column'} alignItems="center" w={'100vw'} gap="10px">
        <SiteTitle />
        <Box border="1px" borderColor="red" w="100%" h="100%">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/issues" element={<Issues />} />
            <Route path="/collaborators" element={<Collaborators />} />
          </Routes>
        </Box>
      </Flex>
    </div>
  )
}
