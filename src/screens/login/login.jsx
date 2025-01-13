import { Text, View, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import { useContext, useState } from "react";
import { s } from "./style";
import icon from "../../constants/icon";
import Button from "../../components/button";
import api from "../../constants/api";
import { AuthContext } from "../../constants/auth.js";


export default function Login(props) {

    const { setUser } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    async function executeLogin(){
        try {
            const response = await api.post("/users/login", {
                email,
                password
            });

            if(response.data.user.id_user){
                setUser(response.data)
            }

        } catch (error) {
            if(error.response.data.error){
                Alert.alert("Erro", error.response.data.error)
        } else {
            Alert.alert("Erro", "Tente novamente mais tarde")
        }
    }
}

    return (
        <View style={s.container}>
            <View style={s.containerLogo}>
                <Image source={icon.logo} style={[s.logo, s.containerLogo]}/>
            </View>
            <View>
                <TextInput placeholder="Email" style={s.input} 
                onChangeText={(text) => setEmail(text)}
                />
                <TextInput placeholder="Password" style={s.input} secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
                />
                <Button text="Acessar" onPress={executeLogin} />
            </View>

            <View style={s.footer}>
                <Text style={s.text}>Não tenho conta. </Text>
                <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate("Account")}>
                    <Text style={s.textAccount}>Criar conta agora.</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}