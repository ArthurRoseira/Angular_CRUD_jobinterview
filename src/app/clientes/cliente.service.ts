import { Cliente } from './cliente';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clientes: Cliente[] = [
    { id: 1, nomeCompleto: "Caio Santos", dataNascimento: new Date("1996/01/15"), cpf: '08873958990', dataCadastro: new Date("2001/01/15"), email: "arthurroseira@gmail.com", telefone: 992119904 },
    { id: 2, nomeCompleto: "Arthur Santos", dataNascimento: new Date("1996/01/15"), cpf: '08873958990', dataCadastro: new Date(Date.now()), email: "arthurroseira@gmail.com", telefone: 992119904 },
    { id: 3, nomeCompleto: "Victor Santos", dataNascimento: new Date("1996/01/15"), cpf: '08873958990', dataCadastro: new Date(Date.now()), email: "arthurroseira@gmail.com", telefone: 992119904 }
  ];

  constructor(private snackBar: MatSnackBar) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(cliente: Cliente): void {
    this.clientes.push(cliente)
  }

  read() {
    return this.clientes
  }

  readById(id: string) {
    var cliente = this.clientes.find(c => c.id == +id)
    return cliente
  }

  update(cliente: Cliente): void {
    let id = cliente.id;
    var update: Cliente = this.clientes.find(c => c.id == +id)!
    var index = this.clientes.indexOf(update)
    this.clientes = this.clientes.splice(index, 1)
    this.clientes.push(cliente)
  }

  delete(id: string): Cliente[] {
    var update: Cliente = this.clientes.find(c => c.id == +id)!
    var index = this.clientes.indexOf(update)
    this.clientes = this.clientes.filter(c => c.id != +id)
    this.clientes.splice(index, 1)
    return this.clientes
  }


}
