import React from 'react'
import { StyleSheet, Text, View, Pressable, ImageBackground, Alert } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TransitionPresets } from '@react-navigation/stack'

import HomeView from './HomeView'
import MainView from './MainView'
import SettingView from './SettingView'

const RootStack = createNativeStackNavigator();
const ModalStack = createNativeStackNavigator();

const ModalStackView = () => (
  <View>
    <Text>Eat Shit!</Text>
    <ModalStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <ModalStack.Screen
      name="modalCard1"
      component={MainView}
      options={{
        headerShown: true,
        presentation: 'modal',
        ...TransitionPresets.ModalPresentationIOS,
      }}
    />
    <ModalStack.Screen
      name="modalCard2"
      component={SettingView}
      options={{
        headerShown: true,
        presentation: 'card'
      }}
    />
  </ModalStack.Navigator>
  </View>
)

const Stacks = () => (
  <RootStack.Navigator
    screenOptions={{
      headerShown: true,
    }}>
    <RootStack.Screen name="home" component={HomeView} />
    <RootStack.Screen
      name="modal"
      component={ModalStackView}
      options={{
        headerShown: true,
        presentation: 'modal',
        ...TransitionPresets.ModalPresentationIOS,
      }}
    />
  </RootStack.Navigator>
)

export default Stacks