import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarClientesComponent } from './components/cliente/listar-clientes/listar-clientes.component';
import { NuevoClienteComponent } from './components/cliente/nuevo-cliente/nuevo-cliente.component';
import { EditarClienteComponent } from './components/cliente/editar-cliente/editar-cliente.component';

const routes: Routes = [
  {path:'', component:ListarClientesComponent},
  {path:'home', component:ListarClientesComponent},
  {path:'nuevo', component:NuevoClienteComponent},
  {path:'editar/:id', component: EditarClienteComponent},
  {path:'**', redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
