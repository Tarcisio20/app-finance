import { Header } from "@/components/screens-received-paymants/header";
import { Table } from "@/components/screens-received-paymants/table";
import { TableItem } from "@/components/screens-received-paymants/table-item";
import { BgInternalScreen } from "@/components/bg-internal-screen";
import { Page } from "@/components/project/page";
import { TranslateInReal } from "@/functios/translate-in-real";
import { Received } from "@/types/Received";
import { Image, ScrollView, Text, View } from "react-native";

export default function Screen() {

  const data : Received[] = [
    {id : 1, date : '01/10/2024', name : 'Receita 1', value : '1000'},
    {id : 2, date : '01/10/2024', name : 'Receita 2', value : '1000'},
    {id : 3, date : '01/10/2024', name : 'Receita 3', value : '1000'},
    {id : 4, date : '01/10/2024', name : 'Receita 4', value : '1000'},
    {id : 5, date : '01/10/2024', name : 'Receita 5', value : '1000'},
  ]

  return (
    <Page type={true}>
      <View className="flex-1 bg-themeDark">
        <BgInternalScreen>
          <View className="flex-1 items-center w-[360px]">
            <Image
              source={require("../../assets/pig-green.png")}
              className="-mt-20 w-[150px] h-[150px] -ml-10 mb-4"
            />
            <View className="justify-center items-center mb-3">
              <Header label="TOTAIS DE ENTRADAS" active value={0} color="#24C467" />
            </View>
            <View className="w-full flex-row justify-between border-b-[3px] border-themeDark mx-1">
              <Text className="text-center text-base text-white ml-2">Data</Text>
              <Text className="text-center text-base text-white" >Nome</Text>
              <Text className="text-center text-base text-white mr-2" >Valor</Text>
            </View>
            <View className="w-full">
              <Table data={data} />
            </View>
          </View>
        </BgInternalScreen>
      </View>
    </Page>
  );
}
