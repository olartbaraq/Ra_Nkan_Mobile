import { StyleSheet, View, Pressable, GestureResponderEvent } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { CustomText } from '.'

type CustomButton = PropsWithChildren<{
    text: string
    color: string
    fontSize: number
    onPress: (event: GestureResponderEvent) => void
    fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900"
    marginLeft?: number
    fontFamily: string
    height: number
    width: number
    buttonColor: string
}>


function PressableButton({text, color, fontSize, fontWeight, marginLeft, fontFamily, onPress, height, width, buttonColor}: CustomButton) {


    return (
        <View>
            <Pressable
                onPress={onPress}
                style={[styles.pressable, {height:height, width:width, backgroundColor:buttonColor}]}
            >
                <CustomText fontSize={fontSize} fontWeight={fontWeight} text={text} marginLeft={marginLeft} color={color} fontFamily={fontFamily} />
            </Pressable>
        </View>
    ) 
}

const styles = StyleSheet.create({

    pressable: {
        justifyContent: "center",
        alignItems: "center",
    }
})

export default PressableButton;