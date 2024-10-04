import { Pressable, Text, View } from "react-native"
import Icon from '@expo/vector-icons/FontAwesome6'
import { ReactNode } from "react";

type Props = {
    title : string;
    onPress : () => void;
    children : ReactNode;
}

export const ButtonCard = ({ title, onPress, children } : Props) => {
    return <Pressable onPress={onPress} className="px-4 py-8">
        <View className="flex-row justify-between items-center mb-4">
            <Text className="text-2xl font-semibold">{title}</Text>
            <View className="mr-3">
                <Icon name="chevron-right" size={18} color="black"  />
            </View>
        </View>
        {children}
    </Pressable>
}