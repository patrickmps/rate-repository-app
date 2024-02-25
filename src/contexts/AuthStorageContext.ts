import {createContext} from 'react';
import AuthStorage from '../utils/authStorage';

const AuthStorageContext = createContext<AuthStorage>(new AuthStorage());

export default AuthStorageContext;
