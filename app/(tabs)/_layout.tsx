import { ImageMenu } from "@/components/home/image-menu";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Tabs } from "expo-router";
import { useIsFocused } from "@react-navigation/native";
import { View, Text } from "react-native";

export default function TabsLayout() {
  const isFocused = useIsFocused();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#1F222A",
          paddingVertical: 6,
          height: 60,
          borderTopColor: "white",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => <View className={`justufy-center items-center mt-2 ${focused ? 'bg-primary p-2 rounded-full' : 'bg-transparent'}`}>
                <ImageMenu image="home" />
            </View>
          ,
        }}
      />
      <Tabs.Screen
        name="received"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => <View className={`justufy-center items-center mt-2 ${focused ? 'bg-primary p-2 rounded-full' : 'bg-transparent'}`}> 
          <ImageMenu image="received" />
          </View>,
        }}
      />

      <Tabs.Screen
        name="payments"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => <View className={`justufy-center items-center mt-2 ${focused ? 'bg-primary p-2 rounded-full' : 'bg-transparent'}`}>
              <ImageMenu image="payments" />
          </View>
        }}
      />

      <Tabs.Screen
        name="config"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => <View className={`justufy-center items-center mt-2 ${focused ? 'bg-primary p-2 rounded-full' : 'bg-transparent'}`}>
              <ImageMenu image="config" />
          </View> 
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) =><View className={`justufy-center items-center mt-2 ${focused ? 'bg-primary p-2 rounded-full' : 'bg-transparent'}`}> 
            <ImageMenu image="profile" />
          </View>
        }}
      />
    </Tabs>
  );
}
