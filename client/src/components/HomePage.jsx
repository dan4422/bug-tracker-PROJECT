// CHAKRA:
import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import { Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'

// REACT ROUTER:
import { Link } from 'react-router-dom'

// HOME PAGE:
export default function HomePage() {
  return (
    <Box p={5} w="100%">
      <Flex flexWrap="wrap" justifyContent="space-between" border="1px" borderColor="red">
        <Link to="/Issues">
          <Button>Add Issues</Button>
        </Link>
        <Heading fontSize={25} mr={120}>
          Home Dashboard
        </Heading>
        <Box></Box>
      </Flex>
      <Box border="1px" borderColor="red">
        <Flex flexWrap="wrap" gap="16px" justifyContent="space-evenly" border="1px" borderColor="red">
          <Box border="1px" borderColor="red">
            Graph
          </Box>
          <Box border="1px" borderColor="red">
            Chart1
          </Box>
          <Box border="1px" borderColor="red">
            Chart2
          </Box>
        </Flex>
      </Box>
      <Box border="1px" borderColor="red">
        <TableContainer>
          <Table variant="simple">
            <TableCaption>Bugsly</TableCaption>
            <Thead>
              <Tr>
                <Th>Project Name</Th>
                <Th>Issue Brief</Th>
                <Th>Created By</Th>
                <Th>Created Date</Th>
                <Th>Issue Priority</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>PetMates</Td>
                <Td>Cant figure out how to render pa...</Td>
                <Td>GerDawg420</Td>
                <Td>07/18/2022</Td>
                <Td>red</Td>
              </Tr>
              <Tr>
                <Td>JustToDoIt</Td>
                <Td>Data not linking to calander...</Td>
                <Td>DanDizzle44</Td>
                <Td>07/03/2022</Td>
                <Td>yellow</Td>
              </Tr>
              <Tr>
                <Td>Weather Box</Td>
                <Td>Redux issues...</Td>
                <Td>DeBoer753</Td>
                <Td>6/23/2022</Td>
                <Td>blue</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  )
}
