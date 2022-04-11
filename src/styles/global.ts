import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
:root{
  --gray-900: #090B09;
  --gray-600: #6E758D;
  --gray-500: #7F9183;
  --gray-10: #FAFAFF;
  --green: #586F6B;
  --orange: #CF5C36;
  --yellow: #D1DA6C;
  --red: #C0180C;
  --blue: #73ABE7;
}

html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
 @media (max-width: 67.5em){
   font-size: 93.75%;
 }

 @media (max-width: 36em){
   font-size: 87.5%;
 }
  
 @media (max-width: 30em) {
  html {
    font-size: 80%;
  }
}
}

body, html {
  scroll-behavior: smooth; 
  -webkit-font: antialiased;
  height: 100%;
  margin: 0;  
}

body {
 background: var(--gray-10);
 color: var(--gray-900);
 line-height: 1.75rem; 
 transition: all 0.2s ease-in-out;
}

body, input, textarea,select, button {
 font-family: 'Poppins', Arial, Helvetica, 'Ubuntu', sans-serif; 
 font-weight: 400;
 font-size: 16px;
}

h1, h2, h3, h4, h5, h6, strong {
 font-weight: 700; 
}

button{
  all: unset;
  cursor: pointer;
}

a {
 text-decoration: none;
 color: inherit;
 cursor: pointer;  
}
a:focus,
button:focus,
input:focus,
select:focus,
textarea:focus {
  box-shadow: none;
  outline: var(--gray-500) solid 1px;
  outline-offset: .05em;
}
`
export default GlobalStyle
