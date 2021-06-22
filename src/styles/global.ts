import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: "border-box";
  
  }
  
  body{
    color:${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.background}
  }

  body,input,button,textarea{
    font: 400 1rem 'Roboto',sans-serif;
  }

  @media(max-width:1080px){
    html{
        font-size: 93.75%;  
    }
}
`
