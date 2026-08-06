import { Component, signal } from '@angular/core';
import { Usuario } from './usuario';

@Component({
  selector: 'app-array-usuarios',
  imports: [],
  templateUrl: './array-usuarios.html',
  styleUrl: './array-usuarios.css',
})
export class ArrayUsuarios {

  protected readonly usuarios = signal<Usuario[]>([
    {
      id: 1,
      nome: 'Joãozinho',
      idade: 19
    },
    {
      id: 2,
      nome: 'Maria',
      idade: 22
    },
    {
      id: 3,
      nome: 'Ana',
      idade: 18
    }
  ])


}
