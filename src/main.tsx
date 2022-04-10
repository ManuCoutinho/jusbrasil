import React from 'react'
import ReactDOM from 'react-dom'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './components/services/QueryClient'
import Home from './Home'
import GlobalStyle from './styles/global'

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Home />
      <GlobalStyle />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
