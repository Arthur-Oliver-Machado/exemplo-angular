import { Component, signal } from '@angular/core';
import { Produto } from './produto';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-formulario',
  imports: [FormField],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {

  produtoModel = signal<Produto>({
    titulo: '',
    descricao: '',
    preco: null
  })

  produtoForm = form(this.produtoModel);


  cadastrarProduto(event: SubmitEvent) {
    event.preventDefault();

    const produto = this.produtoModel();

    console.log(produto);

    alert('Produto cadastrado!')

    this.produtoModel.set({
      titulo: '',
      descricao: '',
      preco: null
    })
  }

}
