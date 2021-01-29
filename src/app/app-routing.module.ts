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
    path: "clientes/:id",
    component: MainScreenComponent,
    children: [
      { path: 'list', component:}
      { path: 'add', component:}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
