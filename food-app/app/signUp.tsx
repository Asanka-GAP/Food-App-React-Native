import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Link, router } from "expo-router";
import FormField from "@/components/FormField";
import { initializeApp } from "@firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "@firebase/auth";
import { FIREBASE_AUTH } from "@/lib/firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const submit = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth,email,password);
      console.log(response);
      Alert.alert('SignUp process successfully');
      router.replace('/home');
    } catch (error:any) {
      Alert.alert('Sign up failed',error.message)
    }finally{
      setLoading(false);
    }
  };

  const image = require("../assets/images/img6.jpg");
  return (
    <SafeAreaView className="bg-black h-fll w-full">
      <ScrollView>
        <Image source={image} resizeMode="cover" className="w-full h-[400px]" />
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
            <FormField placeholder="User Name" />
          </View>
          <View className="w-full h-[100px]">
            <Text className="text-white font-pregular text-[17px] ml-9">
              Email
            </Text>
            <FormField
              placeholder="Email"
              handleChangeText={(text:string)=>setEmail(text)}
            />
          </View>
          <View className="w-full h-[100px] ">
            <Text className="text-white font-pregular text-[17px] ml-9">
              Password
            </Text>
            <FormField
              title="Password"
              placeholder="Password"
              isSetIcon={true}
              handleChangeText={(text: string) =>
                setPassword(text)
              }
            />
          </View>
          <View className="w-full h-[100px] ">
            <Text className="text-white font-pregular text-[17px] ml-9">
              Confirm Password
            </Text>
            <FormField
              title="Password"
              placeholder="Re enter Password"
              isSetIcon={true}
            />
          </View>
          <TouchableOpacity
            onPress={submit}
            className=" h-[50px] w-[350px] rounded-2xl bg-white items-center mt-5 pt-2 ml-[32px]"
          >
            <Text className=" text-xl font-psemibold ">Sign Up</Text>
          </TouchableOpacity>
          <View className="flex-row items-center justify-center gap-2 mt-[1px]">
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
