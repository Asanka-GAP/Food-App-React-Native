import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { Link } from "expo-router";

const SignUp = () => {
  const image = require("../assets/images/img6.jpg");
  return (
    <SafeAreaView className="bg-black h-fll w-full">
      <ScrollView>
      <Image
          source={image}
          resizeMode="cover"
          className="w-full h-[400px]"
        />
        <Text className="text-white text-4xl font-pmedium mt-[180px] ml-[75px] absolute">
          FoodieFiesta
        </Text>
        <View className="-mt-[60px] bg-black h-[600px] rounded-t-[35px]">
        <Text className="text-white font-pmedium text-2xl text-center mt-7">
          Join with us{" "}
        </Text>
        <View className="w-full h-[100px] mt-8">
          <Text className="text-white font-pregular text-[17px] ml-9">
            User Name
          </Text>
          <View
            className="w-[350px] h-16 px-4 border-2 ml-8
      border-black-500 bg-zinc-800 rounded-2xl
      focus:border-gray-300 items-center flex-row"
          >
            <TextInput
              placeholder="User Name"
              placeholderTextColor="#7b7b8b"
              className="w-full flex-1 text-white font-psemibold
text-base "
            />
          </View>
        </View>
        <View className="w-full h-[100px]">
          <Text className="text-white font-pregular text-[17px] ml-9">
            Email
          </Text>
          <View
            className="w-[350px] h-16 px-4 border-2 ml-8
      border-black-500 bg-zinc-800 rounded-2xl
      focus:border-gray-300 items-center flex-row"
          >
            <TextInput
              placeholder="Email"
              placeholderTextColor="#7b7b8b"
              className="w-full flex-1 text-white font-psemibold
text-base "
            />
          </View>
        </View>
        <View className="w-full h-[100px] ">
          <Text className="text-white font-pregular text-[17px] ml-9">
            Password
          </Text>
          <View
            className="w-[350px] h-16 px-4 border-2 ml-8
      border-black-500 bg-zinc-800 rounded-2xl
      focus:border-gray-300 items-center flex-row"
          >
            <TextInput
              placeholder="Password"
              placeholderTextColor="#7b7b8b"
              className="w-full flex-1 text-white font-psemibold
text-base "
            />
          </View>
        </View>
        <TouchableOpacity className=" h-[50px] w-[350px] rounded-2xl bg-white items-center mt-5 pt-2 ml-[32px]">
          <Text className=" text-xl font-psemibold ">Sign Up</Text>
        </TouchableOpacity>
        <View className="flex-row items-center justify-center gap-2 mt-1">
          <Text className="text-gray-400 mt-3 text-center text-[16px] font-pregular">
            Do you have an account?
          </Text>
          <Link href="/signIn" className="text-white font-pregular">
            Sign In
          </Link>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
