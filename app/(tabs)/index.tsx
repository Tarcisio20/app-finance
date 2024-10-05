import { BgInternalScreen } from "@/components/bg-internal-screen";
import { Page } from "@/components/project/page";
import { Image, Text, View } from "react-native";

export default function Screen() {

  return (
    <Page type={true}>
      <View className="flex-1 bg-themeDark">
            <BgInternalScreen>
                <View className="flex-1 items-center">
                    <Image source={require('../../assets/home/credit-card-image.png')} className="-mt-20 w-[263px] h-[145px]" />
                </View>
            </BgInternalScreen>
      </View>
    </Page>
  );
}
