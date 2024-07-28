import { View, ScrollView ,Text, TextInput} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import FormField from "@/components/FormField";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { FIREBASE_AUTH } from "@/lib/firebase";
import { useGlobalSearchParams } from "expo-router";

const Profile = () => {
  const {name,email,password} = useGlobalSearchParams();
  return (
    <LinearGradient
      className="w-full h-full"
      colors={["#2D3436", "#000000"]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
    >
      <SafeAreaView className="h-full w-full">
        <ScrollView className="h-full">
          <View className="h-52 w-full justify-center items-center">
            <View className="h-32 w-32 rounded-full bg-slate-600  justify-center items-center -mb-4">
              <Ionicons name="person" size={45} color="white" />
              
            </View>
            <Text className="text-white font-psemibold mt-6 text-3xl">{name}</Text>
          </View>
          <View>
            <Text className="text-white ml-10 text-xl font-pmedium">User Name</Text>
            <FormField
            placeholder="User Name"
            marginTop="mt-2"
            value={name}
            />
          </View>
          <View className="mt-3">
            <Text className="text-white ml-10 text-xl font-pmedium">Email</Text>
            <FormField
            placeholder="Email"
            marginTop="mt-2"
            value={email}
            />
          </View>
          <View className="mt-3">
            <Text className="text-white ml-10 text-xl font-pmedium">Password</Text>
            <FormField
            title="Password"
            placeholder="password"
            marginTop="mt-2"
            isSetIcon={true}
            value={password}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};


export default Profile;
