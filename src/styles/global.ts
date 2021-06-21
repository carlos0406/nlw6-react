import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: "border-box";
   
  
  }
  
  body{
    font:400 20px Roboto;
    width: 100vw;
    color:${props => props.theme.colors.black}
  }

  @media(max-width:1080px){
    html{
        font-size: 93.75%;  
    }
}
`
