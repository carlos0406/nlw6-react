import { ThemeProvider } from 'styled-components'
import { Home } from './pages/Home'
import { Route, BrowserRouter } from 'react-router-dom'
import { NewRoom } from './pages/NewRoom'
import GlobalStyle from './styles/global'
import theme from './styles/themes/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" exact component={NewRoom} />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
