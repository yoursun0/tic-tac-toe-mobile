import React from 'react'
import { View, StyleSheet, Image, Pressable, Button, Alert, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TransitionPresets } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import imgGear from '../../assets/setting.png'

const HomeView = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Pressable onPress={() => navigation.navigate('modal')}
        title="Open Modal"style={styles.gear}>
        <View><Image source={imgGear} resizeMode="contain" /></View>
      </Pressable>
    </View>
  );
}

const ModalView = () => {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

const RootStack = createNativeStackNavigator()
const ModalStack = createNativeStackNavigator()

const ModalStackView = () => (
  <ModalStack.Navigator
    screenOptions={{
      headerShown: true,
    }}>
    <ModalStack.Screen
      name="modalCard1"
      component={ModalView}
      options={{
        headerShown: false,
        presentation: 'modal',
        ...TransitionPresets.ModalPresentationIOS,
      }}
    />
  </ModalStack.Navigator>
)

const Setting = () => (
  <View style={styles.panel}>
  <RootStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <RootStack.Screen name="home" component={HomeView} />
    <RootStack.Screen
      name="modal"
      component={ModalStackView}
      options={{
        headerShown: false,
        presentation: 'modal',
        ...TransitionPresets.ModalPresentationIOS,
      }}
    />
  </RootStack.Navigator>
  </View>
)


const styles = StyleSheet.create({
  panel: {
    backgroundColor: '#ff0000',
    position: "absolute",
    top: 80,
    width: "100%",
    height: 400,
  },
  gear: {
    position: "absolute",
    right: 0,
    width: 80,
    height: 80,
  }
})
export default Setting;