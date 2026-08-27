import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Post } from './post-request/post';
import { AtualizaPost } from './put-request/atualiza-post';
import { PostResponse } from './post-request/post-response';
import { PostListResponse } from './get-request/post-list-response';

@Service()
export class ConsumoHttpService {

    private readonly httpClient = inject(HttpClient);

    private readonly urlApi = 'https://jsonplaceholder.typicode.com/posts';


    cadastrarPostDoService(postCadastrado: Post) {
        return this.httpClient.post<PostResponse>(this.urlApi, postCadastrado);
    }

    atualizarPost(postAtualizado: AtualizaPost) {
        return this.httpClient.put<PostResponse>(this.urlApi + '/' + postAtualizado.id, postAtualizado);
    }

    deletarPost(id: number) {
        return this.httpClient.delete(this.urlApi + '/' + id);
    }

    readonly postsDetails = httpResource<PostListResponse[]>(
        () => this.urlApi,
        { defaultValue: [] }
    )

}
