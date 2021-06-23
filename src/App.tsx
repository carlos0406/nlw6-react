import { ThemeProvider } from 'styled-components'
import { Home } from './pages/Home'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { NewRoom } from './pages/NewRoom'
import { Room } from './pages/Room'
import GlobalStyle from './styles/global'
import Theme from './styles/themes/theme'
import Dark from './styles/themes/dark'
import { AuthContextProvider } from './context/AuthCxt'
import { SwitchTheme } from './components/Switch'
import usePersistedState from './hooks/usePersistedState'
import { Header } from './styles/pages/home'

function App() {
  const [theme, setTheme] = usePersistedState('theme', Theme)
  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? Theme : Dark)
  }
  return (
    <ThemeProvider theme={theme}>
      <Header>
        <SwitchTheme toggleTheme={toggleTheme} />
      </Header>
      <GlobalStyle />
      <BrowserRouter>
        <AuthContextProvider>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/rooms/new" component={NewRoom} />
            <Route path="/rooms/:id" component={Room} />
          </Switch>
        </AuthContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
