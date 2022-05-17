import React from 'react'
import ReactDOM from 'react-dom/client'

import RootWrapper from './globals/rootWrapper'
import './index.css'
import Routes from './globals/routes'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <RootWrapper>
      <Routes />
    </RootWrapper>
  </React.StrictMode>
)
