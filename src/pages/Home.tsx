import { Container, Content, Separator } from '../styles/pages/home'
import { Button } from '../components/Button'
import { useHistory } from 'react-router-dom'
import logoImg from '../assets/logo.svg'
import illustrationImg from '../assets/illustration.svg'
import googleIcon from '../assets/google-icon.svg'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthCxt'

export function Home() {
  const { singInWithGoogle, user } = useContext(AuthContext)
  const history = useHistory()
  async function handleCreateRoom() {
    if (!user) {
      await singInWithGoogle()
    }
    history.push('/rooms/new')
  }
  return (
    <Container>
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração representando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p> Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <Content>
          <img src={logoImg} alt="Logo Letmeask" />
          <button onClick={handleCreateRoom}>
            <img src={googleIcon} alt="Logo do google" />
            Crie sua sala com o google
          </button>
          <Separator> Ou entre em uma sala</Separator>
          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <Button>Entrar na sala</Button>
          </form>
        </Content>
      </main>
    </Container>
  )
}
