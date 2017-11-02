import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './containers/App'

ReactDOM.render(
  <AppContainer>
    <App/>
  </AppContainer>
  , document.getElementById('app'));
  
// 热更新
if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default
    ReactDOM.render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      document.getElementById('app')
    )
  })
}
