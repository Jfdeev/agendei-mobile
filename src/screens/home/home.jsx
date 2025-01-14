import { Alert, FlatList, Text, View } from "react-native";
import { s } from "./style";
import Doctor from "../../components/doctor/doctor";
import { useEffect, useState } from "react";
import api from "../../constants/api";


export default function Home(props) {

    const [doctors, setDoctors] = useState([]);

    function ClickDoctor(id_doctor, name, specialty, icon) {
        props.navigation.navigate("services", {
            id_doctor, 
            name, 
            specialty, 
            icon
        })
    }

    async function LoadDoctors(){
        try {
            const response = await api.get("/doctors");
    
            if(response.data){
                setDoctors(response.data)
            }
    
        } catch (error) {
            if(error.response.data.error){
                Alert.alert("Erro", error.response.data.error)
            } else {
                Alert.alert("Erro", "Tente novamente mais tarde")
            }
        }
    }

    useEffect(() => {
        LoadDoctors();
    }, [])

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