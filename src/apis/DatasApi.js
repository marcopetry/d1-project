import React from 'react'
import { Fetch } from 'react-request'

export const DatasApi = ({ children }) => {
  return <Fetch url="https://api-d1-test.herokuapp.com/api/journey">{children}</Fetch>
}
