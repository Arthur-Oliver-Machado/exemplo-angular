import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-imagem-dinamica',
  imports: [FormsModule],
  templateUrl: './imagem-dinamica.html',
  styleUrl: './imagem-dinamica.css',
})
export class ImagemDinamica {

  protected urlImagem = signal<string>('');

}
