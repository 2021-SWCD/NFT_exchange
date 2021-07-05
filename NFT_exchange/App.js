import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
import MainScreen from './MainScreen';
import LoginScreen from './LoginScreen';
import Sam_pleScreen from './Sam_pleScreen';
import WrongSearch from './WrongSearch';
 
const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="MAIN" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MAIN" component={MainScreen}
          />
        <Stack.Screen name="LOGIN" component={LoginScreen} 
          />
        <Stack.Screen name="SAMPLE" component={Sam_pleScreen}
          />
        
        <Stack.Screen name="WRONG" component={WrongSearch}
          />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
 
export default App;