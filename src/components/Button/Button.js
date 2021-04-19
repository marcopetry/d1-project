import { theme } from 'utils/theme'
import styled from 'styled-components'

export const D1Button = styled.button`
  width: 200px;
  height: 40px;
  background: ${theme('colors.blueDark')};
  border-radius: 5px;
  border-color: ${theme('colors.blueDark')};
  color: white;
  font-weight: bold;
  font-size: 16px;

  &:hover {
    background-image: linear-gradient(to right, ${theme('colors.blueLight')}, ${theme('colors.blueMedium')});
    border-color: ${theme('colors.blueMedium')};
    cursor: pointer;
  }
`
