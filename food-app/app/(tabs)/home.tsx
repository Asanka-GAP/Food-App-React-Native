import {
  View,
  Text,
  ScrollView,
  TextInput,
  Dimensions,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Carousel from "react-native-reanimated-carousel";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import Card from "@/components/Card";

const Home = () => {
  const image1 = require("../../assets/images/burger1.png");
  const image2 = require("../../assets/images/juice1.png");
  const image3 = require("../../assets/images/pizza1.png");
  const image4 = require("../../assets/images/springRoll1.png");
  const image5 = require("../../assets/images/milkShack1.png");
  const image6 = require("../../assets/images/noodle1.png");

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
          <Text className="text-white font-pmedium text-sm mt-3">
            welcome back,
          </Text>
          <Text className="text-white font-psemibold text-3xl">Jacob</Text>
          <View
            className="w-[390px] mt-4 h-16 px-4 border-2 ml-1
      border-black-500 bg-neutral-900 rounded-2xl
      focus:border-gray-300 items-center flex-row"
          >
            <TextInput
              placeholder="Search here"
              placeholderTextColor="#7b7b8b"
              className="w-full flex-1 text-white font-psemibold
text-base "
            />
            <Ionicons name="search" size={24} color="gray" />
          </View>
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
            image2={image4}
          />
          <View className="h-[100px]"></View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Home;
