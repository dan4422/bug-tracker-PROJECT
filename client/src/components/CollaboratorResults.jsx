import React from 'react'
import { PlusSquareIcon } from '@chakra-ui/icons'
import { useSelector } from 'react-redux'
import { Box, Button, Collapse, useDisclosure } from '@chakra-ui/react'

function CollaboratorResults() {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <>
      <Collapse in={!isOpen} animateOpacity>
        <Button w="100%" leftIcon={<PlusSquareIcon />} variant="outline" colorScheme="green" onClick={onToggle}>
          Add Collaborators
        </Button>
      </Collapse>
    </>
  )
}

export default CollaboratorResults
