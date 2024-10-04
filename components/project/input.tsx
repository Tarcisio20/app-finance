import { useState } from "react";
import { Text, TextInput, View } from "react-native"

type Props = {
    label ?: string;
    placeholder ?: string;
    password ?: boolean;
    value : string;
    border ?: boolean;
    onChangeText : (newValue : string)=> void
}

export const Input = ({ label, placeholder, password = false, value, onChangeText } : Props) => {

    const [onFocus, setOnFocus] = useState(false)

    return <View className="">
        {label && 
            <Text className="text-white font-regular text-xl pl-3 mb-2">{label}</Text>
        }
        <View className={`bg-themeGray/20 border-[2px] px-3 ${onFocus ? 'border-primary' : 'border-themeGray'} h-[55px] rounded-2xl`}>
            <TextInput
                placeholder={placeholder}
                secureTextEntry={password}
                value={value}
                onChangeText={e=>onChangeText(e)}
                onFocus={()=>setOnFocus(true)}
                onBlur={()=>setOnFocus(false)}
                className="flex-1 font-regular text-xl text-white"
                placeholderTextColor={'#FFFFFF'}
            />
        </View>
    </View>
}