import { TranslateInReal } from "@/functios/translate-in-real";
import { Text, View, Pressable } from "react-native";

type Props = {
  label: string;
  value: number;
  active?: boolean;
  color?: string;
  onPress ?: () => void; 
};

export const Header = ({ label, value, active, color, onPress }: Props) => {
  return (
    <View className="w-80  justify-center items-center">
      <Text className="text-themeDark uppercase text-xl mb-1 font-bold">
        {label}
      </Text>
      {active && (
        <Text style={{ fontSize: 30, fontWeight: "bold", color: color }}>
          {TranslateInReal(value)}
        </Text>
      )}
      <Pressable
        className={`px-8 py-3 rounded-lg mt-2`}
        style={{ backgroundColor: color }}
        onPress={() => {}}
      >
        <Text className="text-white uppercase" onPress={onPress}>Adicionar</Text>
      </Pressable>
    </View>
  );
};
