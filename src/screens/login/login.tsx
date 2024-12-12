import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { s } from "./style";
import Button from "../../components/button";

export default function Login() {
    return (
        <View style={s.container}>
            <View style={s.containerLogo}>
                <Image source={require("../../assets/logo.png")} style={[s.logo, s.containerLogo]}/>
            </View>
            <View>
                <TextInput placeholder="Email" style={s.input}/>
                <TextInput placeholder="Password" style={s.input}/>
                <Button text="Acessar" />
            </View>

            <View style={s.footer}>
                <Text style={s.text}>Não tenho conta.</Text>
                <TouchableOpacity>
                    <Text style={s.textAccount}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}