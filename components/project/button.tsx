import { Pressable, Text } from "react-native"

type Props = {
    label : string;
    onPress : ()=> void;
    size : "small" | "regular" | "meddium" | "large"; 
}

export const Button = ({label, onPress, size} : Props) => {
    return <Pressable onPress={onPress} 
        className={`bg-primary flex justify-center items-center border-2 border-primary/40
            ${size === "large" && 'w-full h-14 rounded-2xl'}    
        `} 
    >
        <Text className="text-white text-xl font-semibold">{label}</Text>
    </Pressable>
}