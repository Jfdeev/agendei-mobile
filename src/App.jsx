import Routes from "./routes/route";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./constants/auth.js";

export default function App() {
    return (
        <NavigationContainer>
            <AuthProvider>
                <Routes />
            </AuthProvider>
        </NavigationContainer>
    )
}