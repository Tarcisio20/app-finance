import { Stack } from 'expo-router';
import 'react-native-reanimated';
import '../global.css'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown : false }}  />
        <Stack.Screen name="register" options={{ headerShown : false }}  />
        <Stack.Screen name="(tabs)" options={{ headerShown : false }}  />
      </Stack>
      </GestureHandlerRootView>
  );
}











