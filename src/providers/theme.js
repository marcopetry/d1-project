import React from 'react'

import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    almostBlack: '#1a1731',
    black: '#000',
    blueDark: '#117eff',
    blueLight: '#00e1ff',
    blueMedium: '#3fa8f4',
    darkGrey: '#9196AB',
    error: '#D190DD',
    info: '#3FA8F4',
    lightGrey: '#FAFBFF',
    mediumGrey: '#cccfde',
    orange: '#EBBD3E',
    success: '#35C667',
    warning: '#C1CA4F',
    white: '#fff',
  },
}

export const D1ThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
