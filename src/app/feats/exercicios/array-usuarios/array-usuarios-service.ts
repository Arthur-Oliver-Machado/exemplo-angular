import { Service, signal } from '@angular/core';
import { Usuario } from './usuario';

@Service()
export class ArrayUsuariosService {

    readonly usuarios = signal<Usuario[]>([
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
    ]);


}
