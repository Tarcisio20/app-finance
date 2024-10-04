import { Page } from "./page"
import { Logo } from "./logo"
import { ActivityIndicator, View, Text } from "react-native"

export const SplashScreen = () => {
    return <>
        <Page>
            <View className="flex-1 justify-center items-center gap-6">
                <View className="bg-themeGray rounded-full">
                    <Logo size="large" />
                </View>
                <View className="items-center">
                    <Text className="text-white text-2xl">Finance</Text>
                    <Text className="text-white text-md" >Seu app de controle financeiro.</Text>
                </View>
                <ActivityIndicator size="large" color="#FFFFFF" />
            </View>
        </Page>
    </>
}