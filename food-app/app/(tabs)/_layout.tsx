import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { router, Slot } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";
import { FIREBASE_AUTH, FIREBASE_DB } from "@/lib/firebase";

const TabLayout = () => {
  return (
    <View className="relative w-full h-full flex-1">
      <Slot />
      <View
        className="w-full rounded-t-[20px] absolute px-5 h-16 bottom-0
    bg-white flex-row items-center justify-between left-0 first-letter:"
      >
        <TouchableOpacity onPress={() => router.navigate("/home")}>
          <View className="items-center">
            <Ionicons name="home" size={24} color="black" />
            <Text className="text-black font-pmedium">Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.navigate("/favorite")}>
          <View className="items-center">
            <Ionicons name="bookmark" size={24} color="black" />
            <Text className="text-black font-pmedium">Favorite</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={goProfile}>
          <View className="items-center">
            <Ionicons name="person-sharp" size={24} color="black" />
            <Text className="text-black font-pmedium">Profile</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          router.navigate("/cart")}}>
          <View className="items-center">
            <Ionicons name="cart" size={24} color="black" />
            <Text className="text-black font-pmedium">Cart</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

async function goProfile() {
  const db = getFirestore();
  const docRef = doc(db, "user", FIREBASE_AUTH.currentUser?.uid);
  const docSnap = await getDoc(docRef);
  const data = docSnap.data();
  console.log(data);
  router.push({
    pathname: "/profile",
    params: {
      name: data.name,
      email: data.email,
      password: data.password,
    },
  });
}



export default TabLayout;
