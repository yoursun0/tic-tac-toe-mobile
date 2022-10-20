import React from 'react'
import { View, StyleSheet, Pressable, Image } from 'react-native'

const Cell = (props) => {
    const { cell, onPress, gameRule, p1Icons, p2Icons } = props;

    if (gameRule === "CLASSIC") {
        return (
            <Pressable onPress={() => onPress()} style={styles.cell}>
                {cell[0] === 'x' && <View><Image source={p1Icons[0]} resizeMode="contain" /></View>}
                {cell[0] === 'o' && <View><Image source={p2Icons[0]} resizeMode="contain" /></View>}
            </Pressable>
        )
    } else {
        return (
            <Pressable onPress={() => onPress()} style={styles.cell}>
                {cell == 'x1' && <View><Image source={p1Icons[1]} resizeMode="contain" /></View>}
                {cell == 'x2' && <View><Image source={p1Icons[2]} resizeMode="contain" /></View>}
                {cell == 'x3' && <View><Image source={p1Icons[3]} resizeMode="contain" /></View>}
                {cell == 'o1' && <View><Image source={p2Icons[1]} resizeMode="contain" /></View>}
                {cell == 'o2' && <View><Image source={p2Icons[2]} resizeMode="contain" /></View>}
                {cell == 'o3' && <View><Image source={p2Icons[3]} resizeMode="contain" /></View>}
            </Pressable>
        )
    }
}

const styles = StyleSheet.create({
    cell: {
        flex: 1,
        borderColor: "grey",
        alignItems: "center",
        justifyContent: "center",
    },
    circle: {
        position: "absolute",
        width: 80,
        height: 80,
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "red",
        mirgin: 10,
        borderWidth: 10,
    },
})
export default Cell;