import Home from '../home/home';
import Calendar from '../calendar/calendar';
import Profile from '../profile/profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import icon from "../../constants/icon";
import { Image, Text } from "react-native";
import  { s }  from "./style"

const Tab = createBottomTabNavigator();

export default function Main() {
    return  <Tab.Navigator id={undefined}>
                <Tab.Screen name="Home" component={Home} options={{
                    headerTitleAlign: 'center',
                    headerTitle: () => {
                        return <Image 
                        source={icon.logo} 
                        style={{width: 125, height: 29 

                        }}
                        />
                    },
                    tabBarIcon: () => {
                        return <Image source={icon.home} style={s.icon}/>
                    },
                    tabBarShowLabel: false,
                    tabBarActiveBackgroundColor: '#f0f0f0'
                }}
                />

                <Tab.Screen name="Calendar" component={Calendar} options={{
                    headerTitleAlign: 'center',
                    headerTitle: () => {
                        return <Text style={s.title}>Minhas Reservas</Text>
                    },
                    tabBarIcon: () => {
                        return <Image source={icon.calendar} style={s.icon}/>
                    },
                    tabBarShowLabel: false,
                    tabBarActiveBackgroundColor: '#f0f0f0'
                }}
                />

                <Tab.Screen name="Profile" component={Profile} options={{
                    headerTitleAlign: "center",
                    headerTitle: () => {
                        return <Text style={s.title}>Meu Perfil</Text>
                    },
                    tabBarIcon: () => {
                        return <Image source={icon.profile} style={s.icon}/>
                    }, 
                    tabBarShowLabel: false,
                    tabBarActiveBackgroundColor: '#f0f0f0'     
                }}
                />
            </Tab.Navigator>
    
}