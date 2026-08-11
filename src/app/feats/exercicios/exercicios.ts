import { Component } from '@angular/core';
import { Contador } from "./contador/contador";
import { Autenticacao } from "./autenticacao/autenticacao";
import { ImagemDinamica } from "./imagem-dinamica/imagem-dinamica";
import { ExemploSignal } from "./exemplo-signal/exemplo-signal";
import { ArrayUsuarios } from "./array-usuarios/array-usuarios";
import { Login } from "./login/login";

@Component({
  selector: 'app-exercicios',
  imports: [Contador, Autenticacao, ImagemDinamica, ExemploSignal, ArrayUsuarios, Login],
  templateUrl: './exercicios.html',
  styleUrl: './exercicios.css',
})
export class Exercicios {}
