import { Text, View, Image, Alert } from "react-native";
import Routes from "./routes/routes";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
    return (
        <NavigationContainer>
            <Routes />
        </NavigationContainer>
    )
}