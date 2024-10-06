import { Text, View } from "react-native";

type Props = {
  label: string;
  value?: number;
};

export const Header = ({ label, value }: Props) => {
  return (
    <View className="w-80 bg-red-500 -ml-20  justify-center items-center">
      <Text className="text-white uppercase">{label}</Text>
    </View>
  );
};
