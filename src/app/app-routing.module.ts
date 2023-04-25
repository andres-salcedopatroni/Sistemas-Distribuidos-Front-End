import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { IngresoComponent } from './componentes/ingreso/ingreso.component';
import { CrearUsuarioComponent } from './componentes/crear-usuario/crear-usuario.component';
import { ActualizarUsuarioComponent } from './componentes/actualizar-usuario/actualizar-usuario.component';
import { MiUsuarioComponent } from './componentes/mi-usuario/mi-usuario.component';

const routes: Routes = [
  { path: '', component: IngresoComponent },
  { path: 'busqueda', component: BusquedaComponent },
  { path: 'crear_usuario', component: CrearUsuarioComponent },
  { path: 'actualizar_usuario', component: ActualizarUsuarioComponent },
  { path: 'mi_usuario', component: MiUsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }