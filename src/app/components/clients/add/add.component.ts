import { ClienteService } from './../../../clientes/cliente.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { Cliente } from 'src/app/clientes/cliente';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  clienteForm: FormGroup

  constructor(private fb: FormBuilder, private ClienteService: ClienteService) { }

  ngOnInit(): void {
    this.initializeForm(new Cliente());
  }

  initializeForm(cliente: Cliente): void {
    this.clienteForm = this.fb.group({
      id: [this.ClienteService.clientes.length + 1],
      nomeCompleto: [cliente.nomeCompleto],
      dataNascimento: [cliente.dataNascimento],
      cpf: [cliente.cpf],
      email: [cliente.email],
      telefone: [cliente.telefone],
      dataCadastro: [new Date(Date.now())]
    })
  }

  onSubmit() {
    console.log(this.clienteForm.value);
    this.clienteForm.reset(new Cliente())
  }

}
