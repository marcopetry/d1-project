import { memo } from 'react'
import styled from 'styled-components'
import { flexbox } from 'styled-system'

const Flex = styled.div`
  display: flex;
  ${flexbox}
`
export const D1Flex = memo((props) => <Flex {...props} />)
