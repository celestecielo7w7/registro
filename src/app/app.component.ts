import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [

    { title: 'Login', url: '/login/conectar', icon: 'mail' },
    { title: 'Registro', url: '/registro', icon: 'mail' },
    { title: 'Cliente/Listar', url: '/cliente/listar', icon: 'mail' },
    { title: 'Cliente/agregar', url: '/cliente/agregar', icon: 'mail' },
    { title: 'Cliente/Actualizar', url: '/cliente/actualizar', icon: 'mail' },
    { title: 'Cliente/Eliminar', url: '/cliente/eliminar', icon: 'mail' },
    { title: 'Cliente/Leer', url: '/cliente/leer', icon: 'mail' },

  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
