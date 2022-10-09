import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

getAllProducts():any{
  return this.http.get('https://fakestoreapi.com/products')
}

postProduct(Data: any):Observable<any> {
  return this.http.post('https://fakestoreapi.com/products',Data)
}

updateProduct(Data: any, id:string):Observable<any> {
  return this.http.patch('https://fakestoreapi.com/products/${id}',Data)
}

deleteProduct(id:string):Observable<any> {
  return this.http.delete('https://fakestoreapi.com/products/${id}')
}

 
}
