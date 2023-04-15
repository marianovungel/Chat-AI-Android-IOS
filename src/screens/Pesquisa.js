import { View, Text, TextInput, Image } from 'react-native'
import React from 'react'
import Card from '../components/Card'
// import { Feather } from "@expo/vector-icons"
// import colors from "tailwindcss/colors"

const Pesquisa = () => {
  return (
    <View className=" bg-black w-full h-full">
        <View className="mx-4 h-full">
            <View className="w-full my-8 flex-row">
                <TextInput
                    className="border-2 w-full h-12 bg-neutral-700 gap-0 decoration-zinc-600 px-4 rounded-xl"
                    placeholder='Search Anything'
                />
            </View>
            <Image
                className="w-full h-60 rounded-xl"
                source={require('../../assets/lua.jpg')}
            ></Image>
            <Text className="text-white mt-6 font-bold text-lg">3D Ilustration generation</Text>
            <Text className="text-zinc-600 mt-1">1 Min ago</Text>
            <View className="w-full flex-row flex-wrap justify-between">
                <Card title="Viagem a Lua" date="1 Min ago" />
                <Card title="Viagem a Lua" date="1 Min ago" />
                <Card title="Viagem a Lua" date="10 Min ago" />
                <Card title="Viagem a Lua" date="14 Min ago" />
                <Card title="Viagem a Lua" date="18 Min ago" />
                <Card title="Viagem a Lua" date="25 Min ago" />
            </View>
        </View>
    </View>
  )
}

export default Pesquisa