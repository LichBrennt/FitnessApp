import React from 'react'
import ReactDOM from 'react-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import App from './components/App'


const container = document.getElementById('root')

// ReactDOM.render(__Que__, __donde__)
ReactDOM.render(<App/>, container)
