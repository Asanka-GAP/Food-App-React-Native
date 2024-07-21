import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
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
  const [like1, setLike1] = useState(false);
  const [like2, setLike2] = useState(false);
  const [isAddedToCart1, setIsAddedToCart1] = useState(false)
  const [isAddedToCart2, setIsAddedToCart2] = useState(false)

  return (
    <View className="flex-row justify-center items-center -ml-2">
            <BlurView
              intensity={18}
              className="ml-4 px-1 border-2 items-center border-gray-500 mt-10 w-[180px] h-[250px]"
            >
              <View className="flex-row mt-1 z-10">
                <View className="mr-28">
                  <TouchableOpacity onPress={()=>setLike1(!like1)}>
                  <Ionicons name={like1?"heart":"heart-outline"} size={24} color={like1?"red":"white"} />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={()=>setIsAddedToCart1(!isAddedToCart1)}>
                <Ionicons name={isAddedToCart1?"cart":"cart-outline"} size={26} color={isAddedToCart1?"orange":"white"} />
                </TouchableOpacity>
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
              <View className="flex-row mt-1 z-10">
                <View className="mr-28">
                <TouchableOpacity onPress={()=>setLike2(!like2)}>
                  <Ionicons name={like2?"heart":"heart-outline"} size={24} color={like2?"red":"white"} />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={()=>setIsAddedToCart2(!isAddedToCart2)}>
                <Ionicons name={isAddedToCart2?"cart":"cart-outline"} size={26} color={isAddedToCart2?"orange":"white"} />
                </TouchableOpacity>
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