import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  nombre:any;
  dni_ruc:any;
  tipo:Array<String>=['Empresa','Persona Natural']
  clave:any;
  tipo_seleccionado:String='Empresa';
  

  constructor(private servicioUsuario:UsuarioService) { }

  ngOnInit(): void {
  }

  crear(): void {
    this.servicioUsuario.crearUsuario({"nombre":this.nombre,"dni_ruc":this.dni_ruc,"tipo":this.tipo_seleccionado,"clave":this.clave}).subscribe((data)=>{console.log(data);console.log(this.dni_ruc);},(err)=>{console.log(err)});
  }
}
