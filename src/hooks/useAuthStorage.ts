import {useContext} from 'react';
import AuthStorageContext from '../contexts/AuthStorageContext';
import AuthStorage from '../utils/authStorage';

const useAuthStorage = (): AuthStorage => {
  return useContext(AuthStorageContext);
};

export default useAuthStorage;
