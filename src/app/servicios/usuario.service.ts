import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  urlUsuario='http://localhost:3000/usuario/';

  constructor(private http: HttpClient) { }

  ingresarUsuario(dni_ruc:String, clave:String):Observable<any>{
    return this.http.get(this.urlUsuario+'ingreso?dni_ruc='+dni_ruc+'&clave='+clave);
  }

  crearUsuario(usuario:any):Observable<any>{
    return this.http.post(this.urlUsuario+'crear',usuario);
  }

}
