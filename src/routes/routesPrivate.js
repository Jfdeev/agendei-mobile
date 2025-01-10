import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from '../screens/main/main';
import Services from '../screens/services/services';
import Schedule from '../screens/schedule/schedule';
const Stack = createNativeStackNavigator();
import { COLORS } from '../constants/theme';

export default function RoutesPrivate() {
    

    return <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} 
        options={{
            headerShown: false
        }}
        />

        <Stack.Screen name="services" component={Services}
        options={{
            headerTitle: "Serviços",
            headerTitleAlign: "center",
            headerTintColor: COLORS.white,
            headerStyle: {backgroundColor: COLORS.blue},
            headerShadowVisible: false
        }}
        />

        <Stack.Screen name="schedule" component={Schedule}
        options={{
            headerTitle: "Agendar",
            headerTitleAlign: "center",
            headerTintColor: COLORS.white,
            headerStyle: {backgroundColor: COLORS.blue},
            headerShadowVisible: false
        }}
        />
        </Stack.Navigator>
}