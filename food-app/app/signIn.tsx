import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import FormField from "@/components/FormField";

const SignIn = () => {
  const image = require("../assets/images/img3.jpg");
  return (
    <SafeAreaView className="bg-black h-full w-full">
        <ScrollView>
        <Image
        source={image}
        resizeMode="cover"
        className="w-full h-[400px] rounded-b-[40px]"
      />
      <Text className="text-white text-4xl font-pmedium mt-[180px] ml-[75px] absolute">
        FoodieFiesta
      </Text>
      <Text className="text-white font-pmedium text-2xl text-center mt-4">
        Welcome Back
      </Text>
      <View className="w-full h-[100px] mt-8">
        <Text className="text-white font-pregular text-[17px] ml-9">Email</Text>
        <FormField
        placeholder="Email"
        />
      </View>
      <View className="w-full h-[100px] mt-3">
        <Text className="text-white font-pregular text-[17px] ml-9">Password</Text>
        <FormField
        title="Password"
        placeholder="Password"
        isSetIcon={true}
        />
      </View>
      <TouchableOpacity onPress={()=>router.navigate("/home")} className=" h-[50px] w-[350px] rounded-2xl bg-white items-center mt-5 pt-2 ml-[32px]">
          <Text className=" text-xl font-psemibold ">
            Sign In
          </Text>
        </TouchableOpacity>
        <View className="flex-row items-center justify-center gap-2 mt-1">
        <Text className="text-gray-400 mt-3 text-center text-[16px] font-pregular">Don't have an account?</Text>
        <Link
        href="/signUp"
        className="text-white font-pregular">Sign Up</Link>
        </View>
        </ScrollView>
      
    </SafeAreaView>
  );
};

export default SignIn;
