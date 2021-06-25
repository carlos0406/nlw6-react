import { ButtonHTMLAttributes } from 'react'

import styled from 'styled-components'
const PurpleButton = styled.button`
  height: 3rem;
  border-radius: 0.5rem;
  font-weight: 500;
  background: ${props => props.theme.colors.purple};
  &.outilined {
    background: #fff;
    border: 1px solid ${props => props.theme.colors.purple};
    color: ${props => props.theme.colors.purple};
  }
  color: ${props => props.theme.colors.textWhite};

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 0;
  transition: filter 0.2s;
  padding: 1rem 2rem;

  &:not(:disabled):hover {
    filter: brightness(0.8);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean
}
export function Button({ isOutlined = false, ...props }: ButtonProps) {
  return (
    <PurpleButton className={`${isOutlined ? 'outilined' : ''}`} {...props} />
  )
}
