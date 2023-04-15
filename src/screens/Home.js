import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'


const Home = () => {
  return (
    <View className=" bg-black w-full h-full">
      <View className="mx-4 h-full">
        <TouchableOpacity className="bg-neutral-700 mt-16 w-14 h-10 flex items-center justify-center rounded-xl">
            <Text className="text-white text-2x font-bold">Skip</Text>
        </TouchableOpacity>
        <View className="w-full h-96  mt-2 flex items-center justify-center">
            <Image
            className="w-full h-80"
                source={require('../../assets/firs.png')}
            ></Image>
        </View>
        <View className="flex items-center justify-center">
            <Text className="text-white font-bold mb-1 text-4xl ">Chat with Your</Text>
            <Text className="text-white font-bold mb-1 text-4xl">Favorite AI</Text>
        </View>
        <View className="flex items-center justify-center w-full mt-4">
            <Text className="w-9/12 text-white text-center text-base ">Chat with the smartest AI - Experience the power of AI with us</Text>
        </View>
        <View className="flex flex-row items-center justify-center w-full mt-6">
            <View className="flex flex-row w-1/2 justify-around">
                <View className="w-4 h-4 rounded-full border-2 border-stone-300"></View>
                <View className="w-4 h-4 rounded-full border-2 bg-cyan-500 border-cyan-500"></View>
                <View className="w-4 h-4 rounded-full border-2 border-stone-300"></View>
                <View className="w-4 h-4 rounded-full border-2 border-stone-300"></View>
            </View>
        </View>
        
        <TouchableOpacity className="w-full bg-slate-100 h-14 rounded-xl flex justify-center items-center mt-10">
            <Text className="font-bold text-lg">Get Strated</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home