import { Header } from "@/components/screens-received-paymants/header";
import { BgInternalScreen } from "@/components/bg-internal-screen";
import { Page } from "@/components/project/page";
import { Received } from "@/types/Received";
import { Image, Text, View, FlatList, Modal, Pressable } from "react-native";
import { useState } from "react";
import { TableItem } from "@/components/screens-received-paymants/table-item";
import { ModalComponent } from "@/components/screens-received-paymants/modal";
import { Input } from "@/components/project/input";
import { Error } from "@/components/screens-received-paymants/error";

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

  const [modal, setModal] = useState(false)
  const [modalCancel, setModalCancel] = useState(false)
  const [modalAdd, setModalAdd] = useState(false)
  const [idElement, setIdElement] = useState(0)
  const[itemSelected, setItemSelected] = useState<Received | null> (null)
  const[itemAdd, setItemAdd] = useState<Received | null> (null)
  const [addItem, setAddItem] = useState<Received>()
  const [modalDel, setModalDel] = useState(false) 

  const handleActiveModal = () => {
    setModal(true)
  }

  const handleOpenModalAdd = () => {
    setModalAdd(true)
  }

  const handleOpenModalDel = () => {
    setModalDel(true)
  }

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
                onPress={handleOpenModalAdd}
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
                  <TableItem item={item} open={handleActiveModal} setId={setIdElement} openDelModal={handleOpenModalDel} />
                )}
              />
            </View>
          </View>
        </BgInternalScreen>
      </View>
      <ModalComponent visibleModal={modal} closeModal={setModalCancel} idElement={idElement}>
            
              {itemSelected && itemSelected !== null &&
              <>
                <View className="border-b border-white w-full items-center p-2">  
                  <Text className="uppercase text-white text-lg py-2">Editar Entrada {idElement}</Text>
                <View className="w-4/5">
                  <Input label="Nome" onChangeText={()=>{}} value="" />
                  <Input label="Data" onChangeText={()=>{}} value="" />
                  <Input label="Valor" onChangeText={()=>{}} value="" />
                </View>
              </View>
              <View className="flex-row justify-center gap-2 mt-2 w-full items-center my-2">
                <Pressable onPress={()=>{}} className="bg-themeConfirm px-5 py-3 rounded-lg">
                  <Text className="text-white uppercase ">Editar</Text>
                </Pressable>
                <Pressable onPress={()=>setModal(false)} className="bg-themeError px-5 py-3 rounded-lg">
                  <Text className="text-white uppercase ">Fechar</Text>
                </Pressable>
              </View>
              </>
              }

              {!itemSelected && itemSelected === null &&  
              <>
              <View className="border-b border-white w-full items-center p-4">  
                <Error />
                <Text className="text-white uppercase">Entrada não econtrada!</Text>
              </View>
                <View className="flex-row justify-center gap-2 mt-2 w-full items-center my-2">
                <Pressable onPress={()=>setModal(false)} className="bg-themeError px-5 py-3 rounded-lg">
                  <Text className="text-white uppercase ">Fechar</Text>
                </Pressable>
            </View>
            </>
              
              }
             
      </ModalComponent>
      <ModalComponent visibleModal={modalAdd} closeModal={setModalAdd} idElement={0} >
        <View className="border-b border-white w-full items-center p-2">  
          <Text className="uppercase text-white text-lg py-2">Adicionar Entrada</Text>
          <View className="w-4/5">
            <Input label="Nome" onChangeText={()=>{}} value={addItem?.name || ''} />
            <Input label="Data" onChangeText={()=>{}} value={addItem?.date || ''} />
            <Input label="Valor" onChangeText={()=>{}} value={addItem?.value || ''} />
          </View>
          </View>
          <View className="flex-row justify-center gap-2 mt-2 w-full items-center my-2">
            <Pressable onPress={()=>{}} className="bg-themeConfirm px-5 py-3 rounded-lg">
              <Text className="text-white uppercase ">Adicionar</Text>
            </Pressable>
            <Pressable onPress={()=>setModalAdd(false)} className="bg-themeError px-5 py-3 rounded-lg">
              <Text className="text-white uppercase ">Fechar</Text>
            </Pressable>
          </View>
      </ModalComponent>
      <ModalComponent visibleModal={modalDel} closeModal={setModalDel} idElement={idElement} >
          <View className="border-b border-white w-full items-center p-2">  
            <Text className="uppercase text-white text-lg py-2">Tem certeza que deseja excluir a Entrada {idElement}</Text>
          </View>
          <View className="flex-row justify-center gap-2 mt-2 w-full items-center my-2">
            <Pressable onPress={()=>{}} className="bg-themeConfirm px-5 py-3 rounded-lg">
              <Text className="text-white uppercase ">Confirmar</Text>
            </Pressable>
            <Pressable onPress={()=>setModalDel(false)} className="bg-themeError px-5 py-3 rounded-lg">
              <Text className="text-white uppercase ">Fechar</Text>
            </Pressable>
          </View>
      </ModalComponent>
    </Page>
  );
}
