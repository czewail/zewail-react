import { fork, all } from 'redux-saga/effects'

const context = require.context('./', true, /\.js$/)
const keys = context.keys().filter(item => item !== './index.js')
const sagas = []
for (let i = 0; i < keys.length; i += 1) {
  sagas.push(context(keys[i]).default)
}

const sagasForks = sagas.map(saga => fork(saga))

// 根saga
export default function* rootSaga () {
  yield all(sagasForks)
}
