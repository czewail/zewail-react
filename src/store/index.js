import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore } from 'redux-persist'
import reducers from '@/reducers'
import createHistory from 'history/createHashHistory'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import sagas from '@/sagas'
import logger from 'redux-logger'

// 创建history
export const history = createHistory()

//创建saga中间件
const sagaMiddleware = createSagaMiddleware()

// 需要调用的中间件
const middleWares = [
  sagaMiddleware,
  routerMiddleware(history),
  logger
]

// 生成最终的store函数
export default function configureStore( onComplete = () => {} ){
  // 生成store
  const store = createStore(reducers, undefined, compose(
    applyMiddleware(...middleWares),
  ))
  // 将store数据保存到缓存
  const persistor = persistStore(store, null, onComplete)
  // 运行saga
  sagaMiddleware.run(sagas)

  return { persistor, store }
}
