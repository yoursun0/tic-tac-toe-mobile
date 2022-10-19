import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'

const SettingView = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Text>Setting Page</Text>
      <TouchableOpacity onPress={() => navigation.navigate('local')}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Return to Game</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
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

export default SettingView