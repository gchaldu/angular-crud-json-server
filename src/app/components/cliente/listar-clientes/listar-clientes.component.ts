import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

interface cliente{
  apellido: string,
  nombre:string,
  dni:number,
  fechaInicio:string,
  id:number
}

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {

  lista:cliente[] = []

  constructor(private clienteService: ClienteService) {

    this.mostrarClientes()
  }

  ngOnInit(): void {
  }

  async mostrarClientes(){
    this.lista = await this.clienteService.getClientes()
    console.log(this.lista)
  }

  eliminarCliente(id: number){
    this.clienteService.deleteCliente(id);
  }

}
