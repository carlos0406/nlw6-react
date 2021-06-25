import { Container, Content, QuestionsList } from '../styles/pages/room'
import { useHistory, useParams } from 'react-router-dom'
import logoImg from '../assets/logo.svg'
import { Button } from '../components/Button'
import { RoomCode } from '../components/RoomCode'
import { Question } from '../components/Question'
import { useRoom } from '../hooks/useRoom'
import { database } from '../services/firebase'
import { IconButton } from '../styles/pages/iconButton'
import deleteImg from '../assets/delete.svg'
import checkImg from '../assets/check.svg'
import answerImg from '../assets/answer.svg'
type RoomParams = {
  id: string
}
export function AdminRoom() {
  const params = useParams<RoomParams>()
  const { id } = params
  const { title, questions } = useRoom(id)
  const history = useHistory()
  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm('tem certeza que deseja excluir essa pergunta ?')) {
      await database.ref(`rooms/${id}/questions/${questionId}`).remove()
    }
  }
  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database
      .ref(`rooms/${id}/questions/${questionId}`)
      .update({ isAnsewared: true })
  }

  async function handleHighlighQuestion(questionId: string) {
    await database
      .ref(`rooms/${id}/questions/${questionId}`)
      .update({ isHighlighted: true })
  }
  async function handleDeleteRoom() {
    if (window.confirm('tem certeza que deseja encerrar a sala ?')) {
      await database.ref(`rooms/${id}`).update({
        endedAt: new Date()
      })
    }
    history.push('/')
  }
  return (
    <Container>
      <header>
        <Content>
          <img src={logoImg} alt="Logo letmeask" />
          <div>
            <RoomCode code={id} />
            <Button type="button" isOutlined onClick={() => handleDeleteRoom()}>
              Encerrar sala
            </Button>
          </div>
        </Content>
      </header>
      <main>
        <div className="header">
          <h1>Sala: {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>

        <QuestionsList>
          {questions.map(question => {
            return (
              <Question
                key={question.id}
                author={question.author}
                content={question.content}
                isAnsewared={question.isAnsewared}
                isHighlighted={question.isHighlighted}
              >
                {!question.isAnsewared && (
                  <>
                    <IconButton
                      type="button"
                      onClick={() => handleCheckQuestionAsAnswered(question.id)}
                    >
                      <img
                        src={checkImg}
                        alt="Marcar pergunta como respondida"
                      />
                    </IconButton>

                    <IconButton
                      type="button"
                      onClick={() => handleHighlighQuestion(question.id)}
                    >
                      <img
                        src={answerImg}
                        alt="Colocar a pergunta em destaque"
                      />
                    </IconButton>
                  </>
                )}

                <IconButton
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <img src={deleteImg} alt="Remover pergunta da listagem" />
                </IconButton>
              </Question>
            )
          })}
        </QuestionsList>
      </main>
    </Container>
  )
}
