import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomTabBar} from '@react-navigation/bottom-tabs';
import BottomTabs from './BottomTabs';
import StarshipDetails from '../properties/StarshipDetails';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Tabs" component={BottomTabs} />
      <Stack.Screen name="StarshipDetails" component={StarshipDetails} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
