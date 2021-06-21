// eslint-disable-next-line no-use-before-define
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalStyle from './styles/global'
import { ThemeProvider } from 'styled-components'
import './services/firebase'
import theme from './styles/themes/theme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
