import { Text, View, Image, Alert } from "react-native";
import  Button  from "./components/button";

export default function App() {
    return (
        <View style={{flex: 1, alignItems: "center", marginTop: 15}}>
            <Image 
            source={
            require('./assets/logo.png')} 
            />
            
            <Button text="Acessar" />
        </View>
    )
}