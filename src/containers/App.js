import React from 'react'
import { Provider } from 'react-redux'
import { history } from '../store'
import { ConnectedRouter } from 'react-router-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import { Route, Redirect, Switch } from 'react-router-dom'

const onBeforeLift = () => {
  // console.log('before action')
}

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { persistor, store } = this.props.stores
    // 主页面
    return (
      <Provider store={store}>
        <PersistGate loading={<div/>} onBeforeLift={onBeforeLift} persistor={persistor}>
          {/* ConnectedRouter 会自动使用Provider里的store */}
          <ConnectedRouter history={history}>
            <Switch>
              <Route path="/user" render={() => <div>123</div>}/>
              <Route path="/" render={()=><div>4dasdslkjlkjkljkjkljk123123f56</div>}/>
              <Redirect to="/" />
            </Switch>
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    )
  }
}

export default App
