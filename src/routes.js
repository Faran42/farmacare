import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import Entrar from './pages/Entrar';
import Busca from './pages/Busca';

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
        <Stack.Screen
          name="entrar"
          component={Entrar}         
          
        />        
        <Stack.Screen
          name="busca"
          component={Busca}         
          
        />        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;