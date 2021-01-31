import { ClienteService } from './../../clientes/cliente.service';
import { Cliente } from './../../clientes/cliente';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DataTableDataSource } from './data-table-datasource';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Cliente>;
  dataSource: DataTableDataSource;

  searchNome: string = ''

  constructor(private ClientService: ClienteService) { }
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'nomeCompleto', 'dataNascimento', 'cpf', 'addedAt', 'actions'];

  ngOnInit() {
    this.dataSource = new DataTableDataSource(this.ClientService);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  delete(id: string): void {
    let arr: any = this.ClientService.delete(id)
    this.ClientService.showMessage(`Cliente Deletado ${id}`)
    this.table.dataSource = this.ClientService.read();
  }


  search(): void {
    let searchResult: Cliente[] = this.ClientService.searchByName(this.searchNome)
    this.table.dataSource = searchResult
  }

  clear(): void {
    this.searchNome = ''
    this.table.dataSource = this.ClientService.read();
  }

}
