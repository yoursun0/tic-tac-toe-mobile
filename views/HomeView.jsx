import React from 'react'
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import imgTitle from '../assets/title-text.png';
import imgCircle from '../assets/circle.png';
import imgCross from '../assets/cross.png';

const HomeView = ({p1Icon, p2Icon}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.homepage}>
      <View style={styles.icons}>
        <Image source={imgCross} resizeMode="contain" />
        <Image source={imgCircle} resizeMode="contain" />
        <Image source={p1Icon} resizeMode="contain" />
        <Image source={p2Icon} resizeMode="contain" />
      </View>
      <Image source={imgTitle} resizeMode="contain" />
      <TouchableOpacity onPress={() => navigation.navigate('local')}>
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
  icons: {
    flexDirection: "row",
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