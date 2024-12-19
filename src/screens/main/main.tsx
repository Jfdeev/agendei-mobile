import { NavigationContainer } from "@react-navigation/native";
import Home from '../home/home';
import Calendar from '../calendar/calendar';
import Profile from '../profile/profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import icon from "../../constants/icon";
import { Image, Text } from "react-native";

const Tab = createBottomTabNavigator();

export default function Main() {
    return <NavigationContainer>
            <Tab.Navigator id={undefined}>
                <Tab.Screen name="Home" component={Home} options={{
                    headerTitleAlign: 'center',
                    headerTitle: () => {
                        return <Image 
                        source={icon.logo} 
                        style={{width: 125, height: 29 

                        }}
                        />
                    }
                }}
                />

                <Tab.Screen name="Calendar" component={Calendar} />

                <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
        </NavigationContainer>
    
}