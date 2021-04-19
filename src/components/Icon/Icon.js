import styled from 'styled-components'
import { layout } from 'styled-system'
import { icons } from '../../assets/icons'

const SvgStyled = styled.svg`
  fill: ${(props) => props.color || 'white'};
  width: 30px;
  height: 30px;
  &:hover {
    fill: ${(props) => props.colorHover || '#117EFF'};
    cursor: pointer;
  }
  ${layout}
`

export const D1Icon = ({ children, ...props }) => {
  return <SvgStyled {...props}>{icons[children]}</SvgStyled>
}
