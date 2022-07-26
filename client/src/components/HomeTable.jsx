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
import { useGetAllIssuesQuery } from '../redux/services/issues'
import HomeTableRow from './HomeTableRow'

function HomeTable() {
  const { data, isError, error } = useGetAllIssuesQuery()
  const issues = data?.map((data) => data.Issues)
  return (
    <Box w="100%" position="relative">
      <TableContainer bg="rgba(213, 213, 213, 0.682)" borderRadius="5px" w="100%" p={2} position="relative">
        <Table variant="simple">
          <TableCaption>Bugsly</TableCaption>
          <Thead>
            <Tr>
              <Th borderBottom="2px">Project Name</Th>
              <Th borderBottom="2px">Issue Brief</Th>
              <Th borderBottom="2px">Created By</Th>
              <Th borderBottom="2px">Created Date</Th>
              <Th borderBottom="2px" textAlign={'right'}>
                Issue Priority
              </Th>
            </Tr>
          </Thead>
          <Tbody>{issues?.map((data) => data.map((data) => <HomeTableRow key={data.id} issue={data} />))}</Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default HomeTable
