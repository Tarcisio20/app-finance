import { ReactNode } from "react";
import { Pressable, Text, View, Modal } from "react-native";

type Props = {
  visibleModal : boolean;
  closeModal : (newValue : boolean) => void;
  idElement : number;
  children : ReactNode
}

export const ModalComponent = ({ visibleModal, closeModal, idElement, children } : Props) => {
  return <Modal
  animationType="slide"
  transparent={true}
  visible={visibleModal}
  onRequestClose={()=>{
    closeModal(false)
  }}
  className="justify-center items-center"
>
  <View className="flex-1 bg-themeGray/20 items-center justify-center rounded-md">
    <View className="w-[300px] p- bg-themeDark rounded-lg items-center shadow-lg">
      {children}
    </View>
  </View>
</Modal>
};
