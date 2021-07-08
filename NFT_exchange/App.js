import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
import MainScreen from './MainScreen';
import LoginScreen from './LoginScreen';
import WrongSearch from './WrongSearch';
import Artist_Screen from './Artist_Screen';
import NFT_detailScreen from './NFT_detailScreen';
import Tab_infoScreen from './Tab_infoScreen';
 
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
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
 
export default App;