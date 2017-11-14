import React from 'react'
import { Provider } from 'react-redux'
import configureStore, { history } from '../store'
import { ConnectedRouter } from 'react-router-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import {HashRouter as Router, Route, Redirect, Switch} from 'react-router-dom'

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
            <Switch>
              <Route path='/user' render={() => <div>123</div>}/>
              <Route path='/' render={()=><div>456</div>}/>
              <Redirect to='/' />
            </Switch>
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    )
  }
}

export default App
