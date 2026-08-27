import { Component, inject, signal } from '@angular/core';
import { form, FormField } from "@angular/forms/signals";
import { Post } from './post';
import { ConsumoHttpService } from '../consumo-http-service';

@Component({
  selector: 'app-post-request',
  imports: [FormField],
  templateUrl: './post-request.html',
  styleUrl: './post-request.css',
})
export class PostRequest {

  protected readonly consumoService = inject(ConsumoHttpService);

  protected readonly postModel = signal<Post>({
    userId: null,
    title: '',
    body: ''
  });

  protected readonly postForm = form(this.postModel);

  protected cadastrarPost(event: SubmitEvent) {
    event.preventDefault();

    const post = this.postModel();

    this.consumoService.cadastrarPostDoService(post).subscribe({
      next: (response) => {
        alert('Post cadastrado com id: ' + response.id);

        this.postModel.set({
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
