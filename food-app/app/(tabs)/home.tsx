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
    <LinearGradient className="w-full h-full"
    colors={["#2D3436","#000000"]}
    start={{x:0,y:0.5}}
    end={{x:1,y:0.5}}>
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
        <View className="flex-row justify-center items-center -ml-2">
        <BlurView intensity={18} className="ml-4 px-1 border-2 items-center border-gray-500 mt-10 w-[180px] h-[250px]">
          <View className="flex-row mt-1"><View className="mr-28">
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
            Burger
          </Text>
          <Text className="text-gray-300 ml-1 -mt-1 font-pregular text-sm">
            Beef Burger
          </Text>
          <Text className="text-white ml-[130px] font-pmedium text-xl mt-1">
            10$
          </Text>
        </BlurView>
        <BlurView intensity={18} className="ml-4 px-1 border-2 items-center border-gray-500 mt-10 w-[180px] h-[250px]">
          <View className="flex-row mt-1"><View className="mr-28">
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
            Lemon
          </Text>
          <Text className="text-gray-300 ml-1 -mt-1 font-pregular text-sm">
          Lemon Cocktail</Text>
          <Text className="text-white ml-[130px] font-pmedium text-xl mt-1">
            1$
          </Text>
        </BlurView>
        </View>
        <View className="flex-row justify-center items-center -ml-2">
        <BlurView intensity={18} className="ml-4 px-1 border-2 items-center border-gray-500 mt-10 w-[180px] h-[250px]">
          <View className="flex-row mt-1"><View className="mr-28">
          <Ionicons name="heart" size={24} color="white" />
          </View>
          <Ionicons name="cart" size={24} color="white" />
          </View>
          <Image
            source={image3}
            className="h-[200px] w-[150px] -mt-9"
            resizeMode="contain"
          />
          <Text className="text-white ml-1 font-psemibold text-xl -mt-8">
            Pizza
          </Text>
          <Text className="text-gray-300 ml-1 -mt-1 font-pregular text-sm">
            Beef Pizza
          </Text>
          <Text className="text-white ml-[130px] font-pmedium text-xl mt-1">
            15$
          </Text>
        </BlurView>
        <BlurView intensity={18} className="ml-4 px-1 border-2 items-center border-gray-500 mt-10 w-[180px] h-[250px]">
          <View className="flex-row mt-1"><View className="mr-28">
          <Ionicons name="heart" size={24} color="white" />
          </View>
          <Ionicons name="cart" size={24} color="white" />
          </View>
          <Image
            source={image4}
            className="h-[200px] w-[150px] -mt-9"
            resizeMode="contain"
          />
          <Text className="text-white ml-1 font-psemibold text-xl -mt-8">
            Spring Roll
          </Text>
          <Text className="text-gray-300 ml-1 -mt-1 font-pregular text-sm">
            Egg Spring Roll
          </Text>
          <Text className="text-white ml-[130px] font-pmedium text-xl mt-1">
            10$
          </Text>
        </BlurView>
        </View>
        <View className="flex-row justify-center items-center -ml-2">
        <BlurView intensity={18} className="ml-4 px-1 border-2 items-center border-gray-500 mt-10 w-[180px] h-[250px]">
          <View className="flex-row mt-1"><View className="mr-28">
          <Ionicons name="heart" size={24} color="white" />
          </View>
          <Ionicons name="cart" size={24} color="white" />
          </View>
          <Image
            source={image5}
            className="h-[160px] w-[110px] -mt-4"
            resizeMode="contain"
          />
          <Text className="text-white ml-1 font-psemibold text-xl -mt-1">
          Milk Shake
          </Text>
          <Text className="text-gray-300 ml-1 -mt-1 font-pregular text-sm">
            Choco Milk Shake
          </Text>
          <Text className="text-white ml-[130px] font-pmedium text-xl -mt-1">
            3$
          </Text>
        </BlurView>
        <BlurView intensity={18} className="ml-4 px-1 border-2 items-center border-gray-500 mt-10 w-[180px] h-[250px]">
          <View className="flex-row mt-1"><View className="mr-28">
          <Ionicons name="heart" size={24} color="white" />
          </View>
          <Ionicons name="cart" size={24} color="white" />
          </View>
          <Image
            source={image6}
            className="h-[200px] w-[150px] -mt-9"
            resizeMode="contain"
          />
          <Text className="text-white ml-1 font-psemibold text-xl -mt-8">
            Noodle
          </Text>
          <Text className="text-gray-300 ml-1 -mt-1 font-pregular text-sm">
            Noodle with Vegi
          </Text>
          <Text className="text-white ml-[130px] font-pmedium text-xl mt-1">
            6$
          </Text>
        </BlurView>
        </View>
        <View className="h-[100px]">

        </View>
      </ScrollView>
    </SafeAreaView>
    </LinearGradient>
    
  );
};

export default Home;
