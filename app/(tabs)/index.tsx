import { BgInternalScreen } from "@/components/bg-internal-screen";
import { RotuleInfos } from "@/components/home/rotule-infos";
import { Page } from "@/components/project/page";
import { Image, Text, View } from "react-native";

export default function Screen() {
  return (
    <Page type={true}>
      <View className="flex-1 bg-themeDark">
        <BgInternalScreen>
          <View className="flex-1 items-center gap-8 w-[400px]">
            <Image
              source={require("../../assets/home/credit-card-image.png")}
              className="-mt-20 w-[263px] h-[145px] mb-8"
            />
            <RotuleInfos label="Recebimentos:" value={0} color="#24C467" />
            <RotuleInfos label="Despesas:" value={0} color="#FD6F70" />
            <RotuleInfos label="Saldo:" value={0} color="#24C467" />
          </View>
        </BgInternalScreen>
      </View>
    </Page>
  );
}
