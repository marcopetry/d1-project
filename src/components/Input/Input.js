import { D1Box } from '@components/Box/Box'
import { D1Flex } from '@components/Flex/Flex'
import { D1Icon } from '@components/Icon/Icon'
import styled from 'styled-components'

export const BoxStyled = styled(D1Box)`
  height: 35px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #cccfde;
  border-radius: 5px;
  opacity: 1;
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 2px;
`

export const InputStyled = styled.input`
  border: none !important;
  width: 100%;
  height: 35px;
  margin-left: 10px;
  padding: 5px;
  background-color: transparent;
  font-size: 14px;

  &:focus {
    border: none !important;
    outline: none;
  }
`

export const D1Input = ({ leftIcon, ...props }) => {
  return (
    <BoxStyled>
      {leftIcon && (
        <D1Icon color="black" mr={15} width={20} height={20}>
          {leftIcon}
        </D1Icon>
      )}
      <D1Flex>
        <InputStyled {...props} />
      </D1Flex>
    </BoxStyled>
  )
}
