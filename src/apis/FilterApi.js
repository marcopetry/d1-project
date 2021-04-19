import React from 'react'
import { Fetch } from 'react-request'

export const FilterApi = ({ children }) => {
  return (
    <Fetch url="https://api-d1-test.herokuapp.com/api/filter" cacheResponse>
      {children}
    </Fetch>
  )
}
