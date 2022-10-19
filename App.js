import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable, ImageBackground, Alert } from 'react-native';
import Game from './views/Game';

export default function App() {

  return (
    <View style={styles.container}>
      <Game />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdca',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg: {
    width: "100%",
    height: "103%",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "90%",
    aspectRatio: 1.1,
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  buttons: {
    position: "absolute",
    bottom: 50,
    flexDirection: "row",
  },
  button: {
    color: "black",
    margin: 10,
    fontSize: 16,
    padding: 10,
    paddingHorizontal: 15,
  },
});
