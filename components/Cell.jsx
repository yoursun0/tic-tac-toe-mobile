import React from 'react'
import { View, StyleSheet, Pressable, Image } from 'react-native'

const Cell = (props) => {
    const { cell, onPress, p1Icon, p2Icon } = props;

    return (
        <Pressable onPress={() => onPress()} style={styles.cell}>
            {cell === 'x' && <View><Image source={p1Icon} resizeMode="contain" /></View> }
            {cell === 'o' && <View><Image source={p2Icon} resizeMode="contain" /></View> }
        </Pressable>
    )
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