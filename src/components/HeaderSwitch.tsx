import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import Switch from 'react-switch'
import { Header } from '../styles/pages/home'
import ptBR from 'date-fns/locale/pt-BR'
import format from 'date-fns/format'
const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
  locale: ptBR
})
type SwitchProps = {
  toggleTheme: () => void
}

export function SwitchTheme({ toggleTheme }: SwitchProps) {
  const { title } = useContext(ThemeContext)
  return (
    <Header>
      <span>Clique para trocar de tema</span>

      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={30}
        handleDiameter={15}
        offColor="#fff"
        onColor="#000"
      />
      <div className="date">{currentDate}</div>
    </Header>
  )
}
