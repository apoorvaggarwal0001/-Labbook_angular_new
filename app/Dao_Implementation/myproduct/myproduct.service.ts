import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyproductService {
  private baseUrl="http://localhost:9090/prd/getProduct";
  constructor(private http:HttpClient) {

   }
  searchProduct(id: Number):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`)
  }
  saveProduct(product: Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}/`,product)
  }
  updateProduct(product: Object):Observable<Object>{
    return this.http.put(`${this.baseUrl}/`,product)
  }
 removeProduct(id: Number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`,{responseType:'text'})
  }
   getProductList():Observable<any>{
     return this.http.get(`${this.baseUrl}`)
   }
}
