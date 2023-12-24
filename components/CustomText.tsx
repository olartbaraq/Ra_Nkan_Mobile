import { Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'



type BlackTextProps = PropsWithChildren<{
  text: string
  fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900"
  fontSize: number
  marginLeft?: number
  color: string
  fontFamily: string
}>



const CustomText = ({ fontSize , fontWeight, text, marginLeft, color, fontFamily } : BlackTextProps) => {
  return (
    <View>
      <Text style={{fontSize:fontSize, fontWeight:fontWeight, marginLeft:marginLeft, color:color, fontFamily:fontFamily}}>{text}</Text>
    </View>
  )
}





export default CustomText;