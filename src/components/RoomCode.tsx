import copyImg from '../assets/copy.svg'
import { Button } from '../styles/components/roomcode'

type RoomCodeProps = {
  code?: string
}

export function RoomCode(props: RoomCodeProps) {
  function copyCodeToClipboard() {
    navigator.clipboard.writeText(props.code)
  }

  return (
    <Button type="button" onClick={copyCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copiar roomcode" />
      </div>
      <span> Sala {props.code}</span>
    </Button>
  )
}
