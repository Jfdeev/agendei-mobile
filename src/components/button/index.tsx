import { Text, Alert, TouchableOpacity } from "react-native";
import { s } from "./style";

function Button(props) {
    function TesteClick() {
        Alert.alert('Teste');
    }

    return (
        <TouchableOpacity style={s.button} onPress={TesteClick}>
            <Text style={s.text}>{props.text}</Text>
        </TouchableOpacity>
    );
}

export default Button;