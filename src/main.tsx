import React from 'react'
import ReactDOM from 'react-dom'
import Home from './Home'
import GlobalStyle from './styles/global'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
)
