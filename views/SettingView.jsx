import React from 'react'
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import imgSettings from '../assets/settings.png';
import imgMeow from '../assets/meow.png';
import imgCoffee from '../assets/coffee.png';
import imgCat from '../assets/cat-icon.png';
import imgDog from '../assets/dog-icon.png';
import imgCircle from '../assets/circle.png';
import imgCross from '../assets/cross.png';

const SettingView = ({ gameMode, setGameMode, p1Icon, p2Icon, setP1Icon, setP2Icon }) => {
  const navigation = useNavigation()
  return (
    <View style={styles.modal}>
      <Image source={imgSettings} resizeMode="contain" />
      <Text style={styles.text}>Game Mode</Text>
      <View style={styles.difficulty}>
        <Text
          onPress={() => setGameMode("LOCAL")}
          style={[

            styles.button,
            { backgroundColor: gameMode === "LOCAL" ? "#9999CC" : "#CCCCCC" },
          ]}
        >
          Local Players
        </Text>
        <Text
          onPress={() => setGameMode("EASY")}
          style={[
            styles.button,
            {
              backgroundColor:
                (gameMode === "EASY") || (gameMode === "MEDIUM") || (gameMode === "HARD") ? "#9999CC" : "#CCCCCC",
            },
          ]}
        >
          vs AI
        </Text>
      </View>
      <Text style={styles.text}>AI Difficulty</Text>
      <View style={styles.difficulty}>
        <Text
          onPress={() => setGameMode("EASY")}
          style={[
            styles.button,
            {
              backgroundColor:
                gameMode === "EASY" ? "#9999CC" : "#CCCCCC",
            },
          ]}
        >
          Easy
        </Text>
        <Text
          onPress={() => setGameMode("MEDIUM")}
          style={[
            styles.button,
            {
              backgroundColor:
                gameMode === "MEDIUM" ? "#9999CC" : "#CCCCCC",
            },
          ]}
        >
          Medium
        </Text>
        <Text
          onPress={() => setGameMode("HARD")}
          style={[
            styles.button,
            {
              backgroundColor:
                gameMode === "HARD" ? "#9999CC" : "#CCCCCC",
            },
          ]}
        >
          Hard
        </Text>
      </View>
      <Text style={styles.text}>P1 icon</Text>
      <View style={styles.difficulty}>
        <TouchableOpacity
          onPress={() => setP1Icon(imgCross)}
          style={[styles.icon, {
            borderColor: p1Icon === imgCross ? "#3333ff" : "#fffdca",
          }]}
        >
          <Image source={imgCross} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setP1Icon(imgCircle)}
          style={[styles.icon, {
            borderColor: p1Icon === imgCircle ? "#3333ff" : "#fffdca",
          }]}
        >
          <Image source={imgCircle} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setP1Icon(imgCat)}
          style={[styles.icon, {
            borderColor: p1Icon === imgCat ? "#3333ff" : "#fffdca",
          }]}
        >
          <Image source={imgCat} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setP1Icon(imgDog)}
          style={[styles.icon, {
            borderColor: p1Icon === imgDog ? "#3333ff" : "#fffdca",
          }]}
        >
          <Image source={imgDog} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setP1Icon(imgMeow)}
          style={[styles.icon, {
            borderColor: p1Icon === imgMeow ? "#3333ff" : "#fffdca",
          }]}
        >
          <Image source={imgMeow} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setP1Icon(imgCoffee)}
          style={[styles.icon, {
            borderColor: p1Icon === imgCoffee ? "#3333ff" : "#fffdca",
          }]}
        >
          <Image source={imgCoffee} style={styles.image} />
        </TouchableOpacity>
      </View>
      
      <Text style={styles.text}>P2 icon</Text>
      <View style={styles.difficulty}>
        <TouchableOpacity
          onPress={() => setP2Icon(imgCross)}
          style={[styles.icon, {
            borderColor: p2Icon === imgCross ? "#ff3333" : "#fffdca",
          }]}
        >
          <Image source={imgCross} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setP2Icon(imgCircle)}
          style={[styles.icon, {
            borderColor: p2Icon === imgCircle ? "#ff3333" : "#fffdca",
          }]}
        >
          <Image source={imgCircle} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setP2Icon(imgCat)}
          style={[styles.icon, {
            borderColor: p2Icon === imgCat ? "#ff3333" : "#fffdca",
          }]}
        >
          <Image source={imgCat} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setP2Icon(imgDog)}
          style={[styles.icon, {
            borderColor: p2Icon === imgDog ? "#ff3333" : "#fffdca",
          }]}
        >
          <Image source={imgDog} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setP2Icon(imgMeow)}
          style={[styles.icon, {
            borderColor: p2Icon === imgMeow ? "#ff3333" : "#fffdca",
          }]}
        >
          <Image source={imgMeow} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setP2Icon(imgCoffee)}
          style={[styles.icon, {
            borderColor: p2Icon === imgCoffee ? "#ff3333" : "#fffdca",
          }]}
        >
          <Image source={imgCoffee} style={styles.image} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('local')}>
        <View style={styles.return}>
          <Text style={styles.buttonText}>Return to Game</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    width: "90%",
    top: -200,
    aspectRatio: 1.1,
  },
  text: {
    fontSize: 20,
    color: "black",
    paddingVertical: 20,
  },
  difficulty: {
    flexDirection: "row",
  },
  button: {
    color: "black",
    margin: 10,
    fontSize: 16,
    padding: 10,
    paddingHorizontal: 15,
  },
  icon: {
    borderWidth: 3,
    borderRadius: 3,
    width: 60,
    height: 60,
  },
  image: {
    flex: 1,
    width: 55,
    height: 55,
    resizeMode: 'contain'
  },
  return: {
    width: 200,
    height: 50,
    margin: 10,
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