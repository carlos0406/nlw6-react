import { ReactNode } from 'react'
import { QuestionContainer, UserInfo } from '../styles/components/question'
import cx from 'classnames'
type QuestionProps = {
  content: string
  children: ReactNode
  author: {
    name: string
    avatar: string
  }
  isAnsewared?: boolean
  isHighlighted?: boolean
}

export function Question({
  content,
  author,
  children,
  isHighlighted = false,
  isAnsewared = false
}: QuestionProps) {
  return (
    <QuestionContainer
      className={cx(
        '',
        { ansewared: isAnsewared },
        { highlighted: isHighlighted && !isAnsewared }
      )}
    >
      <p>{content}</p>
      <footer>
        <UserInfo>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </UserInfo>
        <div>{children}</div>
      </footer>
    </QuestionContainer>
  )
}
