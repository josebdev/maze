import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { MazeProvider } from 'context/mazeContext'

ReactDOM.render(
  <React.StrictMode>
    <MazeProvider>
      <App />
    </MazeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
