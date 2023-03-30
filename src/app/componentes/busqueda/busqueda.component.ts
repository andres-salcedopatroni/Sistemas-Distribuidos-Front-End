import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  nombre:String='';
  datos:any;

  constructor(private servicioProductos:ProductoService) { }

  ngOnInit(): void {
  }

  busqueda(nombre:String):void{
    this.servicioProductos.obtenerProductos(nombre).subscribe(
        (datos)=>{
          console.log(datos);
          this.datos=datos
        }
      )
  }

}
