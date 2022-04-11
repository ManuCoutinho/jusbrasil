import React from 'react'
import ReactDOM from 'react-dom'
import { ToastContainer } from 'react-toastify'
import Home from './Home'
import GlobalStyle from './styles/global'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Home />
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById('root')
)
