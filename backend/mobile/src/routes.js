import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Home from './pages/Home';
import Lista from './pages/Lista';
import Empresa from './pages/Empresa';
import Alimentacao from './pages/Alimentacao';

export default function Routes() {
  return (
    <NavigationContainer>
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
         <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Lista" component={Lista} />
        <AppStack.Screen name="Empresa" component={Empresa} />
        <AppStack.Screen name="Alimentacao" component={Alimentacao} />
      </AppStack.Navigator>

    </NavigationContainer>
  );
}