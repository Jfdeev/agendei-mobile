import { Text, TouchableOpacity } from "react-native";
import { s } from "./style";

export default function Button(props) {

    return (
        <TouchableOpacity 
        style={s.button}  
        activeOpacity={0.8}
        >
            <Text style={s.text}>{props.text}</Text>
        </TouchableOpacity>
    );
}
