import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  urlObtenerProductos='http://localhost:3000/productos'
  
  constructor(private http:HttpClient) { }

  obtenerProductos(nombre:String):Observable<any>{
    return this.http.get(this.urlObtenerProductos+'?nombre='+nombre);
  }

}
