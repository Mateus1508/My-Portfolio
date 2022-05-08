import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  background-color: aliceblue;
  overflow-x: hidden;
}

*, input, button {
  font-family: 'Roboto', sans-serif;
}

`