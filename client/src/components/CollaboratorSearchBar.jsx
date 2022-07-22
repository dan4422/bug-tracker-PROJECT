import React from 'react'
import { PlusSquareIcon } from '@chakra-ui/icons'
import { useSelector } from 'react-redux'
import { Box, Button, Collapse, Heading, useDisclosure } from '@chakra-ui/react'

function CollaboratorSearchBar() {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <>
      <Button w="100%" leftIcon={<PlusSquareIcon />} variant="outline" colorScheme="green" onClick={onToggle}>
        Add Collaborators
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Box>
          <Heading>Hey</Heading>
        </Box>
      </Collapse>
    </>
  )
}

export default CollaboratorSearchBar
