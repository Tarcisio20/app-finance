import { Header } from "@/assets/screens-received-paymants/header";
import { BgInternalScreen } from "@/components/bg-internal-screen";
import { Page } from "@/components/project/page";
import { Image, Text, View } from "react-native";

export default function Screen() {
  return (
    <Page type={true}>
      <View className="flex-1 bg-themeDark">
        <BgInternalScreen>
          <View className="flex-1 items-center gap-6 w-[400px]">
            <Image
              source={require("../../assets/pig-green.png")}
              className="-mt-20 w-[150px] h-[150px] -ml-12 mb-8"
            />
            <Header label="total de entradas" />
          </View>
        </BgInternalScreen>
      </View>
    </Page>
  );
}
