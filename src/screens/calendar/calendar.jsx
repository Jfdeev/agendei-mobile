import { FlatList, Text, View } from "react-native";
import { s } from "./style";
import { appointments } from "../../constants/data";
import icon from "../../constants/icon";
import Appointments from "../../components/appointments/appointments";


export default function Calendar() {
    return (
        <View style={s.container}>
            <Text style={s.text}>Agende o seus serviços medicos</Text>

            <FlatList 
            data={appointments} 
            keyExtractor={(apoint) => apoint.id_apointment.toString()}
            renderItem={({item}) => {
                return <Appointments 
                service={item.service}
                doctor={item.doctor}
                specialty={item.specialty}
                bookingDate={item.bookingDate}
                bookingTime={item.bookingTime}
                />
            }}
            />
        </View>
    )
}