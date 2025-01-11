import { FlatList, Text, View } from "react-native";
import { s } from "./style";
import { doctors } from "../../constants/data";
import Doctor from "../../components/doctor/doctor";



export default function Home(props) {

    function ClickDoctor(id_doctor, name, specialty, icon) {
        props.navigation.navigate("services", {
            id_doctor, 
            name, 
            specialty, 
            icon
        })
    }
    return (
        <View style={s.container}>
            <Text style={s.text}>Agende o seus serviços medicos</Text>

            <FlatList 
            data={doctors}
            keyExtractor={(doc) => doc.id_doctor.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
                return <Doctor 
                id_doctor={item.id_doctor}
                name={item.name} 
                icon={item.icon} //M ou F
                specialty = {item.specialty}
                onPress={ClickDoctor}
                />
            }}
            />
        </View>
    )
}