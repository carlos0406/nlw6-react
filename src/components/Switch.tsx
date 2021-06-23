import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import Switch from 'react-switch'
type SwitchProps = {
  toggleTheme: () => void
}

export function SwitchTheme({ toggleTheme }: SwitchProps) {
  const { title } = useContext(ThemeContext)
  return (
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
  )
}
