import React from 'react'
import ReactDOM from 'react-dom'
import { add, minus } from './utils'
import { isEmail } from 'validator'

console.log(isEmail('email@mail.com'))
console.log(add(2, 3))
console.log(minus(4, 3))
console.log('app.js')

const template = <p>paragraphe go</p>
ReactDOM.render(template, document.getElementById('app'))