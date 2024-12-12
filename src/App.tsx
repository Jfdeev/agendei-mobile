import { Text, View, Image, Alert } from "react-native";
import Login from "./screens/login/login";
import  Button  from "./components/button";

export default function App() {
    return (
        <View style={{flex: 1, alignItems: "center", marginTop: 15}}>
            <Login />
        </View>
    )
}