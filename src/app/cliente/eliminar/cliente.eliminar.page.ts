import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.servicio';

@Component({
  selector: 'app-eliminar',
  templateUrl: './cliente.eliminar.page.html',
  //styleUrls: ['./eliminar.page.scss'],
})
export class ClienteEliminarPage {

  id="6"

  constructor(private cliServ:ClienteService) { }

  grabar(){
    this.cliServ.eliminarServicio(this.id)
  }

}
