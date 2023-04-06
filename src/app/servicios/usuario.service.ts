import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  urlIngresarUsuario='http://localhost:3000/usuario/ingreso'

  constructor(private http: HttpClient) { }

  ingresarUsuario(dni_ruc:String, clave:String):Observable<any>{
    return this.http.get(this.urlIngresarUsuario+'?dni_ruc='+dni_ruc+'&clave='+clave);
  }

}
