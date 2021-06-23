import {
  ButtonContent,
  Container,
  Content,
  UserInfo
} from '../styles/pages/room'
import { useParams } from 'react-router-dom'
import logoImg from '../assets/logo.svg'
import { Button } from '../components/Button'
import { RoomCode } from '../components/RoomCode'
import { FormEvent, useEffect, useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { database } from '../services/firebase'
type RoomQuestions = Record<
  string,
  {
    author: {
      name: string
      avatar: string
    }
    content: string
    isHighlighted: boolean
    isAnsewared: boolean
  }
>

type Questions = {
  id: string
  author: {
    name: string
    avatar: string
  }
  content: string
  isHighlighted: boolean
  isAnsewared: boolean
}
type RoomParams = {
  id: string
}
export function Room() {
  const [newQuestion, setNewQuestion] = useState('')
  const params = useParams<RoomParams>()
  const { id } = params
  const { user, singInWithGoogle } = useAuth()
  const [questions, setQuestions] = useState<Questions[]>([])
  const [title, setTitle] = useState<string>('')
  useEffect(() => {
    const roomRef = database.ref(`rooms/${id}`)

    roomRef.on('value', room => {
      const databaseRoom = room.val()
      const databaseQuestions: RoomQuestions = databaseRoom.questions ?? {}
      const parsedQuestions = Object.entries(databaseQuestions).map(
        ([key, value]) => {
          return {
            id: key,
            content: value.content,
            author: value.author,
            isHighlighted: value.isHighlighted,
            isAnsewared: value.isAnsewared
          }
        }
      )
      setQuestions(parsedQuestions)
      setTitle(databaseRoom.title)
    })
  }, [id])
  async function handleSendQuestion(e: FormEvent) {
    e.preventDefault()
    if (newQuestion.trim() === '') {
      return
    }

    if (!user) {
      throw new Error('Você precisa estar logado')
    }
    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar
      },
      isHighlighted: false,
      isAnsewared: false
    }

    await database.ref(`rooms/${id}/questions`).push(question)
    setNewQuestion('')
  }
  return (
    <Container>
      <header>
        <Content>
          <img src={logoImg} alt="Logo letmeask" />
          <RoomCode code={id} />
        </Content>
      </header>
      <main>
        <div>
          <h1>Sala: {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>
        <form onSubmit={handleSendQuestion}>
          <textarea
            value={newQuestion}
            onChange={e => setNewQuestion(e.target.value)}
            placeholder="O que você quer perguntar?"
          />
          <div>
            {user ? (
              <UserInfo>
                <img src={user.avatar} alt="Foto do usuario" />
                <span>{user.name}</span>
              </UserInfo>
            ) : (
              <ButtonContent>
                Para enviar uma pergunta,{' '}
                <button type="button" onClick={singInWithGoogle}>
                  faça seu login
                </button>
              </ButtonContent>
            )}
            <Button type="submit" disabled={!user}>
              Faça sua pergunta
            </Button>
          </div>
        </form>
      </main>
    </Container>
  )
}
