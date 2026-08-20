import { Component, inject, signal } from '@angular/core';
import { LoginInterface } from './login-interface';
import { email, form, FormField, required } from '@angular/forms/signals';
import { LoginService } from './login-service';

@Component({
  selector: 'app-login',
  imports: [FormField],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  protected readonly loginService = inject(LoginService);


  protected loginModel = signal<LoginInterface>({
    email: '',
    senha: ''
  });

  protected loginForm = form(this.loginModel, (s) => {
    required(s.email, { message: 'O email é obrigatório' });
    email(s.email, { message: 'O email não condiz com um email' });

    required(s.senha, { message: 'Senha é obrigatória' })
  });


  protected estaLogado = signal<boolean>(false);

  protected efetuarLogin(event: SubmitEvent) {
    event.preventDefault();

    const login = this.loginModel();

    const logou = this.loginService.autenticarUsuario(login);

    if (logou === true) {
      this.estaLogado.set(true);
    } else {
      this.estaLogado.set(false);
    }

    /* if (login.email === 'henrique@email.com' && login.senha === 'senha') {
       this.estaLogado.set(true);
     } */

    this.loginModel.set({
      email: '',
      senha: ''
    })

    this.loginForm().reset();
  }

}
