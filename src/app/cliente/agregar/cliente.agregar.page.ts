import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.servicio';

@Component({
  selector: 'app-agregar',
  templateUrl: './cliente.agregar.page.html',
  //styleUrls: ['./cliente.agregar.page.scss'],
})
export class ClienteAgregarPage {
  // Estructura registro, agrupa varios campos
  // Debieramos utilizar una interface
  registro={
    nombres:"Harrys",
    apellidos:"El Magnifico",
    correo:"harrys@ciudal.cl",
    clave:"macarena",
  }
  constructor(private cliServ:ClienteService) { }
  // Método grabar, vacío
  grabar(){
    this.cliServ.agregarServicio(this.registro)
  }

}
