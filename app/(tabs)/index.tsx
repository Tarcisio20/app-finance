import { Page } from "@/components/project/page";
import { Text, View } from "react-native";


export  default function Screen(){
    return <Page type={true}>
        <View className="flex-1 bg-secondary">
            <Text>Home</Text>
        </View>
    </Page>
    
}