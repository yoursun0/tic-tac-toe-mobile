import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TransitionPresets } from '@react-navigation/stack'
import HomeView from './views/HomeView';
import SettingView from './views/SettingView';
import Game from './views/Game';
import imgCross from './assets/cross.png';
import imgCross1 from './assets/cross-1.png';
import imgCross2 from './assets/cross-2.png';
import imgCross3 from './assets/cross-3.png';
import imgCircle from './assets/circle.png';
import imgCircle1 from './assets/circle-1.png';
import imgCircle2 from './assets/circle-2.png';
import imgCircle3 from './assets/circle-3.png';

const Stack = createNativeStackNavigator();

export default function App() {

  const HomeScreen = () => {
    return (
      <View style={styles.container}>
        <HomeView p1Icon={p1Icons[1]} p2Icon={p2Icons[2]} />
      </View>
    );
  }

  const MainScreen = () => (
    <View style={styles.container}>
      <Game
        gameRule={gameRule}
        gameMode={gameMode}
        p1Icons={p1Icons}
        p2Icons={p2Icons}
        initPlayer={initPlayer}
      />
    </View>
  )

  const SettingScreen = () => (
    <View style={styles.container}>
      <SettingView
        gameRule={gameRule}
        setGameRule={setGameRule}
        gameMode={gameMode}
        setGameMode={setGameMode}
        p1Icons={p1Icons}
        p2Icons={p2Icons}
        setP1Icons={setP1Icons}
        setP2Icons={setP2Icons}
        initPlayer={initPlayer}
        setInitPlayer={setInitPlayer}
      />
    </View>
  )

  const [gameRule, setGameRule] = useState("LIMITED"); // LIMITED, CLASSIC;
  const [gameMode, setGameMode] = useState("LOCAL"); // LOCAL, EASY, MEDIUM, HARD;
  const [initPlayer, setInitPlayer] = useState('x');
  const [p1Icons, setP1Icons] = useState([imgCross, imgCross1, imgCross2, imgCross3]);
  const [p2Icons, setP2Icons] = useState([imgCircle, imgCircle1, imgCircle2, imgCircle3]);

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
