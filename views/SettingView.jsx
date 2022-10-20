import React from 'react'
import { TouchableOpacity, View, ScrollView, SafeAreaView, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import imgSettings from '../assets/settings.png';
import imgCross from '../assets/cross.png';
import imgCross1 from '../assets/cross-1.png';
import imgCross2 from '../assets/cross-2.png';
import imgCross3 from '../assets/cross-3.png';
import imgCircle from '../assets/circle.png';
import imgCircle1 from '../assets/circle-1.png';
import imgCircle2 from '../assets/circle-2.png';
import imgCircle3 from '../assets/circle-3.png';
import imgTriangle from '../assets/triangle.png';
import imgTriangle1 from '../assets/triangle-1.png';
import imgTriangle2 from '../assets/triangle-2.png';
import imgTriangle3 from '../assets/triangle-3.png';
import imgSquare from '../assets/square.png';
import imgSquare1 from '../assets/square-1.png';
import imgSquare2 from '../assets/square-2.png';
import imgSquare3 from '../assets/square-3.png';
import imgCat from '../assets/cat.png';
import imgCat1 from '../assets/cat-1.png';
import imgCat2 from '../assets/cat-2.png';
import imgCat3 from '../assets/cat-3.png';
import imgDog from '../assets/dog.png';
import imgDog1 from '../assets/dog-1.png';
import imgDog2 from '../assets/dog-2.png';
import imgDog3 from '../assets/dog-3.png';
import imgMeow from '../assets/meow.png';
import imgMeow1 from '../assets/meow-1.png';
import imgMeow2 from '../assets/meow-2.png';
import imgMeow3 from '../assets/meow-3.png';
import imgCoffee from '../assets/coffee.png';
import imgCoffee1 from '../assets/coffee-1.png';
import imgCoffee2 from '../assets/coffee-2.png';
import imgCoffee3 from '../assets/coffee-3.png';

const SettingView = ({ gameRule, setGameRule, gameMode, setGameMode, p1Icons, p2Icons, setP1Icons, setP2Icons, initPlayer, setInitPlayer }) => {

  const setP1Icon = (p1Icon) => {
    let p1Icons = [p1Icon];
    switch (p1Icon) {
      case imgCross:
        p1Icons[1] = imgCross1;
        p1Icons[2] = imgCross2;
        p1Icons[3] = imgCross3;
        break;
      case imgCircle:
        p1Icons[1] = imgCircle1;
        p1Icons[2] = imgCircle2;
        p1Icons[3] = imgCircle3;
        break;
      case imgTriangle:
        p1Icons[1] = imgTriangle1;
        p1Icons[2] = imgTriangle2;
        p1Icons[3] = imgTriangle3;
        break;
      case imgSquare:
        p1Icons[1] = imgSquare1;
        p1Icons[2] = imgSquare2;
        p1Icons[3] = imgSquare3;
        break;
      case imgCat:
        p1Icons[1] = imgCat1;
        p1Icons[2] = imgCat2;
        p1Icons[3] = imgCat3;
        break;
      case imgDog:
        p1Icons[1] = imgDog1;
        p1Icons[2] = imgDog2;
        p1Icons[3] = imgDog3;
        break;
      case imgMeow:
        p1Icons[1] = imgMeow1;
        p1Icons[2] = imgMeow2;
        p1Icons[3] = imgMeow3;
        break;
      case imgCoffee:
        p1Icons[1] = imgCoffee1;
        p1Icons[2] = imgCoffee2;
        p1Icons[3] = imgCoffee3;
        break;
    }
    setP1Icons(p1Icons);
  }

  const setP2Icon = (p2Icon) => {
    let p2Icons = [p2Icon];
    switch (p2Icon) {
      case imgCross:
        p2Icons[1] = imgCross1;
        p2Icons[2] = imgCross2;
        p2Icons[3] = imgCross3;
        break;
      case imgCircle:
        p2Icons[1] = imgCircle1;
        p2Icons[2] = imgCircle2;
        p2Icons[3] = imgCircle3;
        break;
      case imgTriangle:
        p2Icons[1] = imgTriangle1;
        p2Icons[2] = imgTriangle2;
        p2Icons[3] = imgTriangle3;
        break;
      case imgSquare:
        p2Icons[1] = imgSquare1;
        p2Icons[2] = imgSquare2;
        p2Icons[3] = imgSquare3;
        break;
      case imgCat:
        p2Icons[1] = imgCat1;
        p2Icons[2] = imgCat2;
        p2Icons[3] = imgCat3;
        break;
      case imgDog:
        p2Icons[1] = imgDog1;
        p2Icons[2] = imgDog2;
        p2Icons[3] = imgDog3;
        break;
      case imgMeow:
        p2Icons[1] = imgMeow1;
        p2Icons[2] = imgMeow2;
        p2Icons[3] = imgMeow3;
        break;
      case imgCoffee:
        p2Icons[1] = imgCoffee1;
        p2Icons[2] = imgCoffee2;
        p2Icons[3] = imgCoffee3;
        break;
    }
    setP2Icons(p2Icons);
  }

  const navigation = useNavigation()
  return (
    <ScrollView style={styles.modal}>
      <Image source={imgSettings} style={{ marginTop: 40 }} resizeMode="contain" />
      <Text style={styles.text}>Game Rule</Text>
      <View style={styles.difficulty}>
        <Text
          onPress={() => setGameRule("LIMITED")}
          style={[
            styles.button,
            { backgroundColor: gameRule === "LIMITED" ? "#9999CC" : "#CCCCCC" },
          ]}
        >
          Limited 3 Tokens
        </Text>
        <Text
          onPress={() => setGameRule("CLASSIC")}
          style={[
            styles.button,
            { backgroundColor: gameRule === "CLASSIC" ? "#9999CC" : "#CCCCCC" },
          ]}
        >
          CLASSIC
        </Text>
      </View>
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
      <Text style={styles.text}>Who First</Text>
      <View style={styles.difficulty}>
        <Text
          onPress={() => setInitPlayer("x")}
          style={[

            styles.button,
            { backgroundColor: initPlayer === "x" ? "#9999CC" : "#CCCCCC" },
          ]}
        >
          Player 1
        </Text>
        <Text
          onPress={() => setInitPlayer("o")}
          style={[
            styles.button,
            { backgroundColor: initPlayer === "o" ? "#9999CC" : "#CCCCCC" },
          ]}
        >
          Player 2
        </Text>
      </View>
      <Text style={styles.text}>P1 token</Text>
      <View style={styles.difficulty}>
        <TouchableOpacity
          onPress={() => setP1Icon(imgCross)}
          style={[styles.icon, {
            borderColor: p1Icons[0] === imgCross ? "#3333ff" : "#fffdca",
          }]}
        >
          <Image source={imgCross} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setP1Icon(imgCircle)}
          style={[styles.icon, {
            borderColor: p1Icons[0] === imgCircle ? "#3333ff" : "#fffdca",
          }]}
        >
          <Image source={imgCircle} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setP1Icon(imgTriangle)}
          style={[styles.icon, {
            borderColor: p1Icons[0] === imgTriangle ? "#3333ff" : "#fffdca",
          }]}
        >
          <Image source={imgTriangle} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setP1Icon(imgSquare)}
          style={[styles.icon, {
            borderColor: p1Icons[0] === imgSquare ? "#3333ff" : "#fffdca",
          }]}
        >
          <Image source={imgSquare} style={styles.image} />
        </TouchableOpacity>
      </View>
      <View style={styles.difficulty}>
        <TouchableOpacity
          onPress={() => setP1Icon(imgCat)}
          style={[styles.icon, {
            borderColor: p1Icons[0] === imgCat ? "#3333ff" : "#fffdca",
          }]}
        >
          <Image source={imgCat} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setP1Icon(imgDog)}
          style={[styles.icon, {
            borderColor: p1Icons[0] === imgDog ? "#3333ff" : "#fffdca",
          }]}
        >
          <Image source={imgDog} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setP1Icon(imgMeow)}
          style={[styles.icon, {
            borderColor: p1Icons[0] === imgMeow ? "#3333ff" : "#fffdca",
          }]}
        >
          <Image source={imgMeow} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setP1Icon(imgCoffee)}
          style={[styles.icon, {
            borderColor: p1Icons[0] === imgCoffee ? "#3333ff" : "#fffdca",
          }]}
        >
          <Image source={imgCoffee} style={styles.image} />
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>P2 token</Text>
      <View style={styles.difficulty}>
        <TouchableOpacity
          onPress={() => setP2Icon(imgCross)}
          style={[styles.icon, {
            borderColor: p2Icons[0] === imgCross ? "#ff3333" : "#fffdca",
          }]}
        >
          <Image source={imgCross} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setP2Icon(imgCircle)}
          style={[styles.icon, {
            borderColor: p2Icons[0] === imgCircle ? "#ff3333" : "#fffdca",
          }]}
        >
          <Image source={imgCircle} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setP2Icon(imgTriangle)}
          style={[styles.icon, {
            borderColor: p2Icons[0] === imgTriangle ? "#ff3333" : "#fffdca",
          }]}
        >
          <Image source={imgTriangle} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setP2Icon(imgSquare)}
          style={[styles.icon, {
            borderColor: p2Icons[0] === imgSquare ? "#ff3333" : "#fffdca",
          }]}
        >
          <Image source={imgSquare} style={styles.image} />
        </TouchableOpacity>
      </View>
      <View style={styles.difficulty}>
        <TouchableOpacity
          onPress={() => setP2Icon(imgCat)}
          style={[styles.icon, {
            borderColor: p2Icons[0] === imgCat ? "#ff3333" : "#fffdca",
          }]}
        >
          <Image source={imgCat} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setP2Icon(imgDog)}
          style={[styles.icon, {
            borderColor: p2Icons[0] === imgDog ? "#ff3333" : "#fffdca",
          }]}
        >
          <Image source={imgDog} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setP2Icon(imgMeow)}
          style={[styles.icon, {
            borderColor: p2Icons[0] === imgMeow ? "#ff3333" : "#fffdca",
          }]}
        >
          <Image source={imgMeow} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setP2Icon(imgCoffee)}
          style={[styles.icon, {
            borderColor: p2Icons[0] === imgCoffee ? "#ff3333" : "#fffdca",
          }]}
        >
          <Image source={imgCoffee} style={styles.image} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={styles.return}>
          <Text style={styles.buttonText}>OK</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  modal: {
    width: "90%"
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
    marginBottom: 80,
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