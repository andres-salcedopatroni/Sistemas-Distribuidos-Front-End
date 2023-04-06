import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  clave:any;
  dni_ruc:any;

  constructor(private servicioUsuario: UsuarioService) { }

  ngOnInit(): void {

  }

  ingresar():void{

    this.servicioUsuario.ingresarUsuario(this.dni_ruc,this.clave).subscribe(
      (data)=>{console.log("wrssdtgsd");console.log(this.clave);console.log(data);},(err)=>{console.log(err)});
    
  }  

}
