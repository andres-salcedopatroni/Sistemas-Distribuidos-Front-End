import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { ListaComponent } from './componentes/lista/lista.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IngresoComponent } from './componentes/ingreso/ingreso.component';
import { MiUsuarioComponent } from './componentes/mi-usuario/mi-usuario.component';
import { CrearUsuarioComponent } from './componentes/crear-usuario/crear-usuario.component';
import { ActualizarUsuarioComponent } from './componentes/actualizar-usuario/actualizar-usuario.component';
import { MiUsuarioService } from './servicios/mi-usuario.service';
import { NavbarComponent } from './componentes/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    ListaComponent,
    IngresoComponent,
    MiUsuarioComponent,
    CrearUsuarioComponent,
    ActualizarUsuarioComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MiUsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
