import { Alert ,FlatList, Text, View } from "react-native";
import { s } from "./style";
import Appointments from "../../components/appointments/appointments";
import { useEffect, useState } from "react";
import api from "../../constants/api";



export default function Calendar() {

    const [appointments, setAppointments] = useState([]);
    const [refreshKey, setRefreshKey] = useState(0);

    async function LoadCalendar(){
        try {
            const response = await api.get("/appointments");

            if(response.data){
                setAppointments(response.data);
                setRefreshKey(refreshKey + 1);
            }

        } catch (error) {
            if(error.response.data.error){
                Alert.alert("Erro", error.response.data.error)
            } else {
                Alert.alert("Erro", "Tente novamente mais tarde")
            }
        }
    }

    async function DeleteAppointment(id_appointment){
        try {
            const response = await api.delete("/appointments/" + id_appointment);

            if(response.data.id_appointment){
                LoadCalendar();
                setRefreshKey(refreshKey + 1);
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
        LoadCalendar();
    }, [refreshKey])

    return (
        <View style={s.container}>
            <Text style={s.text}>Agende o seus serviços medicos</Text>

            <FlatList 
            data={appointments} 
            keyExtractor={(apoint) => apoint.id_appointment.toString()}
            renderItem={({item}) => {
                return <Appointments 
                id_appointment={item.id_appointment}
                service={item.service}
                doctor={item.doctor}
                specialty={item.specialty}
                bookingDate={item.booking_date}
                bookingTime={item.booking_hour}
                onPress={DeleteAppointment}
                />
            }}
            />
        </View>
    )
}