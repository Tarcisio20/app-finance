import { TranslateInReal } from "@/functios/translate-in-real";
import { Text, View } from "react-native";

type Props = {
  label: string;
  value: number;
  color?: string;
};

export const RotuleInfos = ({ label, value, color }: Props) => {
  return (
    <View className="text-start w-[350px]">
      <Text className="text-2xl text-themeDark mb-[10px]">{label}</Text>
      <View className="justify-center items-center">
        <Text
          className={`font-bold text-[40px]`}
          style={{ color: color || "#FFF" }}
        >
          {TranslateInReal(value)}
        </Text>
      </View>
    </View>
  );
};
