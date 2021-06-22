import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
  aside {
    display: flex;
    flex: 7;
    background: ${props => props.theme.colors.purple};
    color: ${props => props.theme.colors.textWhite};
    flex-direction: column;
    justify-content: center;
    padding: 120px 80px;
    img {
      max-width: 320px;
    }

    strong {
      font: 700 2.2rem 'Poppins', sans-serif;
      line-height: 3rem;
      margin-top: 1rem;
    }

    p {
      font-size: 1.85rem;
      line-height: 2rem;
    }
  }
  main {
    flex: 8;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  align-items: stretch;
  text-align: center;
  > button {
    margin-top: 4rem;
    height: 3rem;
    border-radius: 0.5rem;
    font-weight: 500;
    background: ${props => props.theme.colors.red};
    color: ${props => props.theme.colors.textWhite};

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 0;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
    img {
      margin-right: 0.5rem;
    }
  }
  > img {
    align-self: center;
  }

  form {
    flex-direction: column;
    input {
      height: 3.2rem;
      border-radius: 0.5rem;
      text-align: center;
      border: 1px solid ${props => props.theme.colors.lightGray};
    }

    button {
      margin-top: 1rem;
    }

    button,
    input {
      width: 100%;
    }
  }
  p {
    font-size: 0.875rem;
    color: #737380;
    margin-top: 1rem;

    a {
      color: #e559f9;
      text-decoration: none;
    }
  }
  h2 {
    font-size: 1.5rem;
    margin: 4rem 0;
    font-family: 'Poppins', sans-serif;
  }
`

export const Separator = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colors.lightGray};
  margin: 32px 0;
  display: flex;
  align-items: center;
  &::before {
    content: '';
    flex: 1;
    height: 1px;
    background: ${props => props.theme.colors.lightGray};
    margin-right: 16px;
  }
  &::after {
    flex: 1;
    content: '';
    height: 1px;
    background: ${props => props.theme.colors.lightGray};
    margin-left: 16px;
  }
`
