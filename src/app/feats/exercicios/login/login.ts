import { Component, signal } from '@angular/core';
import { LoginInterface } from './login-interface';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-login',
  imports: [FormField],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  protected loginModel = signal<LoginInterface>({
    email: '',
    senha: ''
  });

  protected loginForm = form(this.loginModel);


  protected estaLogado = signal<boolean>(false);

  protected efetuarLogin(event: SubmitEvent) {
    event.preventDefault();

    const login = this.loginModel();

    if (login.email === 'henrique@email.com' && login.senha === 'senha') {
      this.estaLogado.set(true);
    }

  }

}
