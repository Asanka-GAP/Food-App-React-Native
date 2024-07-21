import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { router, Slot } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

const TabLayout = () => {
  return (
    <View className="relative w-full h-full flex-1">
      <Slot />
      <View
        className="w-full rounded-t-[20px] absolute px-5 h-16 bottom-0
    bg-white flex-row items-center justify-between left-0 first-letter:"
      >
        <TouchableOpacity onPress={()=>router.navigate("/home")}>
        <View className="items-center">
        <Ionicons name="home" size={24} color="black" />
          <Text
          className="text-black font-pmedium">Home</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>router.navigate("/favorite")}>
        <View className="items-center">
        <Ionicons name="bookmark" size={24} color="black" />
          <Text
          className="text-black font-pmedium">Favorite</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>router.navigate("/profile")}>
        <View className="items-center"><Ionicons name="person-sharp" size={24} color="black" />
          <Text
          className="text-black font-pmedium">Profile</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>router.navigate("/cart")}>
        <View className="items-center">
        <Ionicons name="cart" size={24} color="black" />
        <Text
          className="text-black font-pmedium">Cart</Text>
        </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TabLayout;
