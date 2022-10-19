import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TransitionPresets } from '@react-navigation/stack'
import HomeView from './views/HomeView';
import SettingView from './views/SettingView';
import Game from './views/Game';

const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <View style={styles.container}>
      <HomeView />
    </View>
  );
}

const MainScreen = () => (
  <View style={styles.container}>
    <Game />
  </View>
)

const SettingScreen = () => (
  <View style={styles.container}>
    <SettingView />
  </View>
)

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="local"
          component={MainScreen}
          options={{
            headerShown: false,
            presentation: 'card',
            ...TransitionPresets.ModalPresentationIOS,
          }}
        />
        <Stack.Screen
          name="setting"
          component={SettingScreen}
          options={{
            headerShown: true,
            presentation: 'modal',
            ...TransitionPresets.ModalPresentationIOS,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdca',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
