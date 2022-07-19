import { Heading } from '@chakra-ui/react'
import React from 'react'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

const data = [
  { name: 'In Progress', value: 10 },
  { name: 'Finished', value: 8 },
  { name: 'To Start', value: 5 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

function HomePieChart1() {
  return (
    <>
      <Heading size="md" textAlign="center" my={2}>
        Status Levels by Project
      </Heading>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart width={400} height={100}>
          <Pie data={data} labelLine={false} label={renderCustomizedLabel} fill="#8884d8" dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend wrapperStyle={{ top: 0, left: 25 }} />
        </PieChart>
      </ResponsiveContainer>
    </>
  )
}

export default HomePieChart1
