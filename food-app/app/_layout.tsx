import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import {Slot, SplashScreen} from 'expo-router'
import {useFonts} from 'expo-font'

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
    const [fontsLoaded,error] = useFonts({
        "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
        "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
        "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
        "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
        "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
        "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
        "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
        "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
        "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
        "Roboto-1":require("../assets/fonts/RobotoCondensed-Italic-VariableFont_wght.ttf"),
        "Roboto-2":require("../assets/fonts/RobotoCondensed-VariableFont_wght.ttf"),
        });
        useEffect(()=>{
      if (error) {
        throw error;
      }if (fontsLoaded) {
        SplashScreen.hideAsync();
      }
        },[fontsLoaded,error])
      
        if (!fontsLoaded && !error) {
          return null;
        }
  return (
    <Slot/>
  )
}

export default RootLayout