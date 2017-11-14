import React from 'react'
import { Provider } from 'react-redux'
import configureStore, { history } from '../store'
import { ConnectedRouter } from 'react-router-redux'
import { PersistGate } from 'redux-persist/es/integration/react'

// 获取 persistor 和 store
const { persistor, store } = configureStore()

const onBeforeLift = () => {
  // console.log('before action')
}

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // 主页面
    return (
      <Provider store={store}>
        <PersistGate loading={<div>loading page</div>} onBeforeLift={onBeforeLift} persistor={persistor}>
          {/* ConnectedRouter 会自动使用Provider里的store */}
          <ConnectedRouter history={history}>
            {/* 主页面组件 */}
            <div>Main Page</div>
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    )
  }
}

export default App
