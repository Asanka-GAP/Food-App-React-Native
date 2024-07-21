import { View, Text, Image } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur'
import { Ionicons } from '@expo/vector-icons'

interface CardProps{
    title1?:string
    subtitle1?:string
    title2?:string
    subtitle2?:string
    price1?:string
    price2?:string
    image1?:any
    image2?:any
}

const Card = ({title1,subtitle1,title2,subtitle2,price1,price2,image1,image2}:CardProps) => {
  return (
    <View className="flex-row justify-center items-center -ml-2">
            <BlurView
              intensity={18}
              className="ml-4 px-1 border-2 items-center border-gray-500 mt-10 w-[180px] h-[250px]"
            >
              <View className="flex-row mt-1">
                <View className="mr-28">
                  <Ionicons name="heart" size={24} color="white" />
                </View>
                <Ionicons name="cart" size={24} color="white" />
              </View>
              <Image
                source={image1}
                className="h-[200px] w-[150px] -mt-9"
                resizeMode="contain"
              />
              <Text className="text-white ml-1 font-psemibold text-xl -mt-8">
                {title1}
              </Text>
              <Text className="text-gray-300 ml-1 -mt-1 font-pregular text-sm">
                {subtitle1}
              </Text>
              <Text className="text-white ml-[130px] font-pmedium text-xl mt-1">
                {price1}
              </Text>
            </BlurView>
            <BlurView
              intensity={18}
              className="ml-4 px-1 border-2 items-center border-gray-500 mt-10 w-[180px] h-[250px]"
            >
              <View className="flex-row mt-1">
                <View className="mr-28">
                  <Ionicons name="heart" size={24} color="white" />
                </View>
                <Ionicons name="cart" size={24} color="white" />
              </View>
              <Image
                source={image2}
                className="h-[200px] w-[150px] -mt-9"
                resizeMode="contain"
              />
              <Text className="text-white ml-1 font-psemibold text-xl -mt-8">
                {title2}
              </Text>
              <Text className="text-gray-300 ml-1 -mt-1 font-pregular text-sm">
                {subtitle2}
              </Text>
              <Text className="text-white ml-[130px] font-pmedium text-xl mt-1">
                {price2}
              </Text>
            </BlurView>
          </View>
  )
}

export default Card