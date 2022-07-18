// CHAKRA:
import { Box, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Select, Stack } from '@chakra-ui/react'

// REACT:
import { useState } from 'react'

// PROJECT:
export default function Project() {
  return (
    <FormControl isRequired>
      <FormLabel>Project Name</FormLabel>
      <Input placeholder="Enter a name" />
      <Stack spacing={3}>
        <Input variant="flushed" placeholder="Flushed" />
      </Stack>
    </FormControl>
  )
}
