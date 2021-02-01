import { Cliente } from './cliente';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clientes: Cliente[] = [
    { id: 1, nomeCompleto: "Caio de Souza", dataNascimento: new Date("1996/01/15"), cpf: '05574123690', dataCadastro: new Date("2001/01/15"), email: "caio@gmail.com", telefone: 992119904 },
    { id: 2, nomeCompleto: "Luiza Castro", dataNascimento: new Date("1966/04/13"), cpf: '044478121124', dataCadastro: new Date(Date.now()), email: "luiza@gmail.com", telefone: 992119904 },
    { id: 3, nomeCompleto: "Victor Da Silva", dataNascimento: new Date("1996/01/15"), cpf: '02214532569', dataCadastro: new Date(Date.now()), email: "victor@gmail.com", telefone: 992119904 },
    { id: 4, nomeCompleto: "Ana Aparecida", dataNascimento: new Date("1996/01/15"), cpf: '08874558970', dataCadastro: new Date("2008/10/01"), email: "ana@gmail.com", telefone: 992119904 },
    { id: 5, nomeCompleto: "José Santos", dataNascimento: new Date("1976/02/20"), cpf: '02214532569', dataCadastro: new Date(Date.now()), email: "jose@gmail.com", telefone: 992119904 },
    { id: 6, nomeCompleto: "Vanessa De Matos", dataNascimento: new Date("1990/11/05"), cpf: '02214532569', dataCadastro: new Date("2011/11/20"), email: "vanessa@gmail.com", telefone: 992119904 },
    { id: 7, nomeCompleto: "Ricardo", dataNascimento: new Date("1990/11/05"), cpf: '02214532569', dataCadastro: new Date("2006/05/21"), email: "ricardo@gmail.com", telefone: 992119904 }
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

  readById(id: string): Cliente {
    var cliente = this.clientes.find(c => c.id == +id)!
    return cliente
  }

  update(cliente: Cliente): void {
    let id = cliente.id;
    var update: Cliente = this.clientes.find(c => c.id == +id)!
    var index = this.clientes.indexOf(update)
    this.clientes.splice(index, 1)
    this.clientes.push(cliente)
    this.clientes.sort(function (a, b) {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }

  delete(id: string): Cliente[] {
    var update: Cliente = this.clientes.find(c => c.id == +id)!
    var index = this.clientes.indexOf(update)
    this.clientes = this.clientes.filter(c => c.id != +id)
    this.clientes.splice(index, 1)
    return this.clientes
  }

  searchByName(name: string): Cliente[] {
    let searhClientes: Cliente[]
    searhClientes = this.clientes.filter(cliente => {
      return cliente.nomeCompleto.includes(name)
    })

    return searhClientes
  }
}
