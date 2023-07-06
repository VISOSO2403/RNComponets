import React, {useContext} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {ThemeContext} from '../context/theme/ThemeContext';

import HomeScreen from '../screens/HomeScreen';
import Animation101Screen from '../screens/Animation101Screen';
import Animation102Screen from '../screens/Animation102Screen';
import SwitchScreen from '../screens/SwitchScreen';
import AlertScreen from '../screens/AlertScreen';
import InputScreen from '../screens/InputScreen';
import PullToRefreshScreen from '../screens/PullToRefreshScreen';
import SectionListScreen from '../screens/SectionListScreen';
import ModalScreen from '../screens/ModalScreen';
import InfiniteScrollScreen from '../screens/InfiniteScrollScreen';
import SlidesScreen from '../screens/SlidesScreen';
import SlidesCarousel from '../screens/SlidesCarousel';
import ThemeScreen from '../screens/ThemeScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            // backgroundColor: 'white'
          },
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="Animation101Screen"
          component={Animation101Screen}
        />
        <Stack.Screen
          name="Animation102Screen"
          component={Animation102Screen}
        />
        <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
        <Stack.Screen name="AlertScreen" component={AlertScreen} />
        <Stack.Screen name="InputScreen" component={InputScreen} />
        <Stack.Screen
          name="PullToRefreshScreen"
          component={PullToRefreshScreen}
        />
        <Stack.Screen name="SectionListScreen" component={SectionListScreen} />
        <Stack.Screen name="ModalScreen" component={ModalScreen} />
        <Stack.Screen
          name="InfiniteScrollScreen"
          component={InfiniteScrollScreen}
        />
        <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
        <Stack.Screen name="SlidesCarousel" component={SlidesCarousel} />
        <Stack.Screen name="ThemeScreen" component={ThemeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
