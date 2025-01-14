import RoutesOpen from './routesOpen.js';
import RoutesPrivate from './routesPrivate.js';
import { useContext } from 'react';
import { AuthContext } from '../constants/auth.js';
import { useEffect } from 'react';


function Routes() {

    const { user } = useContext(AuthContext);

    return user && user.id_user ? <RoutesPrivate /> : <RoutesOpen />;
}

export default Routes;