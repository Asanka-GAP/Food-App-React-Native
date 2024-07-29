import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import HorizontalCard from "@/components/HorizontalCard";
import { router } from "expo-router";
import { fetchCartList } from "@/lib/firebase";

const Cart = () => {
  const [posts, setPosts] = useState(new Array());

  const image1 = require("../../assets/images/burger1.png");
  const image2 = require("../../assets/images/juice1.png");
  const image3 = require("../../assets/images/pizza1.png");
  const image4 = require("../../assets/images/springRoll1.png");
  const image5 = require("../../assets/images/milkShack1.png");
  const image6 = require("../../assets/images/noodle1.png");
  const delivery = require("../../assets/images/delivery.png");

  React.useEffect(() => {
    getCartList();
  }, []);

  async function getCartList() {
    const postData = await fetchCartList();
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
            <Ionicons name="add-circle-sharp" size={40} color="white" />
          </View>
          <TouchableOpacity
            onPress={() => {
              router.navigate("/home")}}
            className="absolute h-[50px] w-[250px] rounded-2xl bg-white justify-center items-center mt-3 ml-[150px]"
          >
            <Text className=" text-lg font-psemibold ">Place Order 100$</Text>
          </TouchableOpacity>

          <FlatList
          className="mb-20"
            data={posts}
            renderItem={({ item }) => (
              <HorizontalCard
                title={item.title}
                price={item.price}
                direction={true}
                image={item.image}
              />
            )}
          />

        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Cart;
