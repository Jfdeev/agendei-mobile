import { Text, View, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import { useState } from "react";
import { s } from "./style";
import icon from "../../constants/icon";
import Button from "../../components/button";
import api from "../../constants/api";

export default function Account(props) {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    async function executeAccount(){
        try {
            const response = await api.post("/users/register", {
                name,
                email,
                password
            });

            if(response.data){
                console.log(response.data)
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
                <TextInput placeholder="Nome" style={s.input}
                onChangeText={(text) => setName(text)}
                />
                <TextInput placeholder="Email" style={s.input}
                onChangeText={(text) => setEmail(text)}
                />
                <TextInput placeholder="Password" style={s.input} secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
                />
                <Button text="Criar Conta" onPress={executeAccount} />
            </View>

            <View style={s.footer}>
                <Text style={s.text}>Já tenho conta. </Text>
                <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate("Login")}>
                    <Text style={s.textAccount}>Fazer login agora.</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}