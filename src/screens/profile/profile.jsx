import { Text, View } from "react-native";
import { s } from "./style";
import api from "../../constants/api";
import { useEffect } from "react";
import { useState } from "react";
import { Alert } from "react-native";
import Button from "../../components/button";
import { useContext } from "react";
import { AuthContext } from "../../constants/auth";

export default function Profile(props) {

    const { setUser } = useContext(AuthContext);
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");

    async function LoadProfile(){
        try {
            const response = await api.get("/users/profile");

            if(response.data){
                setName(response.data.name);
                setEmail(response.data.email);
            }

        } catch (error) {
            if(error.response.data.error){
                Alert.alert("Erro", error.response.data.error)
            } else {
                Alert.alert("Erro", "Tente novamente mais tarde")
            }
        }
    }


    function Logout(){
        api.defaults.headers.common['Authorization'] = "";
        setUser(null);
    }

    useEffect(() => {
        LoadProfile();
    }, [])

    return <View style={s.container}>
        <View style={s.item}>
            <Text style={s.title}>Nome</Text>
            <Text style={s.text}>{name}</Text>
        </View>

        <View style={s.item}>
            <Text style={s.title}>Email</Text>
            <Text style={s.text}>{email}</Text>
        </View>
        
        <View style={s.item}>
            <Text style={s.title}>Telefone</Text>
            <Text style={s.text}>11 99999-9999</Text>
        </View>

        <View style={s.item}>
            <Button text="Desconectar" onPress={Logout}/>
        </View>
    </View>
}