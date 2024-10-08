import { TranslateInReal } from "@/functios/translate-in-real";
import { Received } from "@/types/Received";
import { Alert, Image, Pressable, Text, View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import Icon from "@expo/vector-icons/FontAwesome6";

type Props = {
  item: Received;
  open: ()=>void;
  setId : (newValue : number)=>void;
};

export const TableItem = ({ item, open, setId }: Props) => {

  
  const handleEdit = (id: number) => {
    setId(id)
    open()
  };
  const handleExcluir = (id: number) => {
    Alert.alert("Excluir " + id);
  };

  const RightAction = () => {
    return (
      <View className="flex-row mb-1">
        <Pressable
          className="bg-themeConfirm justify-center items-center px-4 "
          onPress={() => handleEdit(item.id)}
        >
          <Image
            source={require("../../assets/RP/edit.png")}
            className="size-8"
          />
        </Pressable>
        <Pressable
          className="bg-themeError justify-center items-center px-4"
          onPress={() => handleExcluir(item.id)}
        >
          <Image
            source={require("../../assets/RP/delete.png")}
            className="size-8"
          />
        </Pressable>
      </View>
    );
  };


  return (
    <Swipeable renderRightActions={RightAction}>
      <View className="flex-row justify-between bg-themeDark/60 px-2 py-7 mx-1 mb-1 rounded-md">
        <Text className="text-white">{item.date}</Text>
        <Text className="text-white">{item.name}</Text>
        <Text className="text-white">
          {TranslateInReal(parseFloat(item.value))}
        </Text>
      </View>
    </Swipeable>
  );
};
