//https://api-d1-test.herokuapp.com/api/journey/

import React from 'react'
import { Fetch } from 'react-request'

export const DatasFilteredApi = ({ children, filterId }) => {
  return <Fetch url={`https://api-d1-test.herokuapp.com/api/journey/${filterId}`}>{children}</Fetch>
}
