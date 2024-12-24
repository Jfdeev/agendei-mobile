import { FlatList, Text, View } from "react-native";
import { s } from "./style";
import { doctors } from "../../constants/data";
import Doctor from "../../components/doctor/doctor";
import icon from "../../constants/icon";


export default function Home() {
    return (
        <View style={s.container}>
            <Text style={s.text}>Agende o seus serviços medicos</Text>

            <FlatList 
            data={doctors}
            keyExtractor={(doc) => doc.id_doctor}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
                return <Doctor 
                name={item.name} 
                icon={item.icon == "M" ? icon.male : icon.female}
                speciality = {item.speciality}
                />
            }}
            />
        </View>
    )
}