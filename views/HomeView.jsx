import React from 'react'
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import imgTitle from '../assets/title-text.png';
import imgIcon from '../assets/meow.png'

const HomeView = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.homepage}>
      <Image source={imgIcon} resizeMode="contain" />
      <Image source={imgTitle} resizeMode="contain" />
      <TouchableOpacity onPress={() => navigation.navigate('modal')}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Start Game</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('setting')}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Settings</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  homepage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 10,
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'blue',
  },
  buttonText: {
    color: 'white'
  }
});

export default HomeView