// CHAKRA:

import { AspectRatio, Box, Button, FormControl, FormLabel, Heading, Input, Select } from '@chakra-ui/react'

import { useState } from 'react'

import { Box, Button, FormControl, FormLabel, Input, Select } from '@chakra-ui/react'


// ISSUE:
export default function Issue() {
  return (

    <AspectRatio ratio={16 / 9}>
      <Box>
        <div>
          <Heading textAlign="center">Issues</Heading>
          <form>
            <FormControl>
              <FormLabel>
                <label>Issue</label>
                <Input type="text" />
                <label>Description</label>
                <Input type="text" />
                <label>Priority</label>
                <Select>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </Select>
              </FormLabel>
            </FormControl>
            <Button type="submit" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              Add New Issue
            </Button>
          </form>
        </div>
      </Box>
    </AspectRatio>

    <Box border="1px" borderColor="red" w="100%" h="100%">
      <div>
        <h1>DashBoard</h1>
        <form>
          <FormControl>
            <FormLabel htmlFor="newBugDescription">
              <Input type="text" id="newBugDescription" />
              <label htmlFor="NewBugPriority">New Bug Priority:</label>
              <Select id="newBugPriority">
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </Select>
              <Button type="submit">Add New Bug</Button>
            </FormLabel>
          </FormControl>
        </form>
      </div>
    </Box>

  )
}
