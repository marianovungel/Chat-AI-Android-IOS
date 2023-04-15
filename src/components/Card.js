import { View, Text, Image } from 'react-native'
import React from 'react'

const Card = ({title, date}) => {
  return (
    <View className=" mt-6 justify-center items-start">
        <Image
            className="w-44 h-44 rounded-xl"
            source={require('../../assets/dois.jpg')}
        ></Image>
        <Text className="text-white mt-2 font-bold text-lg">{title}</Text>
        <Text className="text-zinc-600 mt-1">{date}</Text>
    </View>
  )
}

export default Card