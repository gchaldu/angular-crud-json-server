import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(parametro => {
      const id = parametro['id']
      console.log(id)
    })

  }

}
