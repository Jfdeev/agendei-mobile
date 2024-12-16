import { FlatList, Text, View } from "react-native";
import { s } from "./style";
import { appointments } from "../../constants/data";
import icon from "../../constants/icon";


export default function Calendar() {
    return (
        <View style={s.container}>
            <Text style={s.text}>Agende o seus serviços medicos</Text>

            <FlatList 
            data={appointments} 
            keyExtractor={(apoint) => apoint.id_apointment.toString()}
            renderItem={({item}) => {
                return <Text>{item.service}</Text> 
                
            }}
            />
        </View>
    )
}