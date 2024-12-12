import { Text, View, Image, Alert } from "react-native";
import Login from "./screens/login/login";
import Account from "./screens/account/account";
import  Button  from "./components/button";

export default function App() {
    return (
        <View style={{flex: 1}}>
            <Account />
        </View>
    )
}