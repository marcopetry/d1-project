import { memo } from 'react'
import imgLogo from '../../assets/images/logotipo.png'

import styled from 'styled-components'

const SideBar = styled.div`
  top: 0px;
  left: 0px;
  width: 71px;
  height: 100%;
  position: fixed;
  background: #1a1731 0% 0% no-repeat;
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`

export const D1SideBar = memo(({ children, ...props }) => {
  return (
    <SideBar {...props}>
      <img src={imgLogo} alt="D1" width={50} />
      {children}
    </SideBar>
  )
})
