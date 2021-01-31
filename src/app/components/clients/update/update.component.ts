import { ClienteService } from './../../../clientes/cliente.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Cliente } from 'src/app/clientes/cliente';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  clienteForm: FormGroup

  constructor(private ClienteService: ClienteService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id')!);
    let cliente: Cliente
    cliente = this.ClienteService.readById(this.route.snapshot.paramMap.get('id')!)
    this.initializeForm(cliente);
  }

  initializeForm(cliente: Cliente): void {
    this.clienteForm = this.fb.group({
      id: [cliente.id],
      nomeCompleto: [cliente.nomeCompleto, Validators.minLength(4)],
      dataNascimento: [cliente.dataNascimento],
      cpf: [cliente.cpf, Validators.minLength(11)],
      email: [cliente.email, [Validators.email]],
      telefone: [cliente.telefone, Validators.minLength(11)],
      dataCadastro: [new Date(Date.now())]
    })
  }

  onSubmit() {
    this.ClienteService.update(this.clienteForm.value)
    this.ClienteService.showMessage('Cliente Atualizado')
    this.router.navigate(['/clientes/list/list'])
  }

}
