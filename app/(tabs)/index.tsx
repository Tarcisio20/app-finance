import { Page } from "@/components/project/page";
import { Text, View } from "react-native";

export default function Screen() {

  return (
    <Page type={true}>
      <View className="flex-1 bg-themeDark">
        <Text className="text-white">Aqui vem a variavel</Text>
      </View>
    </Page>
  );
}
