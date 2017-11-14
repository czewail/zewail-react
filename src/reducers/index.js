import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const config = {
  key: 'root',
  storage
}

// 这里加入其他的reducer
const reducers = {
  routing: routerReducer, // 默认引入路由reducer
}
// 合并reducer
export default persistCombineReducers(config, reducers)
