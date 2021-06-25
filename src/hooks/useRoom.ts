import { useEffect, useState } from 'react'
import { database } from '../services/firebase'
import { useAuth } from './useAuth'
type Question = {
  id: string
  author: {
    name: string
    avatar: string
  }
  content: string
  isHighlighted: boolean
  isAnsewared: boolean
  likeCount: number
  likeId: string
}
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
    likes: Record<
      string,
      {
        authorId: string
      }
    >
  }
>
export function useRoom(roomId: string) {
  const { user } = useAuth()
  const [questions, setQuestions] = useState<Question[]>([])
  const [title, setTitle] = useState('')
  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`)
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
            isAnsewared: value.isAnsewared,
            likeCount: Object.values(value.likes ?? {}).length,
            likeId: Object.entries(value.likes ?? {}).find(
              ([key, like]) => like.authorId === user?.id
            )?.[0]
          }
        }
      )
      setQuestions(parsedQuestions)
      setTitle(databaseRoom.title)
    })
    return () => {
      roomRef.off('value')
    }
  }, [roomId, user?.id])
  return { questions, title }
}
