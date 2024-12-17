import { Text, View, Image, Alert } from "react-native";
import Login from "./screens/login/login";
import Account from "./screens/account/account";
import Home from "./screens/home/home";
import  Button  from "./components/button";
import  Calendar  from "./screens/calendar/calendar";
import Profile  from "./screens/profile/profile";

export default function App() {
    return (
        <View style={{flex: 1}}>
            <Profile/>
        </View>
    )
}