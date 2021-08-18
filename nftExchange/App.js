import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './screen/MainScreen';
import LoginScreen from './screen/LoginScreen';
import WrongSearch from './screen/WrongSearch';
import ArtistScreen from './screen/ArtistScreen';
import NftDetailScreen from './screen/NftDetailScreen';
import TabInfoScreen from './screen/TabInfoScreen';
import DetailBuy from './screen/DetailBuy';
import Logout from './screen/Logout';
import SignUpScreen from './screen/SignUpScreen';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers';
import store from './src/redux/configure';

const Stack = createStackNavigator();
function App() {
  return (

    <Provider store={store}>
      {/* <Provider store={createStore(reducers)}></Provider> */}
    <NavigationContainer>

      <Stack.Navigator initialRouteName="MAIN" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MAIN" component={MainScreen}
        />
        <Stack.Screen name="LOGIN" component={LoginScreen}
        />
        <Stack.Screen name="ARTIST" component={ArtistScreen}
        />
        <Stack.Screen name="SUGESST" component={NftDetailScreen}
        />
        <Stack.Screen name="WRONG" component={WrongSearch}
        />
        <Stack.Screen name="INFO" component={TabInfoScreen}
        />
        <Stack.Screen name="BUY" component={DetailBuy}
        />
        <Stack.Screen name="LOGOUT" component={Logout}
        />
        <Stack.Screen name="SIGNUP" component={SignUpScreen}
        />
      </Stack.Navigator>

    </NavigationContainer>

    </Provider>
  );
}

export default App;