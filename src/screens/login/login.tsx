import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { s } from "./style";
import icon from "../../constants/icon";
import Button from "../../components/button";

export default function Login() {
    return (
        <View style={s.container}>
            <View style={s.containerLogo}>
                <Image source={icon.logo} style={[s.logo, s.containerLogo]}/>
            </View>
            <View>
                <TextInput placeholder="Email" style={s.input}/>
                <TextInput placeholder="Password" style={s.input} secureTextEntry={true}/>
                <Button text="Acessar" />
            </View>

            <View style={s.footer}>
                <Text style={s.text}>Não tenho conta. </Text>
                <TouchableOpacity activeOpacity={0.8}>
                    <Text style={s.textAccount}>Criar conta agora.</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}