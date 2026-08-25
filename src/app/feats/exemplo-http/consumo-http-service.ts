import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Post } from './post-request/post';

@Service()
export class ConsumoHttpService {

    private readonly httpClient = inject(HttpClient);

    private readonly urlApi = 'https://jsonplaceholder.typicode.com/posts';

    
    cadastrarPostDoService(postCadastrado: Post) {
        return this.httpClient.post(this.urlApi, postCadastrado);
    }


}
