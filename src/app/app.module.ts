import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarClientesComponent } from './components/cliente/listar-clientes/listar-clientes.component';
import { NuevoClienteComponent } from './components/cliente/nuevo-cliente/nuevo-cliente.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { EditarClienteComponent } from './components/cliente/editar-cliente/editar-cliente.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListarClientesComponent,
    NuevoClienteComponent,
    NavbarComponent,
    EditarClienteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
