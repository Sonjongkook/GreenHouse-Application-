import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'
import logger from 'redux-logger'
import appReducer from 'slices/app.slice'

const rootReducer = combineReducers({
  app: appReducer,
  // add more reducers
})

const defaultMiddleware = getDefaultMiddleware({
  serializableCheck: false,
  immutableCheck: false,
})

const initialState = window.__INITIAL_STATE__ || {
  firebase: { authError: null }
}

const store = configureStore({
  initialState,
  reducer: rootReducer,
  // eslint-disable-next-line no-undef
  middleware: __DEV__ ? defaultMiddleware.concat(logger) : defaultMiddleware,
})

export default store
