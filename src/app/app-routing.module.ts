import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'cliente/listar',
    loadChildren: () => import('./cliente/listar/cliente.listar.module').then( m => m.ClienteListarPageModule)
  },
  {
    path: 'cliente/agregar',
    loadChildren: () => import('./cliente/agregar/cliente.agregar.module').then( m => m.ClienteAgregarPageModule)
  }  ,
  {
    path: 'cliente/actualizar',
    loadChildren: () => import('./cliente/actualizar/cliente.actualizar.module').then( m => m.ClienteActualizarPageModule)
  }  ,  
  {
    path: 'cliente/eliminar',
    loadChildren: () => import('./cliente/eliminar/cliente.eliminar.module').then( m => m.ClienteEliminarPageModule)
  }  ,

  {
    path: 'cliente/leer',
    loadChildren: () => import('./cliente/leer/cliente.leer.module').then( m => m.ClienteLeerPageModule)
  }  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
