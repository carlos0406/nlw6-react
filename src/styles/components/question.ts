import styled from 'styled-components'

export const QuestionContainer = styled.div`
  border-radius: 0.5rem;
  box-shadow: 0 2px 3px ${props => props.theme.colors.shadow};
  background-color: ${props => props.theme.colors.questionbg};
  padding: 1.5rem;
  width: 100%;
  margin-top: 0.75rem;

  &.highlighted {
    background: #f4f0ff;
    border: 2px solid ${props => props.theme.colors.buttonlink};
  }

  &.ansewared {
    background: ${props => props.theme.colors.lightGray};
    color: ${props => props.theme.colors.disable};
  }
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;

    div {
      display: flex;
      gap: 0.5rem;
    }
  }
`
export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }
  span {
    margin-left: 0.5rem;
    color: ${props => props.theme.colors.text};
    font-size: 0.875rem;
  }
`
