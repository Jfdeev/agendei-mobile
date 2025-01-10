import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import RoutesOpen from './routesOpen';
import RoutesPrivate from './routesPrivate';

export default function Routes() {

    const user = {
        id_user: 1
    }

    return user.id_user ? <RoutesPrivate /> : <RoutesOpen />
}