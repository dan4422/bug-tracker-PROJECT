import React from 'react'
import { Navigate } from 'react-router'
import { useGetCurrentUserQuery } from '../redux/services/user'

function Protected({ children }) {
  const { data, isUninitialized, isLoading, isFetching, isError, error } = useGetCurrentUserQuery()

  // checking
  if (isUninitialized || isLoading || isFetching || isError || error) {
    return null
    // return <Navigate to="/login" replace />
  }

  // checked & not logged in
  if (!data || data.error === 'unauthorized') {
    return <Navigate to="/login" replace />
  }

  // checked & logged in
  return children
}

export default Protected
