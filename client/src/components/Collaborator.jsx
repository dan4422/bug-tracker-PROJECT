// CHAKRA:
import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  Wrap,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useGetCurrentUserQuery } from '../redux/services/user'

// IMGS:
import profileImg from '../imgs/profilePhoto.png'
import { mockData } from '../MockData'
import CollabProjects from './CollabProjects'

// COLLABORATORS:
export default function Collaborators({ project }) {
  const OverlayOne = () => <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) hue-rotate(90deg)" />
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = useState(<OverlayOne />)
  const { data } = useGetCurrentUserQuery()

  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const onSearch = (searchTerm) => {
    setValue(searchTerm)
    // our api to fetch the search result
  }
  return (
    <Box bg="white" p={5} w="100%" h="100%">
      <Box border="1px" borderColor="red" mb={5}>
        <Heading fontSize={25}>Collaborators</Heading>
      </Box>
      <CollabProjects />
    </Box>
  )
}
