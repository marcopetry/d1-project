import { D1Box } from '@components/Box/Box'
import { memo } from 'react'
import styled from 'styled-components'
import { flexbox, space } from 'styled-system'

const Flex = styled(D1Box)`
  display: flex;
  ${flexbox}
  ${space}
`
export const D1Flex = memo((props) => <Flex {...props} />)
