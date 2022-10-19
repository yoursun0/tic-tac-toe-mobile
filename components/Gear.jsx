import React from 'react'
import { View, StyleSheet, Image, Pressable, Button, Alert, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import imgGear from '../assets/setting.png'

const Gear = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.panel}>
      <Pressable onPress={() => navigation.navigate('setting')}
        title="Open Settings" style={styles.gear}>
        <View><Image source={imgGear} resizeMode="contain" /></View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    position: "absolute",
    top: 80,
    width: "100%",
    height: 50,
  },
  gear: {
    position: "absolute",
    right: 0,
    width: 80,
    height: 80,
  }
})
export default Gear;