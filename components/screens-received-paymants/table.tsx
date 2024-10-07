import { Received } from "@/types/Received"
import { FlatList, ScrollView } from "react-native"
import { TableItem } from "./table-item"

type Props = {
    data : Received[]
}

export const Table = ({ data } : Props) => {
    return <FlatList className="w-full mt-1"
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <TableItem item={item} />}
    /> 
} 