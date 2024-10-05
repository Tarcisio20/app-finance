import { ReactNode } from "react"
import { View } from "react-native"

type Props = {
    children : ReactNode
}

export const BgInternalScreen = ({ children } : Props) => {
    return <View className="h-5/6 bg-primary absolute bottom-0 left-0 right-0 rounded-t-[90px]">{children}</View>
}