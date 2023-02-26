import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { HashRouter } from 'react-router-dom'
import { PromiseConfirmationContextProvider } from 'react-promise-confirmation-dialog'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <HashRouter>
      <PromiseConfirmationContextProvider>
        <App />
      </PromiseConfirmationContextProvider>
    </HashRouter>
  </React.StrictMode>,
)
