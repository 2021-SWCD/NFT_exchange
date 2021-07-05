import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
import MainScreen from './MainScreen';
import LoginScreen from './LoginScreen';
 
const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="MAIN" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MAIN" component={MainScreen}
          />
        <Stack.Screen name="LOGIN" component={LoginScreen} 
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 
export default App;