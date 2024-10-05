import { TranslateInReal } from "@/functios/translate-in-real";
import { Text, View } from "react-native";

type  Props = {
    label : string;
    value : number;
    color ?: string;
}

export const RotuleInfos = ({ label, value, color } : Props) => {
    return <View className="text-start">
        <Text>{label}</Text>
        <View>
            <Text className={``} style={{ color : color || '#FFF' }} >{TranslateInReal(value)}</Text>
        </View>
    </View>
}