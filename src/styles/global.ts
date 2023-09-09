import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}


:focus{
  outline: 0;
}

body{
  background: ${(props) => props.theme.background};
  color:${(props) => props.theme['base-text']};
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

body, input,textarea,button{
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;

  @media (max-width: 820px) {
    font-size: 87.5%;
  }
}

a{
  text-decoration: none;
}

/* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #858585 #FFFFFF;
}

/* Chrome, Edge and Safari */
*::-webkit-scrollbar {
  height: 10px;
  width: 10px;
}
*::-webkit-scrollbar-track {
  border-radius: 5px;
  background-color: #FFFFFF;
}

*::-webkit-scrollbar-track:hover {
  background-color: #B8C0C2;
}

*::-webkit-scrollbar-track:active {
  background-color: #B8C0C2;
}

*::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #858585;
}

*::-webkit-scrollbar-thumb:hover {
  background-color: #A3A3A3;
}

*::-webkit-scrollbar-thumb:active {
  background-color: #595959;
}
`
