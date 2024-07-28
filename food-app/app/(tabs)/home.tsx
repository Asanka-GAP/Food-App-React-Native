import { View, Text, ScrollView, TextInput, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Carousel from "react-native-reanimated-carousel";
import { LinearGradient } from "expo-linear-gradient";
import Card from "@/components/Card";
import FormField from "@/components/FormField";
import { FIREBASE_AUTH } from "@/lib/firebase";
import { router, useGlobalSearchParams } from "expo-router";


const Home = () => {

  const {userId} = useGlobalSearchParams();

  const image1 = require("../../assets/images/burger1.png");
  const image2 = require("../../assets/images/juice1.png");
  const image3 = require("../../assets/images/pizza1.png");
  const image4 = require("../../assets/images/springRoll1.png");
  const image5 = require("../../assets/images/milkShack1.png");
  const image6 = require("../../assets/images/noodle1.png");
  const delivery = require("../../assets/images/delivery.png");

  
  const width = 390;
  const list = [
    {
      id: 1,
      title: "1st",
      image: require("../../assets/images/img3.jpg"),
    },
    {
      id: 2,
      title: "2nd",
      image: require("../../assets/images/img13.jpg"),
    },
    {
      id: 3,
      title: "3rd",
      image: require("../../assets/images/img5.jpg"),
    },
    {
      id: 4,
      title: "4th",
      image: require("../../assets/images/img6.jpg"),
    },
    {
      id: 5,
      title: "5th",
      image: require("../../assets/images/img8.jpg"),
    },
  ];
  return (
    <LinearGradient
      className="w-full h-full"
      colors={["#2D3436", "#000000"]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
    >
      <SafeAreaView className="h-full">
        <ScrollView className="h-full">
          <Text className="text-white font-pmedium text-sm mt-3 ml-3">
            welcome back,
          </Text>
          <Text className="text-white font-psemibold text-3xl ml-3">{userId}</Text>
          <View className="absolute ml-[325px] mt-5 flex-row space-x-4">
            <Ionicons name="notifications" size={24} color="white" />
            <TouchableOpacity onPress={()=>{FIREBASE_AUTH.signOut()
              router.navigate('/signIn')
            }}>
            <Ionicons name="log-out-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <FormField
            marginTop="mt-5"
            placeholder="Search Here"
            isSetIcon={true}
            icon="search"
          />
          <View className="flex-1 mt-2 px-3">
            <Carousel
              width={width}
              height={width / 2}
              data={list}
              autoPlay={true}
              renderItem={({ item }) => (
                <View className="flex-1 mt-6 overflow-hidden justify-center">
                  <Image
                    source={item.image}
                    resizeMode="cover"
                    className="w-full h-full"
                  />
                </View>
              )}
            />
          </View>
          <Card
            title1="Burger"
            title2="Lemon"
            subtitle1="beef buger"
            subtitle2="Lemon cocktail"
            price1="10$"
            price2="1$"
            image1={image1}
            image2={image2}
          />
          <Card
            title1="Pizza"
            title2="Spring Roll"
            subtitle1="Chicken Pizza"
            subtitle2="Egg Spring Roll"
            price1="15$"
            price2="10$"
            image1={image3}
            image2={image4}
          />
          <Card
            title1="Milk Shake"
            title2="Noodle"
            subtitle1="Choco Milk Shake"
            subtitle2="Noodle with Vegi"
            price1="3$"
            price2="6$"
            image1={image5}
            image2={image6}
          />
          <View className="h-[200px] w-[390px] ml-3 rounded-xl bg-yellow-500 mt-6 mb-[100px]">
            <View className="flex-row justify-center items-center">
              <View>
                <Text className="text-white font-pbold text-xl ml-16 w-[130px]">
                  The Fastest food
                </Text>
              </View>
              <Text className="-ml-[72px] mt-8 text-red-600 font-pbold text-xl">
                Delivery
              </Text>
              <View className="-ml-8">
                <Image
                  source={delivery}
                  resizeMode="contain"
                  className="w-[250px] h-[200px] mr-6"
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Home;
