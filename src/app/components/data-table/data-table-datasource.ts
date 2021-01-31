import { ClienteService } from './../../clientes/cliente.service';
import { Cliente } from './../../clientes/cliente';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
// export interface DataTableItem {
//   name: string;
//   id: number;
// }

// TODO: replace this with real data from your application
// const EXAMPLE_DATA: Cliente[] = [
//   { id: 1, nomeCompleto: "caio Santos", dataNascimento: new Date("1996/01/15"), cpf: '08873958990', dataCadastro: new Date("2001/01/15"), email: "arthurroseira@gmail.com", telefone: 992119904 },
//   { id: 2, nomeCompleto: "Arthur Santos", dataNascimento: new Date("1996/01/15"), cpf: '08873958990', dataCadastro: new Date(Date.now()), email: "arthurroseira@gmail.com", telefone: 992119904 }

// ];


export class DataTableDataSource extends DataSource<Cliente> {
  data: Cliente[] = this.ClientService.read();
  paginator: MatPaginator;
  sort: MatSort;

  constructor(private ClientService: ClienteService) {
    super();
  }


  connect(): Observable<Cliente[]> {

    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }


  disconnect() { }


  private getPagedData(data: Cliente[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }


  private getSortedData(data: Cliente[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'nomeCompleto': return compare(a.nomeCompleto, b.nomeCompleto, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'addedAt': return compare(+a.id, +b.id, isAsc);
        case 'dataNascimento': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: string | number | Date, b: string | number | Date, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
