import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Redbox from 'redbox-react'

// import App from './components/App'
import Grid from './components/Grid'

import './styles/screen.scss'
import './styles/grid.scss'
const root = document.getElementById('root')

const render = app => {
  ReactDOM.render(
    <AppContainer errorReporter={Redbox}>{app}</AppContainer>,
    root
  )
}
render(<Grid />)

// render(<App />)

// if (module.hot) {
//   module.hot.accept('./components/App', () => {
//     const NextApp = require('./components/App').default
//     render(<NextApp />)
//   })
// }
if (module.hot) {
  module.hot.accept('./components/Grid', () => {
    const NextApp = require('./components/Grid').default
    render(<NextApp />)
  })
}
