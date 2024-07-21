import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { BlurView } from "expo-blur";
import { MaterialIcons } from "@expo/vector-icons";

interface Props {
  direction: boolean;
  image: any;
  title:string;
  price:number;
}

const HorizontalCard = ({ direction, image,title,price }: Props) => {
    var [qty, setQty] = useState(100)
  return (
    direction?
    <BlurView
      intensity={23}
      className="h-[160px] w-96 ml-3 mt-5 border-r-8 border-r-white flex-row"
    >
      <View className="w-full">
        <Image
          source={image}
          resizeMode="contain"
          className="h-[250px] w-[150px] -mt-12"
        />
      </View>
      <View className="-ml-[170px] mt-2">
        <Text className="text-white font-pmedium text-lg -ml-5">{title}</Text>
        <TouchableOpacity className="mt-1 ml-[130px] absolute z-10">
        <MaterialIcons name="delete" size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-white font-pregular mt-3 text-md -ml-10">
          Price :
        </Text>
        <Text className="text-white font-pregular -mt-[26px] text-md ml-24">
          {`${price} $`}
        </Text>
        <Text className="text-white font-pregular -mt-1 text-md -ml-10">
          Availability :
        </Text>
        <Text className="text-white font-pregular -mt-[26px] text-md ml-20">
          available
        </Text>
        <View className="flex-row">
        <TouchableOpacity className="z-10" onPress={()=>setQty(qty>0?qty--:0)}>
          <View className="w-6 h-6 rounded-md bg-white mt-2 -ml-10 justify-center items-center">
            <Text className="text-2xl -mt-1 font-pregular">-</Text>
          </View>
        </TouchableOpacity>
        <View className="mt-2 -ml-2">
        <Text className="text-white font-pmedium">
            {qty}
        </Text>
        </View>
        <TouchableOpacity className="-ml-4 z-10" onPress={()=>setQty(qty++)}>
          <View className="w-6 h-6 rounded-md bg-white mt-2 ml-6 justify-center items-center">
            <Text className="text-xl -mt-1 font-pregular">+</Text>
          </View>
        </TouchableOpacity>
        </View>
        <View className="ml-20 -mt-3">
            <Text className="text-white font-psemibold text-xl">
                {`${qty*price} $`}
            </Text>
        </View>
      </View>
    </BlurView>:
    <BlurView
      intensity={23}
      className="h-[160px] w-96 ml-3 mt-5 border-l-8 border-l-white flex-row"
    >
    <View className="-mr-[170px] mt-2">
        <Text className="text-white font-pmedium text-lg ml-14">{title}</Text>
        <TouchableOpacity className="-mt-1 ml-[5px] absolute z-10">
        <MaterialIcons name="delete" size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-white font-pregular mt-3 text-md ml-3">
          Price :
        </Text>
        <Text className="text-white font-pregular -mt-[26px] text-md ml-32">
          {`${price} $`}
        </Text>
        <Text className="text-white font-pregular -mt-1 text-md ml-3">
          Availability :
        </Text>
        <Text className="text-white font-pregular -mt-[26px] text-md ml-32">
          available
        </Text>
        <View className="flex-row ml-6 justify-between">
        <TouchableOpacity className="z-10" onPress={()=>setQty(qty>0?qty--:0)}>
          <View className="w-6 h-6 rounded-md bg-white mt-2 mr-10 justify-center items-center">
            <Text className="text-2xl -mt-1 font-pregular">-</Text>
          </View>
        </TouchableOpacity>
        <View className="mt-2 -ml-[150px]">
        <Text className="text-white font-pmedium">
            {qty}
        </Text>
        </View>
        <TouchableOpacity className=" z-10" onPress={()=>setQty(qty++)}>
          <View className="w-6 h-6 rounded-md bg-white mt-2 -ml-28 justify-center items-center">
            <Text className="text-xl font-pregular -mt-1">+</Text>
          </View>
        </TouchableOpacity>
        </View>
        <View className="ml-40 mt-28 absolute w-[100px]">
            <Text className="text-white font-psemibold text-xl">
                {`${qty*price} $`}
            </Text>
        </View>
      </View>
      <View className="w-full ml-48">

        <Image
          source={image}
          resizeMode="contain"
          className="h-[250px] w-[150px] -mt-12"
        />
      </View>
    </BlurView>
  );
};

export default HorizontalCard;
