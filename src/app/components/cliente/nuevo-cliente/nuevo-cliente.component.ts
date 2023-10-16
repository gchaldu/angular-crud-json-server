import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/interfaces/interfaces';
import { ClienteService } from '../../../services/cliente.service';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.css']
})
export class NuevoClienteComponent {


  formulario: FormGroup = this.formBuilder.group({
    apellido:['', [Validators.required, Validators.minLength(3)]],
    nombre:['', Validators.required],
    dni:[0, Validators.required],
    fechaInicio:['', Validators.required],
  })

  constructor(private formBuilder: FormBuilder, private ClienteService: ClienteService) { }

  guardarCliente(){

    if(this.formulario.invalid){
      this.formulario.markAllAsTouched()
      return;
    }
    const cliente: Cliente = {
      apellido: this.formulario.controls['apellido'].value,
      nombre:this.formulario.controls['nombre'].value,
      dni: this.formulario.controls['dni'].value,
      fechaInicio: this.formulario.controls['fechaInicio'].value,
    }
    //this.ClienteService.postCliente(cliente)
  }

  validar(field: string, error: string){
    return this.formulario.controls[field].getError(error)
    &&
    this.formulario.controls[field].touched
  }

}
