import { Text, TouchableOpacity } from "react-native";
import { s } from "./style";

export default function Button(props) {

    return (
        <TouchableOpacity 
        style={s.button}  
        activeOpacity={0.8}
        onPress={() => props.onPress(props.id_service)}
        >
            <Text style={s.text}>{props.text}</Text>
        </TouchableOpacity>
    );
}
