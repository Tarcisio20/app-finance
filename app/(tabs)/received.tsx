import { Header } from "@/components/screens-received-paymants/header";
import { BgInternalScreen } from "@/components/bg-internal-screen";
import { Page } from "@/components/project/page";
import { Received } from "@/types/Received";
import { Image, Text, View, FlatList } from "react-native";
import { useMemo, useRef, useState } from "react";
import { TableItem } from "@/components/screens-received-paymants/table-item";
import BottomSheet from "@gorhom/bottom-sheet";

export default function Screen() {
  const data: Received[] = [
    { id: 1, date: "01/10/2024", name: "Receita 1", value: "1000" },
    { id: 2, date: "01/10/2024", name: "Receita 2", value: "1000" },
    { id: 3, date: "01/10/2024", name: "Receita 3", value: "1000" },
    { id: 4, date: "01/10/2024", name: "Receita 4", value: "1000" },
    { id: 5, date: "01/10/2024", name: "Receita 5", value: "1000" },
    { id: 6, date: "01/10/2024", name: "Receita 5", value: "1000" },
    { id: 7, date: "01/10/2024", name: "Receita 5", value: "1000" },
    { id: 8, date: "01/10/2024", name: "Receita 5", value: "1000" },
    { id: 9, date: "01/10/2024", name: "Receita 5", value: "1000" },
    { id: 10, date: "01/10/2024", name: "Receita 5", value: "1000" },
  ];

  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["30%", "80%", "90%"], []);

  const closeModal = () => {
    bottomSheetRef.current?.close();
  };

  const openModal = () => bottomSheetRef.current?.expand();

  return (
    <Page type={true}>
      <View className="flex-1 bg-themeDark">
        <BgInternalScreen>
          <View className="flex-1 items-center w-[360px]">
            <Image
              source={require("../../assets/pig-green.png")}
              className="-mt-20 w-[150px] h-[150px] mb-2"
            />
            <View className="justify-center items-center mb-3">
              <Header
                label="TOTAIS DE ENTRADAS"
                active
                value={0}
                color="#24C467"
              />
            </View>
            <View className="w-full flex-row justify-between border-b-[3px] border-themeDark mx-1">
              <Text className="text-center text-base text-white ml-2">
                Data
              </Text>
              <Text className="text-center text-base text-white">Nome</Text>
              <Text className="text-center text-base text-white mr-2">
                Valor
              </Text>
            </View>
            <View className="w-full">
              <FlatList
                className="w-full mt-1"
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <TableItem item={item} open={openModal} />
                )}
              />
            </View>
          </View>
        </BgInternalScreen>
      </View>
    </Page>
  );
}
