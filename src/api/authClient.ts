import api from './axiosClient';
import { setAuth } from '../context/auth';
export class AuthClient{
   static async login(login:string, password:string ) {
    try {
        const result = await api.post('/users/authorization',{login,password} );
        console.log(result);
        if(result.status === 200) {
            setAuth(true)
            localStorage.setItem('auth',JSON.stringify(result.data));
            console.log('Auth data saved to localStorage:', result.data);
            return true;
        }
        return false;
    } catch (error) {
       console.log(error) 
    }
   }
   static async registration(login:string, password:string ) {
    try {
        const result = await api.post('/users/registration',{login,password} );
        console.log(result);
        if(result.status === 201) {
            setAuth(false)
            return true;
        }
        return false;
    } catch (error) {
       console.log(error) 
    }
   }
}
