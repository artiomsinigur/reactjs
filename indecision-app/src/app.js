import React from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './components/IndecisionApp'
import 'normalize.css/normalize.css'
// Inject CSS into the DOM
import './styles/style.scss'

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));