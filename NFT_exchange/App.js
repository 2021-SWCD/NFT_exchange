import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './screen/MainScreen';
import LoginScreen from './screen/LoginScreen';
import WrongSearch from './screen/WrongSearch';
import Artist_Screen from './screen/ArtistScreen';
import NFT_detailScreen from './screen/NFTDetailScreen';
import Tab_infoScreen from './screen/TabInfoScreen';
import Detail_buy from './screen/DetailBuy';
import Logout from './screen/Logout';

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="MAIN" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MAIN" component={MainScreen}
        />
        <Stack.Screen name="LOGIN" component={LoginScreen}
        />
        <Stack.Screen name="ARTIST" component={Artist_Screen}
        />
        <Stack.Screen name="SUGESST" component={NFT_detailScreen}
        />
        <Stack.Screen name="WRONG" component={WrongSearch}
        />
        <Stack.Screen name="INFO" component={Tab_infoScreen}
        />
        <Stack.Screen name="BUY" component={Detail_buy}
        />
        <Stack.Screen name="LOGOUT" component={Logout}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App;