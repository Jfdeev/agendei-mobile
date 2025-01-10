import { Text, View, TouchableOpacity, Image} from "react-native";
import { s } from "./style";
import icon from "../../constants/icon";


export default function Doctor(props) {
    return (
        <TouchableOpacity style={s.container} onPress={() => props.onPress(props.id_doctor, 
        props.name, props.specialty, props.icon)}>
            <Image source={props.icon == "M" ? icon.male : icon.female} style={s.icon}/>
            <View>
                <Text style={s.name}>{props.name}</Text>
                <Text style={s.specialty}>{props.specialty}</Text>
            </View>
        </TouchableOpacity>
    )
}