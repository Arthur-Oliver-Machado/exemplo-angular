import { Service } from '@angular/core';
import { LoginInterface } from './login-interface';

@Service()
export class LoginService {

    autenticarUsuario(credenciais: LoginInterface): boolean {
        return credenciais.email === 'henrique@email.com'
            && credenciais.senha === 'senha'
    }

}
