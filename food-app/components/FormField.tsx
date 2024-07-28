import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

interface FormFieldProps{
    placeholder:string
    marginTop?:string
    isSetIcon?:boolean
    icon?:any
    title?:string
    handleChangeText?:any
}

const FormField = ({placeholder,handleChangeText,marginTop,isSetIcon,icon,title}:FormFieldProps) => {
    const [showPassword, setShowPassword] = useState(false)
  return (
    <View
          className={`w-[350px] h-16 px-4 border-2 ml-8 ${marginTop}
      border-black-500 bg-zinc-800 rounded-2xl
      focus:border-gray-300 items-center flex-row`}
        >
          <TextInput
            placeholder={placeholder}
            placeholderTextColor="#7b7b8b"
            onChangeText={handleChangeText}
            className="w-full flex-1 text-white font-psemibold text-base "
            secureTextEntry={title==="Password" && !showPassword}
          />
          {isSetIcon && (
        <Ionicons name={icon} size={24} color="gray" />
      )}
      {isSetIcon && title==="Password" &&(
        <TouchableOpacity onPress={()=>{setShowPassword(!showPassword)}}>
            <Ionicons name={!showPassword?"eye":"eye-off"} size={24} color="gray" />
        </TouchableOpacity>
      )}
        </View>
  )
}

export default FormField