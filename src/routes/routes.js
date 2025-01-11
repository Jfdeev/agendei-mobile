import RoutesOpen from './routesOpen';
import RoutesPrivate from './routesPrivate';
import { useContext } from 'react';
import { AuthContext } from '../constants/auth';


export default function Routes() {

    const { user } = useContext(AuthContext);

    return user.id_user ? <RoutesPrivate /> : <RoutesOpen />
}