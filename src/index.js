import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import configureStore from '@/store'
// 主页面
import App from './App'

const stores = configureStore()

ReactDOM.render(
  <AppContainer>
    <App stores={stores}/>
  </AppContainer>
  , document.getElementById('app'))

// 热更新
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    ReactDOM.render(
      <AppContainer>
        <NextApp stores={stores}/>
      </AppContainer>,
      document.getElementById('app')
    )
  })
}
