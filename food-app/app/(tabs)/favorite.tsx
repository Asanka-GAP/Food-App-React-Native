import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import HorizontalCard from "@/components/HorizontalCard";
import { router } from "expo-router";
import { fetchFavorite, FIREBASE_AUTH } from "@/lib/firebase";

const Favorite = () => {
  const [posts, setPosts] = useState(new Array());

  React.useEffect(() => {
    getFavoriteList();
  }, []);

  async function getFavoriteList() {
    const postData = await fetchFavorite();
    setPosts(postData.posts);
  }

  return (
    <LinearGradient
      className="w-full h-full"
      colors={["#2D3436", "#000000"]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
    >
      <SafeAreaView className="h-full">
        <View className="h-full">
          <View className=" ml-5 mt-5">
            <TouchableOpacity>
              <Ionicons name="notifications" size={30} color="white" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={
              () => {
                FIREBASE_AUTH.signOut();
                router.navigate("/signIn");
              }}
            className="ml-[360px] -mt-10 z-10"
          >
            <Ionicons name="log-out-outline" size={40} color="white" />
          </TouchableOpacity>

          <FlatList
            className="mb-20"
            data={posts}
            renderItem={({ item }) => (
              <HorizontalCard
                title={item.title}
                price={item.price}
                direction={false}
                image={item.image}
              />
            )}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Favorite;
