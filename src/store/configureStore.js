// configureStore.js

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';

import userReducer from './reducers/userReducer'
import applicationReducer from './reducers/applicationReducer'
import accessPointReducer from './reducers/accessPointReducer'
import feedReducer from './reducers/feedReducer'
import clientReducer from './reducers/clientReducer'
import storeReducer from './reducers/storeReducer'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['application', 'stores']
}

const rootReducer = combineReducers({
    userReducer,
    application: applicationReducer,
    accessPoint: accessPointReducer,
    feed: feedReducer,
    client: clientReducer,
    stores: storeReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


let store = createStore(persistedReducer, applyMiddleware(thunk))
let persistor = persistStore(store)

export { store, persistor }

