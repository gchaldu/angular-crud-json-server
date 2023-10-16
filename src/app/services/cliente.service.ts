import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/interfaces';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url='http://localhost:4000/clientes'

  constructor(private router: Router) { }

  async getClientes(){
    try {
      const resultado = await fetch(this.url)
      const listaClientes = await resultado.json();
      return listaClientes
    } catch (error) {
      alert('Error...')
    }
  }

  async postCliente(cliente: Cliente){
    try {
      await fetch(this.url,
        {
          method: 'POST',
          body: JSON.stringify(cliente),
          headers: {'Content-type': 'application/json'}
        })
      this.router.navigate(['home'])
    } catch (error) {
      console.log(error)
    }
  }

  async deleteCliente(id: number){

  }
}
