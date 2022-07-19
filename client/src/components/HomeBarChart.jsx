import { Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const data = [
  {
    name: 'Project A',
    low: 4000,
    medium: 2400,
    high: 2400,
  },
  {
    name: 'Project B',
    low: 3000,
    medium: 1398,
    high: 2210,
  },
  {
    name: 'Project C',
    low: 2000,
    medium: 9800,
    high: 2290,
  },
  {
    name: 'Project D',
    low: 2780,
    medium: 3908,
    high: 2000,
  },
  {
    name: 'Project E',
    low: 1890,
    medium: 4800,
    high: 2181,
  },
  {
    name: 'Project F',
    low: 2390,
    medium: 3800,
    high: 2500,
  },
  {
    name: 'Project G',
    low: 3490,
    medium: 4300,
    high: 2100,
  },
]

function HomeBarChart() {
  return (
    <>
      <Heading size="md" textAlign="center" my={2}>
        Issue Priority Levels by Project
      </Heading>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          width={800}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="low" stackId="a" fill="#51A3A3" />
          <Bar dataKey="medium" stackId="a" fill="#FFB20F" />
          <Bar dataKey="high" stackId="a" fill="#DB5A42" />
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}

export default HomeBarChart
