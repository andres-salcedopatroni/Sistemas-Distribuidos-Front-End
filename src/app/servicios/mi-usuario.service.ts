import { Injectable, Optional, SkipSelf } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MiUsuarioService {

  private static id: any;

  constructor() { 
  }

  static obtenerUsuario(): String{
    return MiUsuarioService.id;
  }

  static ingresarUsuario(id:any): void{
    if(!MiUsuarioService.id)
    MiUsuarioService.id=id
  }

}
