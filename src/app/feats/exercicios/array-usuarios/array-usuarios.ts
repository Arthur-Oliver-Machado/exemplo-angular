import { Component, inject, signal } from '@angular/core';
import { Usuario } from './usuario';
import { ArrayUsuariosService } from './array-usuarios-service';

@Component({
  selector: 'app-array-usuarios',
  imports: [],
  templateUrl: './array-usuarios.html',
  styleUrl: './array-usuarios.css',
})
export class ArrayUsuarios {

  protected readonly arrayUsuariosService = inject(ArrayUsuariosService);

}
