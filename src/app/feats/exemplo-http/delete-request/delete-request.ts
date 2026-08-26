import { Component, inject, signal } from '@angular/core';
import { ConsumoHttpService } from '../consumo-http-service';
import { PostDeleteRequest } from './post-delete-request';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-delete-request',
  imports: [FormField],
  templateUrl: './delete-request.html',
  styleUrl: './delete-request.css',
})
export class DeleteRequest {

  protected readonly consumoService = inject(ConsumoHttpService);

  protected readonly postModel = signal<PostDeleteRequest>({
    id: null
  });

  protected readonly postForm = form(this.postModel);

  deletarPost(event: SubmitEvent) {
    event.preventDefault();

    this.consumoService.deletarPost(this.postModel().id!).subscribe({
      next: () => {
        alert('Post deletado');

        this.postModel.set({
          id: null
        });
      },
      error: () => {
        alert('Algo deu errado');
      }
    })
  }

}
