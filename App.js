import 'react-native-gesture-handler';
import * as React from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Toast from 'react-native-toast-message';

import AppNavContainer from './src/navigations/index';
import { store, persistor } from '@store/configureStore'

function App(){
  return(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavContainer />
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </PersistGate>
    </Provider>
  )
}

export default App;