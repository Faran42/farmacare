import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
      >
        <Stack.Screen
          name="login"
          component={Login}
          
          
        />        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;