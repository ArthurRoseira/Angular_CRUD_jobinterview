import { AddComponent } from './components/clients/add/add.component';
import { ListComponent } from './components/clients/list/list.component';
import { MainScreenComponent } from './views/main-screen/main-screen.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "clientes/:screen",
    component: MainScreenComponent,
    children: [
      { path: 'list', component: ListComponent },
      { path: 'add', component: AddComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
