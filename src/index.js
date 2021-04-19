import { D1ThemeProvider } from 'providers/theme'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <D1ThemeProvider>
      <App />
    </D1ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
