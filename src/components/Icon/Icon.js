import styled from 'styled-components'
import { layout } from 'styled-system'
import { theme } from 'utils/theme'
import { icons } from 'assets/icons'

const SvgStyled = styled.svg`
  fill: ${(props) => theme(`colors.${props.color || 'white'}`)};
  width: 30px;
  height: 30px;
  &:hover {
    fill: ${(props) => theme(`colors.${props.colorHover || 'blueDark'}`)};
    cursor: pointer;
  }
  ${layout}
`

export const D1Icon = ({ children, ...props }) => {
  return <SvgStyled {...props}>{icons[children]}</SvgStyled>
}
