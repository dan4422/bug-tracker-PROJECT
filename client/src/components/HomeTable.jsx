import React from 'react'
import {
  Box,
  Button,
  Flex,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import HomeTableRow from './HomeTableRow'

function HomeTable() {
  return (
    <Box border="1px" borderColor="red" w="100%" position="relative">
      <TableContainer bg="lightgrey" w="100%" position="relative">
        <Table variant="simple">
          <TableCaption>Bugsly</TableCaption>
          <Thead>
            <Tr>
              <Th>Project Name</Th>
              <Th>Issue Brief</Th>
              <Th>Created By</Th>
              <Th>Created Date</Th>
              <Th textAlign={'right'}>Issue Priority</Th>
            </Tr>
          </Thead>
          <Tbody>
            <HomeTableRow />
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default HomeTable
