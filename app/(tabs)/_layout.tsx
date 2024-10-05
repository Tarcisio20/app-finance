import { ImageMenu } from "@/components/home/image-menu";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Tabs } from "expo-router";
import { useIsFocused } from "@react-navigation/native";

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
          tabBarIcon: ({ color }) => (
            <ImageMenu image="home" active={isFocused} />
          ),
        }}
      />
      <Tabs.Screen
        name="received"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <ImageMenu image="received" />,
        }}
      />

      <Tabs.Screen
        name="payments"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <ImageMenu image="payments" />,
        }}
      />

      <Tabs.Screen
        name="config"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <ImageMenu image="config" />,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <ImageMenu image="profile" />,
        }}
      />
    </Tabs>
  );
}
