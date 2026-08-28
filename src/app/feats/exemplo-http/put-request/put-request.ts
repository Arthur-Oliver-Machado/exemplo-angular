import { Component, inject, signal } from '@angular/core';
import { ConsumoHttpService } from '../consumo-http-service';
import { AtualizaPost } from './atualiza-post';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-put-request',
  imports: [FormField],
  templateUrl: './put-request.html',
  styleUrl: './put-request.css',
})
export class PutRequest {

  protected readonly consumoService = inject(ConsumoHttpService);

  protected readonly postModel = signal<AtualizaPost>({
    id: null,
    userId: null,
    title: '',
    body: ''
  });

  protected readonly postForm = form(this.postModel);

  protected atualizarPost(event: SubmitEvent) {
    event.preventDefault();

    this.consumoService.atualizarPost(this.postModel()).subscribe({
      next: (response) => {
        alert('Atualização deu certo para a id ' + response.id);
        this.postModel.set({
          id: null,
          userId: null,
          title: '',
          body: ''
        });
        this.postForm().reset();
      },

      error: () => {
        alert('Algo deu errado');
      }
    })


  }

}
