// CHAKRA:
import { Box, Button, FormControl, FormLabel, Input, Select } from '@chakra-ui/react'

// ISSUE:
export default function Issue() {
  return (
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
