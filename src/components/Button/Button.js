import styled from 'styled-components'

export const D1Button = styled.button`
  width: 200px;
  height: 40px;
  background: #117eff;
  border-radius: 5px;
  border-color: #117eff;
  color: white;
  font-weight: bold;
  font-size: 16px;

  &:hover {
    background-image: linear-gradient(to right, #00e1ff, #3fa8f4);
    border-color: #3fa8f4;
    cursor: pointer;
  }
`
