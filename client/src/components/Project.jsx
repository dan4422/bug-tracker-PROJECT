// CHAKRA:
import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
  StackDivider,
  Textarea,
  VStack,
} from '@chakra-ui/react'

// REACT:
import { useState } from 'react'

// PROJECT:

export function Project() {
  return (
    <>
      <Heading style={{ textAlign: 'center', color: 'white' }}>Project Dashboard</Heading>
      <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4}>
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input placeholder="Project name here." />
          <Stack spacing={5}></Stack>
          <FormLabel>Description</FormLabel>
          <Textarea placeholder="Write a description for your project here" />
          <FormLabel>Operational Status</FormLabel>
          <Select placeholder="Select option">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </FormControl>
        <Button h="2rem" size="lg">
          Submit
        </Button>
      </VStack>
    </>
  )
}
