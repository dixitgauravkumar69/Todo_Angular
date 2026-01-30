import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    loadComponent: () =>
      import('./Components/home/home').then(m => m.Home),
    children: [
      {
        path: '',
        redirectTo: 'seeList',
        pathMatch: 'full'
      },
      {
        path: 'addTask',
        loadComponent: () =>
          import('./Components/add-task/add-task')
            .then(m => m.AddTaskComponent)
      },
      {
        path: 'seeList',
        loadComponent: () =>
          import('./Components/list-task/list-task')
            .then(m => m.ListTaskComponent)
      }
    ]
  }

];
