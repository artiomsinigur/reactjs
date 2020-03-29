import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from '../routers/AppRouter'
import 'normalize.css/normalize.css'
// Inject CSS into the DOM
import './styles/style.scss'

ReactDOM.render(<AppRouter />, document.getElementById('app'));