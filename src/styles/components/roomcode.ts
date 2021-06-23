import styled from 'styled-components'

export const Button = styled.button`
  height: 2.5rem;
  border-radius: 0.5rem;
  overflow: hidden;

  background-color: #fff;
  border: 1px solid ${props => props.theme.colors.purple};
  cursor: pointer;
  display: flex;

  div {
    background-color: ${props => props.theme.colors.purple};
    padding: 0 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 1rem 0 0.875rem;
    font-size: 0.95rem;
    font-weight: 500;
    width: 15rem;
  }
`
