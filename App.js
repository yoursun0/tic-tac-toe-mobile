import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TransitionPresets } from '@react-navigation/stack'
import HomeView from './views/HomeView';
import SettingView from './views/SettingView';
import Game from './views/Game';
import imgMeow from './assets/meow.png';
import imgCoffee from './assets/coffee.png';
import imgCat from './assets/cat-icon.png';
import imgDog from './assets/dog-icon.png';
import imgCircle from './assets/circle.png';
import imgCross from './assets/cross.png';

const Stack = createNativeStackNavigator();

export default function App() {

  function HomeScreen() {
    return (
      <View style={styles.container}>
        <HomeView p1Icon={p1Icon} p2Icon={p2Icon} />
      </View>
    );
  }

  const MainScreen = () => (
    <View style={styles.container}>
      <Game
        gameMode={gameMode}
        p1Icon={p1Icon}
        p2Icon={p2Icon}
      />
    </View>
  )

  const SettingScreen = () => (
    <View style={styles.container}>
      <SettingView
        gameMode={gameMode}
        setGameMode={setGameMode}
        p1Icon={p1Icon}
        p2Icon={p2Icon}
        setP1Icon={setP1Icon}
        setP2Icon={setP2Icon}
      />
    </View>
  )

  const [gameMode, setGameMode] = useState("LOCAL"); // LOCAL, EASY, MEDIUM, HARD;
  const [p1Icon, setP1Icon] = useState(imgCross);
  const [p2Icon, setP2Icon] = useState(imgCircle);

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
