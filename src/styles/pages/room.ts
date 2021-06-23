import styled from 'styled-components'
export const Container = styled.div`
  header {
    padding: 1.5rem;
    border-bottom: 1px solid #e2e2e2;
  }

  main {
    max-width: 800px;
    margin: 0 auto;
    form {
      textarea {
        width: 100%;
        padding: 1rem;
        border: 0;
        border-radius: 0.5rem;
        box-shadow: 0 2px 12px ${props => props.theme.colors.shadow};
        resize: vertical;
        min-height: 12rem;
      }

      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1rem;
      }
    }

    > div {
      margin: 2rem 0 1.5rem;
      display: flex;
      align-items: center;

      h1 {
        font-family: 'Poppins';
        font-size: 1.5rem;
        color: ${props => props.theme.colors.text};
      }
      span {
        margin-left: 1rem;
        background-color: #e559f9;
        border-radius: 9999px;
        padding: 0.5rem 1rem;
        font-weight: 500;
        font-size: 0.95rem;
      }
    }
  }
`
export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > img {
    max-height: 3rem;
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
    font-weight: 500;
  }
`
export const ButtonContent = styled.span`
  font-size: 0.875rem;
  color: #737380;
  font-weight: 500;
  button {
    background: transparent;
    border: 0;
    color: ${props => props.theme.colors.buttonlink};
    text-decoration: underline;
    font-size: 0.975rem;
    font-weight: 500;
  }
`
