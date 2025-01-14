import { Text, View, TouchableOpacity, Image } from "react-native";
import { s } from "./style";
import  icon  from "../../constants/icon";



export default function Appointments(props) {
    return <View style={s.container}>
        <Text style={s.name}>{props.service} - {props.doctor}</Text>
        <Text style={s.specialty}>{props.specialty}</Text>

        <View>
            <View>
                <Text><Image source={icon.calendar} style={s.icon}/> {props.bookingDate}</Text>
                <Text><Image source={icon.clock} style={s.icon}/> {props.bookingTime}</Text>
            </View>
            <TouchableOpacity 
            activeOpacity={0.8} 
            style={s.button}
            onPress={() => props.onPress(props.id_appointment)}
            >
                <Text style={s.textButton}>CANCELAR RESERVA</Text>  
            </TouchableOpacity>
        </View>
    </View>
}