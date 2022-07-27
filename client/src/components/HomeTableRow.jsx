import {
  Link as Anchor,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Td,
  Text,
  Tr,
  useDisclosure,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDeleteIssueMutation } from '../redux/services/issues'
import trashIcon from '../imgs/trashIcon.png'
import editIcon from '../imgs/editIcon.png'
import IssuesEdit from './IssuesEdit'
import ProjectEdit from './ProjectEdit'

// IMGS:

function HomeTableRow({ issue }) {
  const [deleteIssue] = useDeleteIssueMutation()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Tr key={issue.id}>
        <Td borderBottom="2px">
          <Anchor as={Link} to={`/projects/${issue.ProjectId}`}>
            {issue.Project.name}
          </Anchor>
        </Td>
        <Td borderBottom="2px">
          <Anchor as={Link} to={`/projects/${issue.ProjectId}/issues/${issue.id}`}>
            {issue.name}:{' '}
            {issue.description.length > 20 ? issue.description.substring(0, 25) + '...' : issue.description}
          </Anchor>
        </Td>
        <Td borderBottom="2px">{issue.User.username}</Td>
        <Td borderBottom="2px">{new Date(issue.createdAt).toDateString()}</Td>
        <Td borderBottom="2px">
          <Flex justifyContent={'flex-end'} gap={3} alignItems="center">
            <Text>{issue.priority}</Text>
            <Button size="sm">
              <Image width={5} h={5} src={editIcon} alt="" onClick={onOpen} ref={btnRef} />
            </Button>
            <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Edit {issue.name}</DrawerHeader>
                <DrawerBody>
                  <IssuesEdit issue={issue} />
                </DrawerBody>
                <DrawerFooter>
                  <Button variant="outline" mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
            <Button size="sm" onClick={() => deleteIssue({ projectId: issue.ProjectId, issueId: issue.id })}>
              <Image width={5} h={5} src={trashIcon} alt="" />
            </Button>
          </Flex>
        </Td>
      </Tr>
    </>
  )
}

export default HomeTableRow
