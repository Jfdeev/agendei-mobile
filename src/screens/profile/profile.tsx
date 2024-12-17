import { Text, View } from "react-native";
import { s } from "./style";


export default function Profile(props) {
    return <View style={s.container}>
        <View style={s.item}>
            <Text style={s.title}>Nome</Text>
            <Text style={s.text}>Joao Felipe</Text>
        </View>

        <View style={s.item}>
            <Text style={s.title}>Email</Text>
            <Text style={s.text}>joaozindev@gamil.com</Text>
        </View>
    </View>
}