import { Container, Content } from '../styles/pages/home'
import { Button } from '../components/Button'
import logoImg from '../assets/logo.svg'
import illustrationImg from '../assets/illustration.svg'
import { Link } from 'react-router-dom'
export function NewRoom() {
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
          <h2>Criar uma nova sala</h2>
          <form>
            <input type="text" placeholder="Nome da sala" />
            <Button>Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente <Link to="/">Clique aqui</Link>
          </p>
        </Content>
      </main>
    </Container>
  )
}
