import React, { useState } from 'react'

import { Box, Flex } from '@chakra-ui/react'

import { ResponsiveContainer } from 'recharts'
// REDUX
import { Link } from 'react-router-dom'

// CSS
import './HomePage.module.css'

// REACT ROUTER:
import HomeBarChart from './HomeBarChart'
import HomePieChart1 from './HomePieChart1'
import HomePieChart2 from './HomePieChart2'
import HomeTable from './HomeTable'

// HOME PAGE:
export default function HomePage() {
  return (
    <Flex gap="10px" flexDirection="column">
      <Box borderRadius="5px">
        <Flex flexWrap="wrap" justifyContent="space-evenly">
          <Box bg="rgba(213, 213, 213, 0.682)" width={{ base: '100%', sm: '100%', md: '50%' }}>
            <HomeBarChart />
          </Box>
          <Box bg="rgba(213, 213, 213, 0.682)" maxW={'100%'} width={{ base: '100%', sm: '100%', md: '25%' }}>
            <HomePieChart1 />
          </Box>
          <Box bg="rgba(213, 213, 213, 0.682)" maxW={'100%'} width={{ base: '100%', sm: '100%', md: '25%' }}>
            <HomePieChart2 />
          </Box>
        </Flex>
      </Box>
      <Box borderRadius="5px" mt={2} w="100%" position="relative">
        <HomeTable />
      </Box>
    </Flex>
  )
}
