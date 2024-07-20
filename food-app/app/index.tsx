import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

const index = () => {
  const image = require("../assets/images/img4.jpg");
  return (
    <SafeAreaView className="h-full w-full justify-center items-center">
      <Image
        source={image}
        className="h-[800px] w-full mt-[100px]"
        resizeMode="cover"
      />
      <View className="bg-black rounded-t-[30px] w-full h-[700px] -mt-[50px] relative items-center">
        <Text className="text-white text-3xl font-pmedium mt-7">
          FoodieFiesta
        </Text>
        <Text className="text-gray-400 mt-3 text-center">
          Introducing FoodieFiesta, your go-to app for delicious meals delivered
          to your doorstep. Explore a variety of cuisines, get personalized
          recommendations, and enjoy a seamless ordering experience. With Yumly,
          satisfying your cravings has never been easier
        </Text>
        <TouchableOpacity onPress={()=>router.navigate('/signIn')} className=" h-[50px] w-[300px] rounded-[100px] bg-white items-center mt-7 pt-2">
          <Text className=" text-2xl font-roboto2 ">
            Get Start
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default index;
