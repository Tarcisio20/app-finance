import { Page } from "@/components/project/page";
import { Text, View } from "react-native";
import { useIsFocused } from "@react-navigation/native";

export default function Screen() {
  const isFocused = useIsFocused();
  return (
    <Page type={true}>
      <View className="flex-1 bg-secondary">
        <Text className="text-white">Aqui vem a variavel{isFocused}</Text>
      </View>
    </Page>
  );
}
