import styled from 'styled-components'
import { icons } from '../../assets/icons'

const SvgStyled = styled.svg`
  fill: white;
  width: 30px;
  height: 30px;
`

export const D1Icon = ({ children, ...props }) => {
  return <SvgStyled {...props}>{icons[children]}</SvgStyled>
}
