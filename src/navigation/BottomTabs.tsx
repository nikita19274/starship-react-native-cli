import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import Favorite from '../screens/Favorite/Favorite';
import {Image, Text, View} from 'react-native';
import {styles} from './style';

const Tab = createBottomTabNavigator();

const TabIcon = ({
  icon,
  focused,
  title,
}: {
  icon: any;
  focused: boolean;
  title: string;
}) => (
  <View style={styles.iconContainer}>
    <Image
      source={icon}
      style={styles.icon}
      tintColor={focused ? '#0061ff' : '#999'}
    />
    <Text style={styles.label}>{title}</Text>
  </View>
);

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopColor: '#eee',
          height: 70,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              icon={require('../../assets/icons/home.png')}
              focused={focused}
              title="Home"
            />
          ),
        }}
      />

      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              icon={require('../../assets/icons/heart.png')}
              focused={focused}
              title="Favorite"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
