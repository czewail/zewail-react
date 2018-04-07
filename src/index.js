import React from 'react'
import ReactDOM from 'react-dom'

import configureStore from '@/store'
// 主页面
import App from './App'
import ErrorBoundary from '@/components/ErrorBoundary'

const stores = configureStore()

ReactDOM.render(
  <ErrorBoundary>
    <App stores={stores}/>
  </ErrorBoundary>
  , document.getElementById('app'))

