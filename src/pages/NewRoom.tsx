import { Container, Content } from '../styles/pages/home'
import { Button } from '../components/Button'
import logoImg from '../assets/logo.svg'
import illustrationImg from '../assets/illustration.svg'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
export function NewRoom() {
  const { user } = useAuth()
  return (
    <Container>
      <aside>
        <div className="profile">
          <img src={user?.avatar} className="avatar" />
          <h1>
            Bem vindo, <br />
            {user?.name}
          </h1>
        </div>
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
