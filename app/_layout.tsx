import { Stack } from 'expo-router';
import 'react-native-reanimated';
import '../global.css'

export default function RootLayout() {
  return (
      <Stack>
        <Stack.Screen name="index" options={{ headerShown : false }}  />
        <Stack.Screen name="register" options={{ headerShown : false }}  />
        <Stack.Screen name="(tabs)" options={{ headerShown : false }}  />
      </Stack>
  );
}











