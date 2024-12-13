import { Text, View, TouchableOpacity, Image} from "react-native";
import { s } from "./style";


export default function Doctor(props) {
    return (
        <TouchableOpacity style={s.container}>
            <Image source={props.icon}/>
            <View>
                <Text style={s.name}>{props.name}</Text>
                <Text style={s.speciality}>{props.speciality}</Text>
            </View>
        </TouchableOpacity>
    )
}