import {
  Box,
  Button,
  Divider,
  FormLabel,
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
  Select,
  Text,
  useDisclosure,
  Wrap,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useGetAllUserQuery } from '../redux/services/user'
import { useAssignUserToProjectMutation } from '../redux/services/collab'
import personIcon from '../imgs/personIcon.png'
import CollabUser from './CollabUser'

function CollabProject({ project }) {
  const { data } = useGetAllUserQuery()
  const [assignUser] = useAssignUserToProjectMutation()
  const OverlayOne = () => <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) hue-rotate(90deg)" />
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = useState(<OverlayOne />)
  const [userId, setUserId] = useState(null)
  const [position, setPosition] = useState('')
  const [value, setValue] = useState('')
  const onSearch = (searchTerm) => {
    setValue(searchTerm.username)
    const userId = searchTerm.id
    setUserId(userId)
  }

  const assignUsers = (ProjectId, UserId) => {
    const assignData = {
      ProjectId,
      UserId,
      position,
    }
    assignUser(assignData)
      .unwrap()
      .then(() => {
        onClose()
      })
  }

  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader style={{ textAlign: 'center' }}>Search User</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Enter Name" />
            {data &&
              data
                .filter((user) => {
                  const searchTerm = value.toLowerCase()
                  const username = user.username.toLowerCase()

                  return searchTerm && username.startsWith(searchTerm) && username !== searchTerm
                })
                .slice(0, 10)
                .map((user) => (
                  <div onClick={() => onSearch(user)} className="dropdown-row" key={user.username}>
                    {user.username}
                  </div>
                ))}
            <Divider />
            <FormLabel mt={2}>Position</FormLabel>
            <Select
              placeholder="Select Position"
              id="status"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            >
              <option value="Fullstack">Fullstack</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
            </Select>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => assignUsers(project.id, userId)} bg="green" mr={2}>
              Add
            </Button>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box border="1px" borderColor="red" mb={5}>
        <Box display={'flex'} justifyContent={'space-between'}>
          <Text fontSize={'20px'} fontWeight="bold" mb={2} fontFamily="Baloo Tamma 2', cursive">
            {project?.name}
          </Text>
          <Box display={'flex'} flexDir={'row'} gap={1} alignItems="center">
            <Button
              bg="green"
              fontSize={10}
              h={5}
              onClick={() => {
                setOverlay(<OverlayOne />)
                onOpen()
              }}
            >
              Search For Collaborator
            </Button>
            <Text>{project.Collabs.length}</Text>
            <Image width={5} borderRadius="full" m={0} src={personIcon} alt="" />
          </Box>
        </Box>
        <Wrap spacing={10}>{project && project.Collabs.map((user, i) => <CollabUser key={i} data={user} />)}</Wrap>
      </Box>
    </>
  )
}

export default CollabProject
