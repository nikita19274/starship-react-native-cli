import React from 'react';
import Home from './src/screens/Home/Home';
import {Provider} from 'react-redux';
import {store} from './src/redux/store/store';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
