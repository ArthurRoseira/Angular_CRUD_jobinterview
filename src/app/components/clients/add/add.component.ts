import { ClienteService } from './../../../clientes/cliente.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms'
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
      nomeCompleto: [cliente.nomeCompleto, Validators.minLength(4)],
      dataNascimento: [cliente.dataNascimento],
      cpf: [cliente.cpf, Validators.minLength(11)],
      email: [cliente.email, [Validators.email]],
      telefone: [cliente.telefone, Validators.minLength(11)],
      dataCadastro: [new Date(Date.now())]
    })
  }

  onSubmit() {
    this.ClienteService.create(this.clienteForm.value)
    this.clienteForm.reset(new Cliente());
    this.ClienteService.showMessage('Cliente Adicionado')
  }

}
