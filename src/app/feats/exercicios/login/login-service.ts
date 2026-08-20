import { Service } from '@angular/core';
import { LoginInterface } from './login-interface';

@Service()
export class LoginService {

    autenticarUsuario(credenciais: LoginInterface) {
        if (credenciais.email === 'henrique@email.com'
            && credenciais.senha === 'senha') {
            return true;
        } else {
            return false;
        }
    }

}
