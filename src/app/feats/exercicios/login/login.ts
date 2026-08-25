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

    this.estaLogado.set(this.loginService.autenticarUsuario(login));

    this.loginModel.set({
      email: '',
      senha: ''
    })

    this.loginForm().reset();
  }

}
