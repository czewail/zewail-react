import { routerReducer } from 'react-router-redux'

import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const context = require.context('./', true, /\.js$/)
const keys = context.keys().filter(item => item !== './index.js')
const reducers = {}
for (let i = 0; i < keys.length; i += 1) {
  reducers[keys[i].replace(/^\.\/(.*)\.js$/, "$1").replace(/(\/)/g, "_")] = context(keys[i]).default
}

export const config = {
  key: 'root',
  storage,
  whitelist: [
    'routing'
  ]
}

// 合并reducer
export default persistCombineReducers(config, {
  routing: routerReducer, // 默认引入路由reducer
  ...reducers
})
