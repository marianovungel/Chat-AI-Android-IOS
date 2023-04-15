import React from 'react'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Feather, Entypo, FontAwesome  } from '@expo/vector-icons'

import Home from "./screens/Home"
import Pesquisa from "./screens/Pesquisa"

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <Tab.Navigator
    >
      <Tab.Screen
      options={{
        headerShown: false,
        tabBarIcon:({color, size})=>(<Entypo name='home' size={size} color={color} />)
        }}
      name='home' component={Home} />
      <Tab.Screen
      options={{
        headerShown: false,
        tabBarIcon:({color, size})=>(<FontAwesome name="search" size={size} color={color} />)
        }}
      name='pesquisa' component={Pesquisa} />
      
    </Tab.Navigator>
  )
}

export default Routes