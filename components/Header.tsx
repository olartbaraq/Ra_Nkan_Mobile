import { Pressable, Text, View } from 'react-native'
import React from 'react'
import Icons from '../utils/Iconsexport'
import { hp } from '../utils/globalvariables'



type HeaderProps = {
    title?: string
    onPress?: (() => void)
}

const Header = ({title, onPress} : HeaderProps) => {

    return (
        <View className='flex flex-row items-center self-start space-x-4'>
            <Pressable
                onPress={onPress}
            >
                <Icons name={"back"} size={hp(5)} color={'#000'} style={""}/>
            </Pressable>
            <Text className='text-black text-3xl capitalize'>{title}</Text>
        </View>
    )
}

export default Header;