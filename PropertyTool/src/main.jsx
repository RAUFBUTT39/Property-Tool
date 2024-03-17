import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@mui/material'
import theme from './Theme/index.jsx'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import { store } from './Redux/store.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Provider store={store}>
      <App />
      </Provider>
    </BrowserRouter>
    </ThemeProvider>
  // </React.StrictMode>,
)
