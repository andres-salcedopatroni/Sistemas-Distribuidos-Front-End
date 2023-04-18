import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { IngresoComponent } from './componentes/ingreso/ingreso.component';
import { CrearUsuarioComponent } from './componentes/crear-usuario/crear-usuario.component';

const routes: Routes = [
  { path: '', component: IngresoComponent },
  { path: 'busqueda', component: BusquedaComponent },
  { path: 'crear_usuario', component: CrearUsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }