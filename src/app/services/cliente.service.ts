import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url='http://localhost:4000/clientes'

  constructor() { }

  async getClientes(){
    try {
      const resultado = await fetch(this.url)
      const listaClientes = await resultado.json();
      return listaClientes
    } catch (error) {
      alert('Error...')
    }
  }
}
