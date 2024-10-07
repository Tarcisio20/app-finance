import { TranslateInReal } from "@/functios/translate-in-real";
import { Text, View } from "react-native";

type Props = {
  label: string;
  value: number;
  active ?: boolean;
  color ?: string;
};

export const Header = ({ label, value, active, color }: Props) => {
  return (
    <View className="w-80  justify-center items-center">
      <Text className="text-themeDark uppercase text-2xl mb-1 font-bold">{label}</Text>
      {active && (
        <Text style={{ fontSize : 40, fontWeight : 'bold', color : color  }} >{TranslateInReal(value)}</Text>
      )}
    </View>
  );
};
