import { Component } from '@angular/core';
import { PostRequest } from "./post-request/post-request";
import { PutRequest } from "./put-request/put-request";
import { DeleteRequest } from "./delete-request/delete-request";

@Component({
  selector: 'app-exemplo-http',
  imports: [PostRequest, PutRequest, DeleteRequest],
  templateUrl: './exemplo-http.html',
  styleUrl: './exemplo-http.css',
})
export class ExemploHttp {

    
}
