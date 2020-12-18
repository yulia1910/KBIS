import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ResolveGuard } from './guards/resolve.guard';
import { HomeComponent } from './home/home.component'

const routes: Routes = [
              { path: '', component: HomeComponent },
              { path: 'home', component: HomeComponent },
              { path: 'todoList',
              loadChildren: () => import('./todo-list/todo-list.module')
              .then(m => m.TodoListModule),
              resolve: { data: ResolveGuard} },
              { path: '**', component: HomeComponent },
  
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
   // CommonModule,
  exports: [RouterModule]
})
export class AppRoutingModule { }
